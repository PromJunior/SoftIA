import React from 'react';
import { 
  Globe2, 
  Server, 
  Smartphone, 
  MessageSquare, 
  Layers, 
  MapPin, 
  FileText, 
  Sparkles, 
  Search, 
  BarChart3, 
  Video, 
  Headphones,
  CheckCircle2
} from 'lucide-react';

interface WhatIsIncludedProps {
  onOpenOrderModal: () => void;
}

export const WhatIsIncluded: React.FC<WhatIsIncludedProps> = ({ onOpenOrderModal }) => {
  const inclusions = [
    {
      icon: Globe2,
      title: 'Dominio Propio Incluido',
      desc: 'Tu propio nombre en Internet (.com o .pe) registrado y configurado por 1 año completo.',
      badge: 'Incluido'
    },
    {
      icon: Server,
      title: 'Hosting & SSL de Seguridad',
      desc: 'Alojamiento en servidores de alta velocidad en la nube con candado de seguridad SSL HTTPS.',
      badge: 'Incluido'
    },
    {
      icon: Smartphone,
      title: 'Diseño Adaptable (Mobile-First)',
      desc: 'Tu web se verá espectacular en iPhone, Android, tablets, laptops y pantallas gigantes.',
      badge: 'Incluido'
    },
    {
      icon: MessageSquare,
      title: 'Botón WhatsApp Inteligente',
      desc: 'Botón flotante con mensaje precargado para que tus clientes te escriban con 1 solo toque.',
      badge: 'Incluido'
    },
    {
      icon: Layers,
      title: 'Catálogo / Menú Interactivo',
      desc: 'Muestra tus productos, cartas o servicios con fotos, descripciones y precios claros.',
      badge: 'Incluido'
    },
    {
      icon: MapPin,
      title: 'Google Maps & Horarios',
      desc: 'Ubicación interactiva con botón de "Cómo llegar" en Waze o Google Maps y horarios de atención.',
      badge: 'Incluido'
    },
    {
      icon: FileText,
      title: 'Redacción Persuasiva (Copy)',
      desc: 'Redactamos los textos comerciales de tu web enfocados en convencer y generar ventas.',
      badge: 'Incluido'
    },
    {
      icon: Sparkles,
      title: 'Diseño Visual Exclusivo',
      desc: 'Colores, tipografías e identidad visual alineados perfectamente a la esencia de tu negocio.',
      badge: 'Incluido'
    },
    {
      icon: Search,
      title: 'Optimización SEO Básica',
      desc: 'Estructuración técnica para que Google indexe tu negocio y aparezcas en búsquedas locales.',
      badge: 'Incluido'
    },
    {
      icon: BarChart3,
      title: 'Métricas & Google Analytics',
      desc: 'Integración con Meta Pixel y Google Analytics para medir cuántas personas visitan tu página.',
      badge: 'Incluido'
    },
    {
      icon: Video,
      title: 'Capacitación en Video',
      desc: 'Te entregamos una guía rápida en video para que puedas actualizar textos o fotos cuando quieras.',
      badge: 'Incluido'
    },
    {
      icon: Headphones,
      title: 'Soporte & Garantía Post-Venta',
      desc: 'Acompañamiento técnico directo para resolver cualquier duda y asegurar el funcionamiento óptimo.',
      badge: 'Incluido'
    }
  ];

  return (
    <section id="que-incluye" className="py-20 lg:py-28 relative bg-[#0f131f] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#b56eff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#b56eff]/30 text-[#dcb8ff] font-mono text-xs mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>PAQUETE TODO EN UNO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            ¿Qué incluye tu <span className="gradient-text-purple">Landing Page con SoftIA</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] max-w-2xl mx-auto">
            Te entregamos una solución lista para vender, sin costos ocultos ni complicaciones técnicas. Tú te enfocas en atender clientes, nosotros en la tecnología.
          </p>
        </div>

        {/* 12 Inclusions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {inclusions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl bg-[#171b28]/70 border-white/10 hover:border-[#00d2ff]/40 hover:bg-[#1b1f2c] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#a5e7ff] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#c1c6d7] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#8b90a0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Sin costo adicional</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenOrderModal}
            className="btn-glow-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base shadow-[0_0_20px_rgba(74,142,255,0.3)]"
          >
            <span>🚀 Solicitar mi Landing Page Completa</span>
          </button>
        </div>

      </div>
    </section>
  );
};
