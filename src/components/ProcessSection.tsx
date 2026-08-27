import React from 'react';
import { ClipboardList, Layout, CheckCircle, Rocket, ArrowRight, Clock } from 'lucide-react';

interface ProcessSectionProps {
  onOpenOrderModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenOrderModal }) => {
  const steps = [
    {
      step: '01',
      icon: ClipboardList,
      title: 'Diagnóstico & Objetivos',
      time: 'Día 1',
      description: 'Conversamos sobre tu negocio, tus productos o servicios principales y qué acción deseas que tomen tus clientes al entrar.',
      deliverables: ['Briefing inicial rápido', 'Definición de estructura y secciones', 'Selección de estilo visual']
    },
    {
      step: '02',
      icon: Layout,
      title: 'Diseño & Redacción Persuasiva',
      time: 'Días 2 - 3',
      description: 'Construimos el diseño adaptado a móviles, redactamos los textos comerciales y configuramos los botones directos a tu WhatsApp.',
      deliverables: ['Diseño 100% responsivo', 'Copywriting enfocado en ventas', 'Integración de fotos y catálogo']
    },
    {
      step: '03',
      icon: CheckCircle,
      title: 'Revisión & Ajustes Contigo',
      time: 'Día 4',
      description: 'Te enviamos un enlace de prueba privado para que interactúes con tu web en tu teléfono y computadora, aplicando tus sugerencias.',
      deliverables: ['Prueba de navegación interactiva', 'Verificación de enlaces y formularios', 'Ajustes finales de contenido']
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Lanzamiento & Capacitación',
      time: 'Día 5',
      description: 'Conectamos tu dominio oficial (.com o .pe), activamos la seguridad SSL y te entregamos la web lista para promocionar en redes.',
      deliverables: ['Puesta en marcha en vivo', 'Certificado SSL activado', 'Video de capacitación de uso']
    }
  ];

  return (
    <section id="proceso" className="py-20 lg:py-28 relative bg-[#0f131f] border-t border-white/5 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#4a8eff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#4a8eff]/30 text-[#adc7ff] font-mono text-xs mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>METODOLOGÍA ÁGIL & TRANSPARENTE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            ¿Cómo trabajamos en <span className="gradient-text">SoftIA</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] max-w-2xl mx-auto">
            Un proceso claro en 4 pasos, sin complicaciones técnicas para ti y con tu página funcionando en tiempo récord.
          </p>
        </div>

        {/* 4 Steps Grid with connecting lines */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl bg-[#171b28]/80 border-white/10 hover:border-[#00d2ff]/40 hover:bg-[#1b1f2c] transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Number & Time Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-bold font-mono text-white/20 group-hover:text-[#00d2ff] transition-colors">
                      {s.step}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/30">
                      {s.time}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#4a8eff]/10 text-[#4a8eff] border border-[#4a8eff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#a5e7ff] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#c1c6d7] leading-relaxed mb-5">
                    {s.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/5 space-y-1.5">
                  {s.deliverables.map((item, i) => (
                    <div key={i} className="text-[11px] text-[#8b90a0] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#00d2ff]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenOrderModal}
            className="btn-glow-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm shadow-[0_0_20px_rgba(74,142,255,0.3)]"
          >
            <span>Iniciar mi proyecto hoy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
