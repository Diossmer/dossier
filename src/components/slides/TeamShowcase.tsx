import type { SlideProps } from '../../types/dossier'
import { dossierData } from '../../data/dossierContent'

export function TeamShowcase({ title, phase }: SlideProps) {
  const scale = phase === 'entry' ? 1 : phase === 'exit' ? 0 : 0

  return (
    <div
      className="w-full transition-all duration-700"
      style={{ transform: `scale(${scale})` }}
    >
      <h2 className="text-dossier-heading mb-12 text-center bg-gradient-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {dossierData.team.map((member) => (
          <div
            key={member.name}
            className="group relative flex flex-col items-center text-center"
          >
            <div
              className="hexagon-clip w-36 h-40 mb-4 flex items-center justify-center overflow-hidden border-2 transition-all duration-500 group-hover:scale-105"
              style={{ borderColor: member.color }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-4xl font-bold text-white/80"
                style={{ background: `linear-gradient(135deg, ${member.color}44, ${member.color}88)` }}
              >
                {member.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
              </div>
            </div>

            <h3 className="text-dossier-subheading text-sm mb-1">{member.name}</h3>
            <p className="text-dossier-caption font-medium mb-2" style={{ color: member.color }}>
              {member.role}
            </p>

            <div className="max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
              <p className="text-dossier-caption text-gray-400 italic px-4">
                "{member.phrase}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
