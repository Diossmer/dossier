import { useState, useEffect } from 'react'
import type { SlideProps } from '../../types/dossier'

export function SplitTextImage({ title, data, isActive }: SlideProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  
  useEffect(() => {
    if (isActive) setHasAnimated(true)
  }, [isActive])
  const text = data.text as string[]
  const flow = data.problemFlow as string[]

  return (
    <div
      className="w-full transition-all duration-700 grid md:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h2 className="text-dossier-heading mb-8 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="space-y-4">
          {text.map((p, i) => (
            <p 
              key={i} 
              className={`text-dossier-body text-gray-300 leading-relaxed ${isActive ? 'animate-fade-up' : hasAnimated ? '' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-dossier-subheading text-sm mb-6 text-center text-orange-300">
          Flujo del Problema
        </h3>
        <div className="relative">
          {flow.map((step, i) => (
            <div key={i} className="flex items-start gap-4 pb-6 relative last:pb-0">
              {i < flow.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 to-transparent" />
              )}
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === 0 ? 'bg-red-500' : i === flow.length - 1 ? 'bg-orange-500' : 'bg-white/20'}`}>
                {i + 1}
              </div>
              <p className="text-dossier-body text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
