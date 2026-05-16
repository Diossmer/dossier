import { HeroPortada } from './slides/HeroPortada'
import { ValoresGrid } from './slides/ValoresGrid'
import { TeamShowcase } from './slides/TeamShowcase'
import { SplitTextImage } from './slides/SplitTextImage'
import { TimelineFlow } from './slides/TimelineFlow'
import { MetricasImpacto } from './slides/MetricasImpacto'
import { useDossierStore } from '../stores/useDossierStore'
import type { DossierSlide } from '../types/dossier'

interface SlideRendererProps {
  slide: DossierSlide
  index: number
}

const templateMap = {
  hero: HeroPortada,
  valores: ValoresGrid,
  team: TeamShowcase,
  split: SplitTextImage,
  timeline: TimelineFlow,
  metrics: MetricasImpacto,
} as const

export function SlideRenderer({ slide, index }: SlideRendererProps) {
  const Component = templateMap[slide.template]
  const activeSlide = useDossierStore((s) => s.activeSlide)
  const progress = useDossierStore((s) => s.progress)
  const phase = useDossierStore((s) => s.phase)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Component
        title={slide.title}
        data={slide.data}
        progress={progress}
        phase={activeSlide === index ? phase : 'exit'}
        isActive={activeSlide === index}
      />
    </div>
  )
}
