import { useRef, useEffect, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  colorIndex: number
  nextColorIndex: number
  colorProgress: number
  colorSpeed: number
  currentRgb: string
}

const COLORS = [
  [255, 219, 88], // Amarillo
  [59, 130, 246], // Azul
  [239, 68, 68]   // Rojo
]

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[], w: number, h: number) => {
    ctx.clearRect(0, 0, w, h)

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1

      // Animación de transición de color
      p.colorProgress += p.colorSpeed
      if (p.colorProgress >= 1) {
        p.colorProgress = 0
        p.colorIndex = p.nextColorIndex
        let next = Math.floor(Math.random() * COLORS.length)
        while (next === p.colorIndex) next = Math.floor(Math.random() * COLORS.length)
        p.nextColorIndex = next
      }

      const c1 = COLORS[p.colorIndex]
      const c2 = COLORS[p.nextColorIndex]
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * p.colorProgress)
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * p.colorProgress)
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * p.colorProgress)
      p.currentRgb = `${r}, ${g}, ${b}`

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${p.currentRgb}, ${p.opacity})`
      ctx.fill()
    })

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 180) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)

          const opacity = 0.25 * (1 - dist / 180)
          const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
          gradient.addColorStop(0, `rgba(${particles[i].currentRgb}, ${opacity})`)
          gradient.addColorStop(1, `rgba(${particles[j].currentRgb}, ${opacity})`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 3
          ctx.stroke()
        }
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const count = Math.min(130, Math.floor((canvas.width * canvas.height) / 12000))

      particles = Array.from({ length: count }, () => {
        const colorIndex = Math.floor(Math.random() * COLORS.length)
        let nextColorIndex = Math.floor(Math.random() * COLORS.length)
        while (nextColorIndex === colorIndex) nextColorIndex = Math.floor(Math.random() * COLORS.length)

        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 6.5,
          opacity: Math.random() * 0.5 + 0.2,
          colorIndex,
          nextColorIndex,
          colorProgress: Math.random(),
          colorSpeed: Math.random() * 0.003 + 0.001, // Velocidad suave de transición
          currentRgb: ''
        }
      })
    }

    resize()
    window.addEventListener('resize', resize)

    const loop = () => {
      draw(ctx, particles, canvas.width, canvas.height)
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  )
}
