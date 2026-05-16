import { create } from 'zustand'
import type { SlidePhase } from '../types/dossier'

interface DossierState {
  activeSlide: number
  progress: number
  phase: SlidePhase
  setActiveSlide: (id: number) => void
  setProgress: (p: number) => void
  setPhase: (p: SlidePhase) => void
}

export const useDossierStore = create<DossierState>((set) => ({
  activeSlide: 0,
  progress: 0,
  phase: 'entry',
  setActiveSlide: (id) => set({ activeSlide: id }),
  setProgress: (p) => set({ progress: p }),
  setPhase: (phase) => set({ phase }),
}))
