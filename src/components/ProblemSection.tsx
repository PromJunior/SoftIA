import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ProblemSectionProps {
  onOpenOrderModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenOrderModal }) => {
  const [showSolutionView, setShowSolutionView] = useState(false);

  const problems = [
    {
      id: 'redes-sociales',
      title: 'Dependencia de Redes Sociales',
      description: 'Tus clientes se pierden entre tantas publicaciones y competidores en Facebook o Instagram.',
      solutionTitle: 'Plataforma Centralizada Propia',
      solutionDesc: 'Un espacio exclusivo 100% enfocado en tu marca, sin anuncios de competidores ni distracciones.'
    },
    {
      id: 'informacion-desorganizada',
      title: 'Información Desorganizada',
      description: 'Es difícil para tus clientes encontrar tus precios, horarios o servicios rápidamente.',
      solutionTitle: 'Información Clara & Estructurada',
      solutionDesc: 'Menús, precios, horarios y preguntas frecuentes organizados de forma visual e intuitiva.'
    },
    {
      id: 'falta-confianza',
      title: 'Falta de Confianza',
      description: 'No tener una web propia hace que tu negocio parezca informal frente a la competencia.',
      solutionTitle: 'Autoridad & Profesionalismo Total',
      solutionDesc: 'Genera credibilidad instantánea con dominio propio, testimonios reales y diseño premium.'
    },
    {
      id: 'contactos-perdidos',
      title: 'Contactos Perdidos',
      description: 'Mensajes ignorados o perdidos porque no hay un botón directo a tu WhatsApp.',
      solutionTitle: 'Captura Instantánea por WhatsApp',
      solutionDesc: 'Botones inteligentes que abren el chat de WhatsApp con un mensaje listo para comprar.'
    }
  ];

  return (
    <section id="problema" className="py-16 lg:py-24 relative overflow-hidden bg-[#0f131f]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff5449]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Faithful to Image 4) */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs font-mono mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>EL DIAGNÓSTICO DIGITAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            ¿Tu negocio tiene presencia en Internet, pero{' '}
            <span className="text-[#ffb4ab]">no una página profesional</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] leading-relaxed max-w-2xl mx-auto">
            Muchos negocios locales pierden clientes potenciales todos los días por no contar con una plataforma centralizada y profesional que genere confianza.
          </p>

          {/* Interactive Toggle: Problema vs Solución SoftIA */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-[#171b28] border border-white/10 shadow-inner">
            <button
              onClick={() => setShowSolutionView(false)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                !showSolutionView
                  ? 'bg-[#93000a]/40 text-[#ffb4ab] border border-[#ffb4ab]/30 shadow'
                  : 'text-[#8b90a0] hover:text-white'
              }`}
            >
              ⚠️ Los 4 Obstáculos Actuales
            </button>
            <button
              onClick={() => setShowSolutionView(true)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                showSolutionView
                  ? 'bg-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/30 shadow'
                  : 'text-[#8b90a0] hover:text-white'
              }`}
            >
              ✨ La Solución con SoftIA
            </button>
          </div>
        </div>

        {/* 4 Problem / Solution Cards Grid (Matches Image 4 structure) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className={`glass-panel p-6 sm:p-7 rounded-2xl flex items-start gap-4 transition-all duration-300 ${
                showSolutionView
                  ? 'border-[#00d2ff]/30 hover:border-[#00d2ff]/60 bg-[#171b28]/90'
                  : 'border-[#ffb4ab]/20 hover:border-[#ffb4ab]/40 bg-[#171b28]/60'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {showSolutionView ? (
                  <div className="w-8 h-8 rounded-full bg-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#93000a]/30 flex items-center justify-center text-[#ffb4ab]">
                    <XCircle className="w-5 h-5" />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {showSolutionView ? item.solutionTitle : item.title}
                </h3>
                <p className="text-sm text-[#c1c6d7] leading-relaxed">
                  {showSolutionView ? item.solutionDesc : item.description}
                </p>
              </div>
            </div>
          ))}

          {/* 4th Card centered on the bottom row (as shown in Image 4) */}
          <div className="sm:col-span-2 lg:col-span-1 lg:col-start-2">
            <div
              className={`glass-panel p-6 sm:p-7 rounded-2xl flex items-start gap-4 transition-all duration-300 ${
                showSolutionView
                  ? 'border-[#00d2ff]/30 hover:border-[#00d2ff]/60 bg-[#171b28]/90'
                  : 'border-[#ffb4ab]/20 hover:border-[#ffb4ab]/40 bg-[#171b28]/60'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {showSolutionView ? (
                  <div className="w-8 h-8 rounded-full bg-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#93000a]/30 flex items-center justify-center text-[#ffb4ab]">
                    <XCircle className="w-5 h-5" />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {showSolutionView ? problems[3].solutionTitle : problems[3].title}
                </h3>
                <p className="text-sm text-[#c1c6d7] leading-relaxed">
                  {showSolutionView ? problems[3].solutionDesc : problems[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner inside problem section */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 text-sm text-[#00d2ff] hover:text-white font-medium bg-[#171b28] hover:bg-[#1b1f2c] px-6 py-3 rounded-xl border border-[#00d2ff]/30 transition-all shadow-md group"
          >
            <Sparkles className="w-4 h-4 text-[#00d2ff] group-hover:rotate-12 transition-transform" />
            <span>Digitaliza tu negocio ahora y empieza a recibir más clientes</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
