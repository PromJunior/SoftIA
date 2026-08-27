import React, { useState } from 'react';
import { PORTFOLIO_DEMOS } from '../data/portfolioData';
import { ProjectDemo } from '../types';
import { getWhatsAppChatUrl } from '../data/constants';
import { 
  Laptop, 
  Smartphone, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight,
  Eye,
  MessageCircle
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectDemo) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedDemoId, setSelectedDemoId] = useState<string>('local-bakery');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const activeDemo = PORTFOLIO_DEMOS.find(d => d.id === selectedDemoId) || PORTFOLIO_DEMOS[0];

  return (
    <section id="ejemplos" className="py-20 lg:py-28 relative bg-[#0a0e1a] border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00d2ff]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#00d2ff]/30 text-[#00d2ff] font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTAFOLIO & DEMOS EN VIVO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Ejemplos de <span className="gradient-text">Landing Pages Reales</span>
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] max-w-2xl mx-auto">
            Explora cómo se adaptan nuestros diseños a diferentes industrias. Cada proyecto está optimizado con foco en conversión, estética premium y velocidad.
          </p>
        </div>

        {/* Demo Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {PORTFOLIO_DEMOS.map((demo) => {
            const isActive = demo.id === selectedDemoId;
            return (
              <button
                key={demo.id}
                onClick={() => setSelectedDemoId(demo.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#00d2ff]/20 text-[#00d2ff] border-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.25)] scale-[1.02]'
                    : 'bg-[#171b28] text-[#c1c6d7] border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{demo.title.split(' ')[0]} {demo.title.split(' ')[1]}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">
                  {demo.category.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Box */}
        <div className="glass-panel rounded-3xl p-4 sm:p-8 border border-[#00d2ff]/30 shadow-2xl bg-[#111625]/90">
          
          {/* Top Bar with Device switcher & details */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#4a8eff]/20 text-[#adc7ff] border border-[#4a8eff]/40">
                  {activeDemo.category}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40">
                  {activeDemo.badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeDemo.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8b90a0]">
                {activeDemo.tagline}
              </p>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center gap-2 bg-[#0f131f] p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-[#4a8eff] text-white shadow'
                    : 'text-[#8b90a0] hover:text-white'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span className="hidden sm:inline">Vista Laptop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-[#00d2ff] text-[#001f28] font-bold shadow'
                    : 'text-[#8b90a0] hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden sm:inline">Vista Celular</span>
              </button>
            </div>
          </div>

          {/* Interactive Display Area */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screen Container */}
            <div className="lg:col-span-7 flex justify-center items-center">
              {deviceMode === 'desktop' ? (
                /* Laptop Device Frame */
                <div className="w-full max-w-2xl bg-[#1b1f2c] rounded-2xl p-2 sm:p-3 border border-white/20 shadow-2xl relative group">
                  <div className="flex items-center gap-1.5 pb-2 px-1 text-xs text-[#8b90a0] border-b border-white/10 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-mono text-[10px] text-[#8b90a0] truncate">
                      https://demo.softia.tech/{activeDemo.id}
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#0a0e1a]">
                    <img
                      src={activeDemo.previewUrl}
                      alt={activeDemo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f131f]/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    
                    <button
                      onClick={() => onSelectProject(activeDemo)}
                      className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-[#0f131f]/90 backdrop-blur-md text-white text-xs font-semibold border border-white/20 hover:border-[#00d2ff] hover:text-[#00d2ff] transition-all flex items-center gap-1.5 shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Detalles</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Mobile Device Frame */
                <div className="w-full max-w-[290px] bg-[#1b1f2c] rounded-[36px] p-3 border-2 border-white/20 shadow-2xl relative">
                  {/* Phone Notch */}
                  <div className="w-24 h-4 bg-[#0a0e1a] rounded-full mx-auto mb-2" />
                  
                  <div className="relative rounded-[24px] overflow-hidden aspect-[9/16] bg-[#0a0e1a]">
                    <img
                      src={activeDemo.previewUrl}
                      alt={activeDemo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f131f]/90 via-transparent to-transparent opacity-50" />
                    
                    {/* Simulated Floating WhatsApp in mobile preview */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Phone Home indicator bar */}
                  <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-3" />
                </div>
              )}
            </div>

            {/* Right Information & Metrics Side */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Estructura y Resultados Clave
                </h4>
                <p className="text-sm text-[#c1c6d7] leading-relaxed mb-6">
                  {activeDemo.description}
                </p>

                {/* Metrics Cards */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {activeDemo.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#171b28] border border-white/10 text-center">
                      <span className="text-base sm:text-lg font-bold font-mono text-[#00d2ff] block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-[#8b90a0] block leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Feature checklist */}
                <div className="space-y-2.5 mb-8">
                  {activeDemo.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dfe2f3]">
                      <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href={getWhatsAppChatUrl(`¡Hola SoftIA! Vi el ejemplo de ${activeDemo.title} y me gustaría una web con una estructura similar para mi negocio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-glow-cyan py-3 px-4 rounded-xl text-[#001f28] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir un diseño como este</span>
                </a>

                <button
                  onClick={() => onSelectProject(activeDemo)}
                  className="py-3 px-4 rounded-xl border border-white/20 hover:border-[#4a8eff] text-white hover:text-[#4a8eff] font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Detalles</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
