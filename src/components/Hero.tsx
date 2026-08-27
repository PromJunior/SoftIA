import React, { useState } from 'react';
import { BRAND, getWhatsAppChatUrl } from '../data/constants';
import { Sparkles, MessageCircle, ArrowRight, Smartphone, Laptop, CheckCircle2, Eye, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenPreviewDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onOpenPreviewDemo }) => {
  const [activeDeviceView, setActiveDeviceView] = useState<'both' | 'desktop' | 'mobile'>('both');

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-10 left-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#4a8eff]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#00d2ff]/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-64 sm:w-[350px] h-64 sm:h-[350px] bg-[#b56eff]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#262a37]/60 text-[#a5e7ff] font-mono text-xs font-medium mb-6 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse" />
              <span>Presencia Profesional</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-white tracking-tight leading-[1.12] mb-6">
              Haz que tu negocio tenga{' '}
              <span className="gradient-text">presencia profesional</span>{' '}
              en Internet
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#c1c6d7] leading-relaxed max-w-xl mb-8">
              Creamos Landing Pages modernas y personalizadas para que tus clientes conozcan tu negocio,
              vean tus productos o servicios y puedan contactarte fácilmente.
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 mb-10">
              <button
                id="hero-cta-quote"
                onClick={onOpenOrderModal}
                className="btn-glow-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base shadow-[0_0_25px_rgba(74,142,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>🚀 Quiero mi Landing Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-cta-whatsapp"
                href={getWhatsAppChatUrl("¡Hola SoftIA! Deseo digitalizar mi negocio con una Landing Page profesional. ¿Cómo podemos empezar?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#00d2ff]/40 bg-[#171b28]/60 hover:bg-[#00d2ff]/10 text-[#47d6ff] font-semibold text-base hover:border-[#00d2ff] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees / Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dfe2f3]">
                <Zap className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>Listo en 3-5 días</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dfe2f3]">
                <Smartphone className="w-4 h-4 text-[#4a8eff] shrink-0" />
                <span>100% Móvil</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dfe2f3]">
                <ShieldCheck className="w-4 h-4 text-[#b56eff] shrink-0" />
                <span>Dominio & SSL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Glass Showcase */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            {/* Glow backdrop frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#4a8eff]/40 via-[#00d2ff]/30 to-[#b56eff]/40 blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

            <div className="relative glass-panel rounded-2xl p-3 sm:p-5 border border-[#00d2ff]/30 shadow-2xl bg-[#0f1423]/90">
              
              {/* Window bar controls */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-[11px] text-[#8b90a0] hidden sm:inline">
                    preview.softia.tech/local-bakery
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#00d2ff]/10 text-[#47d6ff] border border-[#00d2ff]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                    LIVE DEMO
                  </span>

                  <button
                    onClick={onOpenPreviewDemo}
                    className="p-1 text-[#c1c6d7] hover:text-white rounded hover:bg-white/10 transition-colors"
                    title="Ver ejemplo en detalle"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Mockup from SoftIA design */}
              <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={onOpenPreviewDemo}>
                <img
                  src={BRAND.heroMockupUrl}
                  alt="Mockup de Landing Page profesional en Laptop y Teléfono Celular"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f131f]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating interactive tooltip card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto bg-[#171b28]/90 backdrop-blur-md p-3 rounded-xl border border-[#00d2ff]/30 flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-lg bg-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span>Diseño Optimizado para Ventas</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    </div>
                    <p className="text-[11px] text-[#c1c6d7]">
                      Móvil + Desktop con botón de pedido a WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Tags */}
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#8b90a0]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#47d6ff]">
                    <Laptop className="w-3.5 h-3.5" /> Computadora
                  </span>
                  <span className="flex items-center gap-1 text-[#b56eff]">
                    <Smartphone className="w-3.5 h-3.5" /> Celular
                  </span>
                </div>
                <button
                  onClick={onOpenPreviewDemo}
                  className="text-xs text-[#4a8eff] hover:text-[#00d2ff] font-medium flex items-center gap-1 transition-colors"
                >
                  Explorar más ejemplos <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
