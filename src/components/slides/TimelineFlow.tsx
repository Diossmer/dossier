import type { SlideProps } from '../../types/dossier'

export function TimelineFlow({ title, data }: SlideProps) {
  const layers = data.layers as Array<{ name: string; tech: string; color: string }>
  const sequence = data.sequence as string[]

  return (
    <div
      className="w-full transition-all duration-700"
    >
      <h2 className="text-dossier-heading mb-4 text-center bg-gradient-to-r from-blue-300 to-emerald-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-dossier-body text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        {data.description as string}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-dossier-subheading text-sm mb-6 text-center text-blue-300">
            Arquitectura del Sistema
          </h3>
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <div key={i} className="relative">
                {i < layers.length - 1 && (
                  <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 to-transparent" />
                )}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: layer.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-dossier-body font-medium">{layer.name}</p>
                    <p className="text-dossier-caption text-gray-400">{layer.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-dossier-subheading text-sm mb-6 text-center text-emerald-300">
            Flujo de Consulta
          </h3>
          <div className="space-y-3">
            {sequence.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === 0 ? 'bg-emerald-500' : i === sequence.length - 1 ? 'bg-blue-500' : 'bg-white/20'}`}>
                  {i + 1}
                </div>
                <p className="text-dossier-body text-sm text-gray-300">{step}</p>
                {i < sequence.length - 1 && (
                  <svg className="w-4 h-4 text-gray-600 shrink-0 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
