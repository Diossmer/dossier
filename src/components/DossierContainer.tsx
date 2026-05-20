import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SlideRenderer } from './SlideRenderer'
import { ParticleBackground } from './effects/ParticleBackground'
import { ScrollGIF } from './effects/ScrollGIF'
import { ScrollProgress } from './effects/ScrollProgress'
import { CinemaEffects } from './effects/CinemaEffects'
import { dossierData } from '../data/dossierContent'
import { useDossierStore } from '../stores/useDossierStore'
import type { SlidePhase } from '../types/dossier'

gsap.registerPlugin(ScrollTrigger)

export function DossierContainer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const setActiveSlide = useDossierStore((s) => s.setActiveSlide)
  const setProgress = useDossierStore((s) => s.setProgress)
  const setPhase = useDossierStore((s) => s.setPhase)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    })
    lenisRef.current = lenis

    lenis.on('scroll', (e: { progress: number; scroll: number; limit: number }) => {
      setProgress(e.progress)

      const totalSlides = dossierData.slides.length
      const slideIndex = Math.min(
        Math.floor((e.scroll / e.limit) * totalSlides),
        totalSlides - 1,
      )
      setActiveSlide(slideIndex)

      const withinSlide = (e.scroll / e.limit) * totalSlides - slideIndex
      let phase: SlidePhase = 'content'
      if (withinSlide < 0.3) phase = 'content'
      else if (withinSlide < 0.55) phase = 'impact'
      else if (withinSlide < 0.8) phase = 'content'
      else phase = 'exit'
      setPhase(phase)

      ScrollTrigger.update()
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [setActiveSlide, setProgress, setPhase])

  useEffect(() => {
    if (!slidesRef.current) return
    const ctx = gsap.context(() => {
      const panels = slidesRef.current?.querySelectorAll('.slide-panel')
      if (!panels) return

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel as HTMLElement,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const progress = self.progress
            const el = panel as HTMLElement
            const opacity = progress < 0.2 ? progress / 0.2
              : progress > 0.8 ? (1 - progress) / 0.2
                : 1
            const yOffset = progress < 0.2 ? (1 - progress / 0.2) * 100
              : progress > 0.8 ? -((progress - 0.8) / 0.2) * 100
                : 0
            el.style.opacity = String(Math.max(0, Math.min(1, opacity)))
            el.style.transform = `translateY(${yOffset}px)`
          },
        })
      })
    }, slidesRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <ScrollGIF />
      <ParticleBackground />
      <CinemaEffects />

      <div ref={containerRef} className="relative z-10">
        <div ref={slidesRef}>
          {dossierData.slides.map((slide, index) => (
            <section
              key={slide.id}
              className="slide-panel slide-container"
              data-slide={index}
            >
              <SlideRenderer slide={slide} index={index} />
            </section>
          ))}
        </div>
      </div>

      <ScrollProgress />
    </>
  )
}
