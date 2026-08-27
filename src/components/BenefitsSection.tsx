import React from 'react';
import { TrendingUp, ShieldCheck, Smartphone, Zap, Search, Bot, ArrowUpRight } from 'lucide-react';

interface BenefitsSectionProps {
  onOpenOrderModal: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenOrderModal }) => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Mayor Conversión & Ventas',
      description: 'Estructura psicológica pensada para que quien entre a tu página termine escribiéndote a tu WhatsApp o reservando un servicio.',
      metric: '+140%',
      metricLabel: 'Más consultas promedio',
      color: '#00d2ff',
      gradient: 'from-[#00d2ff]/20 to-transparent'
    },
    {
      icon: ShieldCheck,
      title: 'Credibilidad & Confianza Total',
      description: 'Un negocio con web propia genera hasta 4 veces más confianza que uno que solo usa perfiles de redes sociales o páginas gratuitas.',
      metric: '4.8x',
      metricLabel: 'Mayor percepción de valor',
      color: '#4a8eff',
      gradient: 'from-[#4a8eff]/20 to-transparent'
    },
    {
      icon: Smartphone,
      title: '100% Móvil (Mobile First)',
      description: 'Optimizada al detalle para celulares, con botones táctiles grandes, navegación fluida y textos legibles sin hacer zoom.',
      metric: '88%',
      metricLabel: 'Tráfico desde celulares',
      color: '#b56eff',
      gradient: 'from-[#b56eff]/20 to-transparent'
    },
    {
      icon: Zap,
      title: 'Carga Ultrarrápida (< 1s)',
      description: 'Cada segundo de retraso cuesta ventas. Desarrollamos con código limpio de última generación para una velocidad relámpago.',
      metric: '0.8s',
      metricLabel: 'Tiempo medio de carga',
      color: '#47d6ff',
      gradient: 'from-[#47d6ff]/20 to-transparent'
    },
    {
      icon: Search,
      title: 'SEO & Google Maps',
      description: 'Configuración técnica para que los clientes que buscan tu servicio en tu ciudad o zona geográfica te encuentren primero.',
      metric: 'Top 5',
      metricLabel: 'Búsquedas locales',
      color: '#adc7ff',
      gradient: 'from-[#adc7ff]/20 to-transparent'
    },
    {
      icon: Bot,
      title: 'Automatización con IA 24/7',
      description: 'Asistentes inteligentes que atienden y filtran a tus clientes a cualquier hora del día o de la noche sin costo extra de personal.',
      metric: '24/7',
      metricLabel: 'Atención ininterrumpida',
      color: '#25D366',
      gradient: 'from-[#25D366]/20 to-transparent'
    }
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-28 relative bg-[#0a0e1a]/60 border-t border-white/5 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#4a8eff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#00d2ff]/30 text-[#00d2ff] font-mono text-xs mb-4">
            <span>BENEFICIOS COMPROBADOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            ¿Por qué tu negocio necesita una <span className="gradient-text">Landing Page de SoftIA</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] max-w-2xl mx-auto">
            No creamos solo páginas bonitas; creamos herramientas comerciales que trabajan todos los días para atraer clientes y cerrar ventas.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-7 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden bg-[#171b28]/80 border-white/10"
              >
                {/* Top Corner Glow */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: b.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center p-3 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${b.color}15`,
                        color: b.color,
                        border: `1px solid ${b.color}40`
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold font-mono text-white block">
                        {b.metric}
                      </span>
                      <span className="text-[11px] text-[#8b90a0] font-mono block">
                        {b.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#a5e7ff] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-sm text-[#c1c6d7] leading-relaxed mb-6">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8b90a0]">
                  <span className="font-mono">Garantía SoftIA</span>
                  <span className="text-[#00d2ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ver más <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Micro Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#171b28] via-[#1b1f2c] to-[#171b28] border border-[#00d2ff]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              ¿Listo para dar el salto digital con tu negocio?
            </h4>
            <p className="text-xs sm:text-sm text-[#c1c6d7]">
              Agenda una llamada de diagnóstico sin costo con uno de nuestros especialistas.
            </p>
          </div>
          <button
            onClick={onOpenOrderModal}
            className="btn-glow-primary px-6 py-3 rounded-xl text-white font-medium text-xs sm:text-sm shrink-0 whitespace-nowrap"
          >
            Quiero asesoría personalizada
          </button>
        </div>

      </div>
    </section>
  );
};
