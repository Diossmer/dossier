import type { SlideProps } from '../../types/dossier'

export function HeroPortada({ title, data, phase, isActive }: SlideProps) {
  const scale = (phase === 'content' || phase === 'impact') ? 1.2 : phase === 'entry' ? 1.05 : 0.95

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center select-none transition-all duration-700"
      style={{ transform: `scale(${scale})` }}
    >
      <div className="relative mb-8">
        <div className="text-7xl md:text-9xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent animate-gradient animate-rgb-glitch">
          {title}
        </div>
        <div className="absolute inset-0 text-7xl md:text-9xl font-bold tracking-tighter text-blue-500/20 blur-3xl animate-glow-pulse -z-10">
          {title}
        </div>
      </div>

      <p className="text-dossier-subheading text-white max-w-2xl mb-4">
        {data.subtitle as string}
      </p>

      <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6" />

      <p className="text-dossier-body text-gray-200">
        {data.tagline as string}
      </p>

      <div className="mt-8 flex flex-col items-center gap-2 text-dossier-caption text-gray-300">
        <span>{data.group as string}</span>
        <span>{data.date as string}</span>
      </div>

      {isActive && (
        <div className="absolute bottom-8 text-gray-400 animate-float">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </div>
  )
}
