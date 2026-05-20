import type { SlideProps } from '../../types/dossier'
import { dossierData } from '../../data/dossierContent'

export function TeamShowcase({ title, phase }: SlideProps) {
  const scale = (phase === 'content' || phase === 'impact') ? 1 : phase === 'entry' ? 0.9 : 0.9


  return (
    <div
      className="w-full max-w-[90rem] mx-auto transition-all duration-700 px-4"
      style={{ transform: `scale(${scale})` }}
    >
      <h2 className="text-dossier-heading mb-12 text-center bg-gradient-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">

        {/* Imagen Izquierda */}
        <div className="w-full lg:w-1/4 group relative rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 aspect-video lg:aspect-auto lg:h-[320px] bg-black/40 flex items-center justify-center shadow-lg hover:shadow-cyan-500/20">
          <img src="/reunion.png" alt="Dashboard del Proyecto" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-red-400 font-bold tracking-wider mb-1">MOVILNET</p>
              <p className="text-gray-300 text-sm">TELECOMUNICACIONES MOVILNET</p>
            </div>
          </div>
        </div>

        {/* Equipo Central */}
        <div className="w-full lg:w-2/4 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto">
          {dossierData.team.map((member, index) => (
            <div
              key={member.name}
              className="group relative flex flex-col items-center text-center"
            >
              <div
                className="hexagon-clip w-32 h-36 lg:w-36 lg:h-40 mb-4 flex items-center justify-center overflow-hidden border-2 transition-all duration-500 group-hover:scale-105"
                style={{ borderColor: member.color }}
              >
                <img
                  src={`/project-${index + 1}.${index === 0 ? 'jpg' : 'jpeg'}`}
                  alt={member.name}
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                  style={{ background: `linear-gradient(135deg, ${member.color}44, ${member.color}88)` }}
                />
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

        {/* Imagen Derecha */}
        <div className="w-full lg:w-1/4 group relative rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-500 aspect-video lg:aspect-auto lg:h-[320px] bg-black/40 flex items-center justify-center shadow-lg hover:shadow-emerald-500/20">
          <div className="absolute inset-0 bg-emerald-500/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
          <img src="/android.png" alt="Arquitectura del Código" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700" />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center z-20">
            <span className="px-6 py-2 bg-black/50 backdrop-blur-md rounded-full text-emerald-300 text-xs font-bold tracking-[0.2em] border border-white/10 group-hover:scale-125 transition-transform duration-500">CÓDIGO FUENTE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
