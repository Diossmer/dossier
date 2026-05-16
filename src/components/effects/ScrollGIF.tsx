import { useRef, useEffect } from 'react'
import { useDossierStore } from '../../stores/useDossierStore'

export function ScrollGIF() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progress = useDossierStore((s) => s.progress)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const maxR = Math.max(canvas.width, canvas.height) * 0.5

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR)
      const hue1 = 220 + progress * 40
      const hue2 = 170 + progress * 30
      gradient.addColorStop(0, `hsla(${hue1}, 70%, 50%, ${0.06 + progress * 0.04})`)
      gradient.addColorStop(0.5, `hsla(${hue2}, 60%, 30%, ${0.04 + progress * 0.03})`)
      gradient.addColorStop(1, 'hsla(0, 0%, 0%, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const lines = 8
      for (let i = 0; i < lines; i++) {
        const angle = (i / lines) * Math.PI * 2 + progress * Math.PI * 2 * 0.3
        const x = cx + Math.cos(angle) * maxR * 0.4
        const y = cy + Math.sin(angle) * maxR * 0.4

        ctx.beginPath()
        ctx.arc(x, y, 1 + progress * 3, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue1 + i * 10}, 80%, 60%, ${0.1 + progress * 0.15})`
        ctx.fill()
      }

      const ringCount = 3
      for (let i = 0; i < ringCount; i++) {
        const radius = maxR * (0.2 + i * 0.2)
        const rotation = progress * Math.PI * 2 * (i % 2 === 0 ? 1 : -1)
        ctx.beginPath()
        ctx.arc(cx, cy, radius, rotation, rotation + Math.PI * 1.5)
        ctx.strokeStyle = `hsla(${hue1 + i * 20}, 60%, 50%, ${0.05 + progress * 0.08})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [progress])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}
