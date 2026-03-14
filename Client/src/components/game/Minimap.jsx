import React, { useRef, useEffect, useCallback } from 'react'
import { MINIMAP_CONFIG, worldToMinimap, getFloorConfig, LOCATIONS } from './minimapConfig'

// ─────────────────────────────────────────────────────────────────────────────
// Set to true to enable calibration mode.
// While active, clicking anywhere on the minimap canvas prints the pixel
// coordinate (relative to the full-res floor image) to the console.
// Use those values as imgPx / imgPy in calibrateFromTwoPoints().
// Set back to false before shipping.
// ─────────────────────────────────────────────────────────────────────────────
const CALIBRATION_MODE = true

/**
 * Minimap component — renders a canvas-based floor map with a live player dot.
 *
 * Props:
 *  playerRef       – ref forwarded from GameCanvas pointing at the Three.js mesh
 *  currentFloor    – integer (1 = Ground, 2 = F1, …)
 *  buildingName    – display name shown in the header
 *  isExpanded      – boolean; true → 400×446 canvas, false → 260×290
 */
function Minimap({ playerRef, currentFloor, buildingName, isExpanded }) {
    const canvasRef = useRef(null)
    const coordRef = useRef(null)   // debug readout
    const rafRef = useRef(null)
    const imgCacheRef = useRef({})    // { [imagePath]: HTMLImageElement }
    const lastDrawRef = useRef({ x: null, z: null, cfg: null })
    const calClickRef = useRef(0)    // calibration click counter

    // Pre-load an image (returns cached instance if already loaded)
    function loadImage(src) {
        if (imgCacheRef.current[src]) return imgCacheRef.current[src]
        const img = new Image()
        img.src = src
        imgCacheRef.current[src] = img
        return img
    }

    // Pre-load all floor images immediately so switching is instant
    useEffect(() => {
        Object.values(MINIMAP_CONFIG).forEach(cfg => loadImage(cfg.image))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // RAF draw loop
    useEffect(() => {
        // We need a variable to store the old/smoothed center coordinate
        let displayX = null
        let displayY = null

        const drawMinimap = () => {
            rafRef.current = requestAnimationFrame(drawMinimap)

            const canvas = canvasRef.current
            if (!canvas) return

            const player = playerRef?.current?.current
            if (!player) return

            const { x, y, z } = player.position
            // Ensure we get a valid rotation, defaulting to 0
            const rotationY = player.rotation ? player.rotation.y : 0

            const cfg = getFloorConfig(y)

            lastDrawRef.current = { x, z, cfg }

            const W = canvas.width
            const H = canvas.height
            const ctx = canvas.getContext('2d')

            // ── 1. Draw floor image ──────────────────────────────────────────────
            const img = loadImage(cfg.image)
            ctx.clearRect(0, 0, W, H)

            // Background color for areas outside the map
            ctx.fillStyle = '#1e293b'
            ctx.fillRect(0, 0, W, H)

            if (!img.complete || img.naturalWidth === 0) {
                img.onload = () => { lastDrawRef.current.x = null } // force redraw
                return
            }

            // The natural/real scale of the image
            const IMG_W = img.naturalWidth
            const IMG_H = img.naturalHeight

            // Map dimensions in real world meters
            const mapWorldWidth = cfg.maxX - cfg.minX
            const mapWorldHeight = cfg.maxZ - cfg.minZ

            // Target pixels on the actual full image
            const { px: targetX, py: targetY } = worldToMinimap(x, z, cfg, IMG_W, IMG_H)

            // Initialize smoothed position the first frame
            if (displayX === null) displayX = targetX
            if (displayY === null) displayY = targetY

            // LERP for smooth viewport tracking
            displayX += (targetX - displayX) * 0.2
            displayY += (targetY - displayY) * 0.2

            // We want 'CROP_METERS' to span fully across the minimap canvas.
            const CROP_METERS = 40

            // How many image pixels correspond to CROP_METERS?
            const cropPxW = (CROP_METERS / mapWorldWidth) * IMG_W
            const cropPxH = (CROP_METERS / mapWorldHeight) * IMG_H

            // Scale factor to fit crop inside canvas viewport
            const scaleX = W / cropPxW
            const scaleY = H / cropPxH

            // ── 2. Canvas Transformation ─────────────────────────────────────────
            ctx.save()

            // Move canvas origin to the center of the viewport
            ctx.translate(W / 2, H / 2)

            // Apply scale so the crop size fits the canvas
            ctx.scale(scaleX, scaleY)

            // Translate the map so that the player is always at (0,0)
            ctx.translate(-displayX, -displayY)

            // Draw the map full size (since we safely scaled the context)
            ctx.drawImage(img, 0, 0, IMG_W, IMG_H)

            // ── 3. Draw Grid lines (Debug Mode) ──────────────────────────────────
            if (CALIBRATION_MODE) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'
                ctx.lineWidth = 2 / scaleX
                ctx.beginPath()

                // Draw lines every 50 pixels (of the original image)
                for (let i = 0; i <= IMG_W; i += 50) {
                    ctx.moveTo(i, 0)
                    ctx.lineTo(i, IMG_H)
                }
                for (let i = 0; i <= IMG_H; i += 50) {
                    ctx.moveTo(0, i)
                    ctx.lineTo(IMG_W, i)
                }
                ctx.stroke()
            }

            // ── 4. Draw world locations ──────────────────────────────────────────
            ctx.font = `${10 / scaleX}px sans-serif`
            ctx.textAlign = "center"
            LOCATIONS.forEach(loc => {
                const { px: locPx, py: locPy } = worldToMinimap(loc.x, loc.z, cfg, IMG_W, IMG_H)

                ctx.beginPath()
                ctx.arc(locPx, locPy, 4 / scaleX, 0, Math.PI * 2)
                ctx.fillStyle = '#facc15' // Yellow dot
                ctx.fill()
                ctx.strokeStyle = '#000000'
                ctx.lineWidth = 1 / scaleX
                ctx.stroke()

                ctx.fillStyle = '#ffffff'
                ctx.fillText(loc.name, locPx, locPy - (8 / scaleY))
            })

            ctx.restore() // Undo scale and translation back to default viewport

            // Center pixel for UI elements overlay
            const centerX = W / 2
            const centerY = H / 2

            // ── 5. Draw pulsing range ring (outer glow) ──────────────────────────
            const t = (Date.now() % 1800) / 1800          // 0→1 in 1.8 s
            const pulse = 0.5 + 0.5 * Math.sin(t * Math.PI * 2)
            ctx.beginPath()
            ctx.arc(centerX, centerY, 8 + pulse * 4, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(239,68,68,${0.15 + pulse * 0.15})`
            ctx.fill()

            // ── 5. Draw world locations ──────────────────────────────────────────
            ctx.font = "10px sans-serif"
            ctx.textAlign = "center"
            LOCATIONS.forEach(loc => {
                const { px: locPx, py: locPy } = worldToMinimap(loc.x, loc.z, cfg, IMG_W, IMG_H)
                // Offset by viewport translation
                const drawLocX = locPx - sx
                const drawLocY = locPy - sy

                // Only draw if within viewport (rough bounds check to save rendering)
                if (drawLocX > -50 && drawLocX < W + 50 && drawLocY > -50 && drawLocY < H + 50) {
                    ctx.beginPath()
                    ctx.arc(drawLocX, drawLocY, 4, 0, Math.PI * 2)
                    ctx.fillStyle = '#facc15' // Yellow dot
                    ctx.fill()
                    ctx.strokeStyle = '#000000'
                    ctx.lineWidth = 1
                    ctx.stroke()

                    ctx.fillStyle = '#ffffff'
                    ctx.fillText(loc.name, drawLocX, drawLocY - 8)
                }
            })

            // ── 6. Draw solid dot & Directional Arrow ────────────────────────────
            // We translate to the center point to make drawing and rotation easier
            ctx.save()
            ctx.translate(centerX, centerY)

            // Player's Y rotation goes one way, map rotation is fixed, so we invert
            // This might need tweaking depending on the parent object's actual rig rotation.
            ctx.rotate(-rotationY)

            // Draw arrow pointing UP (negative Y in canvas space)
            ctx.beginPath()
            ctx.moveTo(0, -12) // Point
            ctx.lineTo(6, 6)   // Bottom right
            ctx.lineTo(0, 2)   // Inner indent
            ctx.lineTo(-6, 6)  // Bottom left
            ctx.closePath()

            ctx.fillStyle = '#ef4444'
            ctx.fill()
            ctx.strokeStyle = '#ffffff'
            ctx.lineWidth = 1.5
            ctx.stroke()

            // Draw center dot
            ctx.beginPath()
            ctx.arc(0, 0, 3, 0, Math.PI * 2)
            ctx.fillStyle = '#ffffff'
            ctx.fill()

            ctx.restore() // restore back to origin

            // ── 6. Update debug readout ──────────────────────────────────────────
            if (coordRef.current) {
                const floorNum = Object.entries(MINIMAP_CONFIG).find(([, c]) => c === cfg)?.[0] ?? '?'
                coordRef.current.textContent =
                    `F${floorNum} | x:${x.toFixed(1)} z:${z.toFixed(1)} | rot:${rotationY.toFixed(2)}`
            }
        }

        rafRef.current = requestAnimationFrame(drawMinimap)
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
    }, [playerRef])

    // ── Calibration click handler ──────────────────────────────────────────
    // When CALIBRATION_MODE is on, clicking the canvas reports the pixel coord
    // on the FULL-SIZE floor image (not the canvas display size).
    const handleCalibrationClick = useCallback((e) => {
        if (!CALIBRATION_MODE) return
        const canvas = canvasRef.current
        if (!canvas) return

        // Bounding rect so we can convert from client coords to canvas coords
        const rect = canvas.getBoundingClientRect()
        const canvasX = e.clientX - rect.left
        const canvasY = e.clientY - rect.top

        // Scale from display size back to canvas resolution
        const scaleX = canvas.width / rect.width
        const scaleY = canvas.height / rect.height
        const canvasPx = canvasX * scaleX
        const canvasPy = canvasY * scaleY

        // The canvas is drawn at map resolution, not the raw image resolution.
        // We need normalised fractions (0..1) which are image-resolution-independent.
        const nx = canvasPx / canvas.width
        const ny = canvasPy / canvas.height

        // Report using the natural image dimensions (default 1080×1920 for GP Square)
        const IMG_W = 1080
        const IMG_H = 1920
        const imgPx = Math.round(nx * IMG_W)
        const imgPy = Math.round(ny * IMG_H)

        const player = playerRef?.current?.current
        const worldX = player ? player.position.x.toFixed(2) : '?'
        const worldZ = player ? player.position.z.toFixed(2) : '?'

        calClickRef.current += 1
        const label = calClickRef.current === 1 ? 'Ref A' : 'Ref B'
        console.log(`[Minimap Calibration] ${label} → imgPx:${imgPx}, imgPy:${imgPy}  |  worldX:${worldX}, worldZ:${worldZ}`)
        console.log(`  Pass to calibrateFromTwoPoints as: { worldX: ${worldX}, worldZ: ${worldZ}, imgPx: ${imgPx}, imgPy: ${imgPy} }`)
        if (calClickRef.current >= 2) calClickRef.current = 0  // reset after B
    }, [playerRef])

    return (
        <div className={`game-minimap ${isExpanded ? 'expanded' : ''}`}>
            {/* Header — floor label */}
            <div className="minimap-header">
                <span>{buildingName}</span>
                <span className="minimap-floor-label">
                    {currentFloor === 1 ? 'Ground' : `Floor ${currentFloor - 1}`}
                </span>
                <span className="minimap-key">M</span>
            </div>

            {/* Canvas fills the content area. The RAF loop draws floor image + dot. */}
            <div className="minimap-content">
                <canvas
                    ref={canvasRef}
                    className="minimap-canvas"
                    width={isExpanded ? 400 : 260}
                    height={isExpanded ? 446 : 290}
                    onClick={handleCalibrationClick}
                    style={CALIBRATION_MODE ? { cursor: 'crosshair', outline: '2px solid #facc15' } : undefined}
                />
                {/* Debug readout — updated by RAF loop, shows floor + world X/Z */}
                <span ref={coordRef} className="minimap-coords">F? | x:? z:?</span>
            </div>
        </div>
    )
}

export default Minimap
