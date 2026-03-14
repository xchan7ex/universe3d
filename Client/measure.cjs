const fs = require('fs');
const path = require('path');

function readGlbBounds(filePath) {
    const buffer = fs.readFileSync(filePath);
    const magic = buffer.readUInt32LE(0);
    if (magic !== 0x46546C67) { throw new Error("Not a GLB"); }

    const version = buffer.readUInt32LE(4);
    const length = buffer.readUInt32LE(8);

    let offset = 12;
    // Chunk 0 is always JSON
    const chunkLength = buffer.readUInt32LE(offset); offset += 4;
    const chunkType = buffer.readUInt32LE(offset); offset += 4;

    if (chunkType !== 0x4E4F534A) { throw new Error("First chunk not JSON"); }
    const jsonStr = buffer.toString('utf8', offset, offset + chunkLength);
    const json = JSON.parse(jsonStr);

    // In many glbs (especially simple scenes), the root nodes or accessors contain the overall bounds.
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    if (json.accessors) {
        json.accessors.forEach(acc => {
            if (acc.type === 'VEC3' && acc.min && acc.max) {
                if (acc.min[0] < minX) minX = acc.min[0];
                if (acc.min[1] < minY) minY = acc.min[1];
                if (acc.min[2] < minZ) minZ = acc.min[2];
                if (acc.max[0] > maxX) maxX = acc.max[0];
                if (acc.max[1] > maxY) maxY = acc.max[1];
                if (acc.max[2] > maxZ) maxZ = acc.max[2];
            }
        });
    }

    console.log("Raw GLB Bound Min:", [minX, minY, minZ]);
    console.log("Raw GLB Bound Max:", [maxX, maxY, maxZ]);
    console.log("Size:", [maxX - minX, maxY - minY, maxZ - minZ]);
}

try {
    readGlbBounds(path.join(__dirname, 'public', 'models', 'gp-square.glb'));
} catch (e) {
    console.error(e);
}
