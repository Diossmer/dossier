import { useDossierStore } from '../../stores/useDossierStore'

export function ScrollProgress() {
  const activeSlide = useDossierStore((s) => s.activeSlide)

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
      <div className="h-40 w-[2px] bg-white/10 rounded-full relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full transition-all duration-200"
          style={{ height: `${(activeSlide + 1) * 16.66}%` }}
        />
      </div>
      <span className="text-dossier-caption text-gray-300 font-mono">
        {String(activeSlide + 1).padStart(2, '0')}/06
      </span>
    </div>
  )
}
