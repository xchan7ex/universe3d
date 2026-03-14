const FLOOR_PLAN_BOUNDS = {
    imgW: 1920,
    imgH: 1080,
    left: 14,
    right: 1820,
    top: 269,
    bottom: 1061,
}

function calibrateFromTwoPoints(refA, refB) {
    const { left, right, top, bottom } = FLOOR_PLAN_BOUNDS

    const nzA = (refA.imgPx - left) / (right - left)
    const nzB = (refB.imgPx - left) / (right - left)

    const nxA = 1 - (refA.imgPy - top) / (bottom - top)
    const nxB = 1 - (refB.imgPy - top) / (bottom - top)

    const span_z = (refA.worldZ - refB.worldZ) / (nzA - nzB)
    const minZ_final = refA.worldZ - nzA * span_z
    const maxZ_final = minZ_final + span_z

    const span_x = (refA.worldX - refB.worldX) / (nxA - nxB)
    const minX_final = refA.worldX - nxA * span_x
    const maxX_final = minX_final + span_x

    const result = {
        minX: parseFloat(minX_final.toFixed(2)),
        maxX: parseFloat(maxX_final.toFixed(2)),
        minZ: parseFloat(minZ_final.toFixed(2)),
        maxZ: parseFloat(maxZ_final.toFixed(2)),
    }

    console.log(result)
    return result
}

console.log("Simulating calibration with standard corners...")
calibrateFromTwoPoints(
    { worldX: 20, worldZ: -22, imgPx: 14, imgPy: 269 },      // Top Left Map = Max X, Min Z
    { worldX: -15, worldZ: 13, imgPx: 1820, imgPy: 1061 }    // Bottom Right Map = Min X, Max Z
)
