import { useDossierStore } from '../../stores/useDossierStore'

export function CinemaEffects() {
  const phase = useDossierStore((s) => s.phase)
  const isTransitioning = phase === 'entry' || phase === 'exit'
  
  return (
    <>
      {/* Ruido de película (Film Grain) */}
      <div className="fixed inset-0 z-[40] pointer-events-none opacity-20 bg-noise mix-blend-overlay" />
      
      {/* Viñeta cinematográfica (Bordes oscuros) */}
      <div className="fixed inset-0 z-[40] pointer-events-none bg-radial-vignette opacity-80" />
      
      {/* Barras negras de cine (Letterboxing animado) */}
      <div 
        className="fixed top-0 left-0 right-0 bg-black/90 z-[50] transition-all duration-1000 ease-in-out pointer-events-none"
        style={{ height: isTransitioning ? '12vh' : '5vh' }}
      />
      <div 
        className="fixed bottom-0 left-0 right-0 bg-black/90 z-[50] transition-all duration-1000 ease-in-out pointer-events-none"
        style={{ height: isTransitioning ? '12vh' : '5vh' }}
      />
    </>
  )
}
