import type { SlideProps } from '../../types/dossier'

export function MetricasImpacto({ title, data, phase, isActive }: SlideProps) {
  const opacity = phase === 'exit' ? 1 : 0.2
  const metrics = data.metrics as Array<{ value: string; label: string; icon: string }>
  const lecciones = data.lecciones as string[]
  const tecnologias = data.tecnologias as string[]

  return (
    <div
      className="w-full transition-all duration-700"
      style={{ opacity }}
    >
      <h2 className="text-dossier-heading mb-12 text-center bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all"
          >
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-2">
              {m.value}
            </p>
            <p className="text-dossier-caption text-gray-400">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-dossier-subheading text-sm mb-4 text-cyan-300">
            Lecciones Aprendidas
          </h3>
          <ul className="space-y-3">
            {lecciones.map((l, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span className="text-dossier-body text-gray-300">{l}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-dossier-subheading text-sm mb-4 text-purple-300">
            Tecnologías Libres Utilizadas
          </h3>
          <div className="flex flex-wrap gap-2">
            {tecnologias.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-dossier-caption border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-dossier-caption text-gray-500 italic">
              "La tecnología debe ser humana. No programamos para servidores, sino para personas que necesitan herramientas confiables."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
