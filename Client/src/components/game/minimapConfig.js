// ═══════════════════════════════════════════════════════════════════════════
// PRECISION MINIMAP CONFIG  (GTA / COD-style radar)
// ═══════════════════════════════════════════════════════════════════════════
//
// Each entry covers one in-game floor.  The key matches `currentFloor`
// (1 = Ground, 2 = Floor-1, … 8 = Floor-7).
//
// ── HOW TO CALIBRATE minX / maxX / minZ / maxZ ───────────────────────────
//  1. Open the game and open the browser console.
//  2. Walk to the FAR LEFT edge of the floor → read Z from minimap readout
//     → that value is minZ.
//  3. Walk to the FAR RIGHT edge → that value is maxZ.
//  4. Walk to the FAR BACK (north) edge → read X → that is minX.
//  5. Walk to the FAR FRONT (south) edge → read X → that is maxX.
//  6. Paste the four numbers into the correct floor entry below.
//
// ── HOW TO CALIBRATE minY / maxY ─────────────────────────────────────────
//  Already derived from GP_LEVEL_UP_DOWN_COORDINATES y values in GameUI:
//  Ground=0, F1=7, F2=10, F3=12, F4=16, F5=20, F6=24, F7=28
//
// ── Projection axis orientation ──────────────────────────────────────────
//  World Z → horizontal (left = minZ, right = maxZ)
//  World X → vertical   (top  = maxX, bottom = minX)  [X is inverted]
//  If the dot moves in the wrong direction for an axis, swap min↔max for
//  that axis in the entry below.
// ══════════════════════════════════════════════════════════════════════════
export const MINIMAP_CONFIG = {
    //         minY  maxY  ← player.position.y range for this floor
    //         minX  maxX  ← world X bounds of walkable area on this floor
    //         minZ  maxZ  ← world Z bounds of walkable area on this floor
    // Bounds back-solved from: spawn (x=-15, z=-4) → image pixel (546, 1919) on 1080×1920 image
    // nz = 546/1080 = 0.5056  → minZ = -4 - 0.5056×35 = -22,  maxZ = 13
    // nx = 1 - 1919/1920 = 0.00052 → minX ≈ -15, maxX = 20
    1: { minY: -1, maxY: 3.5, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/gruond_floor.PNG' },
    2: { minY: 3.5, maxY: 8.5, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/1st_floor.PNG' },
    3: { minY: 8.5, maxY: 11, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/2nd_floor.PNG' },
    4: { minY: 11, maxY: 14, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/3rd_floor.PNG' },
    5: { minY: 14, maxY: 18, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/4th_floor.PNG' },
    6: { minY: 18, maxY: 22, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/5th_floor.PNG' },
    7: { minY: 22, maxY: 26, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/6th_floor.PNG' },
    8: { minY: 26, maxY: 99, minX: -15, maxX: 20, minZ: -22, maxZ: 13, image: '/floor-maps/7th_floor.PNG' },
}

// ─── Locations ───────────────────────────────────────────────────────────────
export const LOCATIONS = [
    { name: "Reception", x: 10, z: -15 },
    { name: "Auditorium", x: 35, z: 20 },
]

// ─── Pure projection function ──────────────────────────────────────────────
// Converts a world (x, z) position into canvas pixel coordinates.
//   cfg     – one entry from MINIMAP_CONFIG
//   mapW    – canvas pixel width
//   mapH    – canvas pixel height
// Returns { px, py } — integer pixel position (clamped to canvas bounds).
export function worldToMinimap(worldX, worldZ, cfg, mapW, mapH) {
    // Top-down orthographic ratio mapping:
    // Game X (forward/back) translates to Image Y (up/down)
    // Game Z (left/right) translates to Image X (left/right)

    // Mapping using provided boundaries
    const py = Math.round((1 - (worldX - cfg.minX) / (cfg.maxX - cfg.minX)) * mapH)
    const px = Math.round(((worldZ - cfg.minZ) / (cfg.maxZ - cfg.minZ)) * mapW)

    return {
        px: px,
        py: py,
    }
}

// ─── Detect which floor config to use from player Y ───────────────────────
export function getFloorConfig(playerY) {
    for (const [, cfg] of Object.entries(MINIMAP_CONFIG)) {
        if (playerY >= cfg.minY && playerY < cfg.maxY) return cfg
    }
    // Fallback: use the entry whose midpoint is closest
    let best = MINIMAP_CONFIG[1]
    let bestDist = Infinity
    for (const [, cfg] of Object.entries(MINIMAP_CONFIG)) {
        const mid = (cfg.minY + cfg.maxY) / 2
        const d = Math.abs(playerY - mid)
        if (d < bestDist) { bestDist = d; best = cfg }
    }
    return best
}


