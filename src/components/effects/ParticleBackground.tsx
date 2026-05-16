import { useRef, useEffect, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[], w: number, h: number) => {
    ctx.clearRect(0, 0, w, h)

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(217, 80%, 60%, ${p.opacity})`
      ctx.fill()
    })

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `hsla(217, 60%, 50%, ${0.15 * (1 - dist / 150)})`
          ctx.lineWidth = 0.5
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

      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 30000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      }))
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
