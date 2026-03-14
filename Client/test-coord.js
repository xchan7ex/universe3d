const MINIMAP_CONFIG = {
    1: { minY: -1, maxY: 3.5, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/gruond_floor.png' }
}

const FLOOR_PLAN_BOUNDS = {
    imgW: 1920,
    imgH: 1080,
    left: 14,
    right: 1820,
    top: 269,
    bottom: 1061,
}

function worldToMinimap(worldX, worldZ, cfg, mapW, mapH) {
    const nx = (worldX - cfg.minX) / (cfg.maxX - cfg.minX)
    const nz = (worldZ - cfg.minZ) / (cfg.maxZ - cfg.minZ)

    const { imgW, imgH, left, right, top, bottom } = FLOOR_PLAN_BOUNDS
    const px = Math.round(((left + nz * (right - left)) / imgW) * mapW)
    const py = Math.round(((top + (1 - nx) * (bottom - top)) / imgH) * mapH)

    return {
        px: Math.max(0, Math.min(mapW, px)),
        py: Math.max(0, Math.min(mapH, py)),
    }
}

console.log("Top-Left Pixel (X,Z maxes out):", worldToMinimap(-15, -22, MINIMAP_CONFIG[1], 1920, 1080));
console.log("Bottom-Right Pixel (X,Z maxes out):", worldToMinimap(20, 13, MINIMAP_CONFIG[1], 1920, 1080));
