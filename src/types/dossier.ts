export interface TeamMember {
  name: string
  role: string
  phrase: string
  color: string
}

export interface DossierSlide {
  id: number
  template: 'hero' | 'valores' | 'team' | 'split' | 'timeline' | 'metrics'
  title: string
  data: Record<string, unknown>
}

export interface DossierData {
  slides: DossierSlide[]
  team: TeamMember[]
}

export type SlidePhase = 'entry' | 'impact' | 'content' | 'exit'

export interface SlideProps {
  title: string
  data: Record<string, unknown>
  progress: number
  phase: SlidePhase
  isActive: boolean
}
