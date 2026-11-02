import { useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  color: string
}

type Palette = {
  bg: string
  grid: string
  node: string
  line: [number, number, number]
  orb1: [number, number, number]
  orb2: [number, number, number]
  orb3: [number, number, number]
}

const palettes: Record<"dark" | "light", Palette> = {
  dark: {
    bg: "#070a12",
    grid: "rgba(148, 163, 184, 0.05)",
    node: "rgba(52, 211, 153, 0.8)",
    line: [16, 185, 129],
    orb1: [16, 185, 129], // emerald
    orb2: [6, 182, 212],  // cyan
    orb3: [139, 92, 246], // violet
  },
  light: {
    bg: "#f1f5f9",
    grid: "rgba(71, 85, 105, 0.06)",
    node: "rgba(5, 150, 105, 0.85)",
    line: [13, 148, 136],
    orb1: [16, 185, 129],
    orb2: [14, 165, 233],
    orb3: [124, 58, 237],
  },
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const palette = palettes[resolvedTheme]
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let animationFrame = 0
    let time = 0

    // Mouse tracking for interactive energy field
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    // Initialize particles
    const particleCount = Math.min(55, Math.max(22, Math.floor((width * height) / 28000)))
    const particles: Particle[] = []

    const colors = resolvedTheme === "dark" 
      ? ["#34d399", "#22d3ee", "#a78bfa", "#10b981"]
      : ["#059669", "#0284c7", "#7c3aed", "#0d9488"]

    for (let i = 0; i < particleCount; i++) {
      const r = 1.2 + Math.random() * 2
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: r,
        baseRadius: r,
        color: colors[i % colors.length]
      })
    }

    const drawOrb = (
      cx: number,
      cy: number,
      radius: number,
      [r, g, b]: [number, number, number],
      maxOpacity: number
    ) => {
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${maxOpacity})`)
      grad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${maxOpacity * 0.4})`)
      grad.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, ${maxOpacity * 0.08})`)
      grad.addColorStop(1, "transparent")
      ctx.fillStyle = grad
      ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2)
    }

    const draw = () => {
      time += 0.007
      ctx.clearRect(0, 0, width, height)

      // 1. Deep Space Tech Background
      ctx.fillStyle = palette.bg
      ctx.fillRect(0, 0, width, height)

      // 2. Cosmic Ambient Plasma Orbs
      const isDark = resolvedTheme === "dark"
      const orbScale = Math.max(width, height)

      // Orb 1: Primary Emerald Core
      const o1x = width * (0.2 + Math.sin(time * 0.7) * 0.08)
      const o1y = height * (0.2 + Math.cos(time * 0.5) * 0.08)
      drawOrb(o1x, o1y, orbScale * 0.48, palette.orb1, isDark ? 0.22 : 0.16)

      // Orb 2: Electric Cyan Nexus
      const o2x = width * (0.8 + Math.cos(time * 0.6) * 0.09)
      const o2y = height * (0.4 + Math.sin(time * 0.4) * 0.08)
      drawOrb(o2x, o2y, orbScale * 0.44, palette.orb2, isDark ? 0.18 : 0.14)

      // Orb 3: Radiant Deep Violet Horizon
      const o3x = width * (0.45 + Math.sin(time * 0.5) * 0.12)
      const o3y = height * (0.85 + Math.cos(time * 0.35) * 0.06)
      drawOrb(o3x, o3y, orbScale * 0.42, palette.orb3, isDark ? 0.12 : 0.08)

      // 3. Cybernetic Isometric Grid Matrix
      const gridSize = 48
      const gridShift = (time * 18) % gridSize
      ctx.lineWidth = 1
      ctx.strokeStyle = palette.grid

      ctx.beginPath()
      for (let x = -gridSize; x < width + gridSize; x += gridSize) {
        ctx.moveTo(x + gridShift, 0)
        ctx.lineTo(x + gridShift, height)
      }
      for (let y = -gridSize; y < height + gridSize; y += gridSize) {
        ctx.moveTo(0, y - gridShift)
        ctx.lineTo(width, y - gridShift)
      }
      ctx.stroke()

      // Mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      // Mouse interactive aura
      if (mouse.active) {
        drawOrb(mouse.x, mouse.y, 220, palette.orb1, isDark ? 0.15 : 0.1)
      }

      // 4. Update & Render Constellation Particle Mesh
      const maxConnectDist = 125
      const mouseRadius = 150

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!reduceMotion) {
          p.x += p.vx
          p.y += p.vy

          // Wrap edges
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0

          // Mouse push/pull physics
          if (mouse.active) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < mouseRadius && dist > 0) {
              const force = (1 - dist / mouseRadius) * 1.5
              p.x += (dx / dist) * force
              p.y += (dy / dist) * force
            }
          }
        }

        // Draw particle node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = isDark ? 8 : 4
        ctx.fill()
        ctx.shadowBlur = 0

        // Connect nearby nodes
        const [lr, lg, lb] = palette.line
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const d = Math.sqrt(dx * dx + dy * dy)

          if (d < maxConnectDist) {
            const alpha = (1 - d / maxConnectDist) * (isDark ? 0.28 : 0.18)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${lr}, ${lg}, ${lb}, ${alpha})`
            ctx.lineWidth = 1
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
    }

    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    document.addEventListener("mouseleave", handlePointerLeave)

    draw()

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("mouseleave", handlePointerLeave)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-700"
    />
  )
}
