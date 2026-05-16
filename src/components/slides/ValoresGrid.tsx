import type { SlideProps } from '../../types/dossier'

export function ValoresGrid({ title, data, phase }: SlideProps) {
  const scale = phase === 'entry' ? 1 : phase === 'exit' ? 0.5 : 0.8
  const valores = data.valores as Array<{ icon: string; label: string; desc: string }>

  return (
    <div
      className="w-full transition-all duration-700"
      style={{ transform: `scale(${scale})` }}
    >
      <h2 className="text-dossier-heading mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="grid gap-8 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors">
          <h3 className="text-dossier-subheading text-cyan-300 mb-3">Misión</h3>
          <p className="text-dossier-body text-gray-300 leading-relaxed">
            {data.mision as string}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors">
          <h3 className="text-dossier-subheading text-blue-300 mb-3">Visión</h3>
          <p className="text-dossier-body text-gray-300 leading-relaxed">
            {data.vision as string}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {valores.map((v) => (
          <div
            key={v.label}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
              <Icon name={v.icon} />
            </div>
            <h4 className="text-dossier-subheading text-sm mb-2">{v.label}</h4>
            <p className="text-dossier-caption text-gray-400">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    lock: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  }

  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={paths[name] || paths.shield} />
    </svg>
  )
}
