import React, { useState } from 'react';
import { BRAND, getWhatsAppChatUrl } from '../data/constants';
import { Globe, Code2, Bot, MessageSquareText, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PillarsSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onSelectService }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: 'paginas-web',
      icon: Globe,
      name: 'PÁGINAS WEB',
      tagline: 'Landing Pages & Sitios Corporativos',
      badge: 'Esencial',
      color: '#00d2ff',
      bgGlow: 'from-[#00d2ff]/20 to-transparent',
      borderColor: 'border-[#00d2ff]/40',
      description: 'Diseños modernos, rápidos y optimizados para convertir visitantes en clientes. Incluyen dominio, hosting y botón directo a WhatsApp.',
      features: [
        'Diseño 100% responsivo para celulares y computadoras',
        'Dominio propio (.com o .pe) + SSL de seguridad',
        'Velocidad de carga instantánea (< 1s)',
        'Estructura persuasiva enfocada en ventas'
      ],
      whatsappPrompt: 'Hola SoftIA, me interesa el servicio de Páginas Web y Landing Pages.'
    },
    {
      id: 'aplicaciones-web',
      icon: Code2,
      name: 'APLICACIONES WEB',
      tagline: 'Sistemas & Plataformas a Medida',
      badge: 'Avanzado',
      color: '#4a8eff',
      bgGlow: 'from-[#4a8eff]/20 to-transparent',
      borderColor: 'border-[#4a8eff]/40',
      description: 'Portales interactivos, paneles de administración, catálogos con carritos dinámicos y sistemas de gestión para tu negocio.',
      features: [
        'Paneles de administración intuitivos',
        'Bases de datos en la nube seguras',
        'Autenticación de usuarios y roles',
        'Integración con pasarelas de pago'
      ],
      whatsappPrompt: 'Hola SoftIA, necesito cotizar el desarrollo de una Aplicación Web a medida.'
    },
    {
      id: 'automatizacion-ia',
      icon: Bot,
      name: 'AUTOMATIZACIÓN + IA',
      tagline: 'Asistentes & Flujos Inteligentes',
      badge: 'Tecnología 2026',
      color: '#b56eff',
      bgGlow: 'from-[#b56eff]/20 to-transparent',
      borderColor: 'border-[#b56eff]/40',
      description: 'Bots inteligentes entrenados con tu catálogo para atender dudas frecuentes, cotizar y agendar clientes las 24 horas sin descanso.',
      features: [
        'Chatbot con IA entrenado con tus productos/servicios',
        'Respuestas automáticas inteligentes 24/7',
        'Agendamiento automático de citas en Google Calendar',
        'Filtro y calificación de prospectos antes de pasarlos a tu equipo'
      ],
      whatsappPrompt: 'Hola SoftIA, quiero automatizar la atención de mi negocio con Inteligencia Artificial.'
    },
    {
      id: 'integracion-whatsapp',
      icon: MessageSquareText,
      name: 'INTEGRACIÓN WHATSAPP',
      tagline: 'Ventas Directas por Chat',
      badge: 'Alta Conversión',
      color: '#25D366',
      bgGlow: 'from-[#25D366]/20 to-transparent',
      borderColor: 'border-[#25D366]/40',
      description: 'Conecta cada botón de tu web con WhatsApp con mensajes precargados automáticos y catálogos interactivos listos para cerrar ventas.',
      features: [
        'Botones inteligentes con mensaje personalizado por producto',
        'Catálogo digital con carrito que envía el resumen por WhatsApp',
        'Notificaciones automáticas de pedidos',
        'Configuración de respuestas rápidas para WhatsApp Business'
      ],
      whatsappPrompt: 'Hola SoftIA, deseo integrar WhatsApp en mi web para recibir pedidos directos.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 relative bg-[#0a0e1a]/80 border-y border-white/5 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4a8eff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with SoftIA slogan */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1f2c] border border-white/10 text-xs font-mono text-[#00d2ff] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES DIGITALES COMPLETAS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
            DIGITALIZAMOS TU NEGOCIO
          </h2>
          <p className="text-lg sm:text-xl text-[#00d2ff] font-semibold tracking-wide uppercase">
            PARA QUE PUEDAS CRECER
          </p>
        </div>

        {/* 4 Pillars Interactive Grid (Identical to Image 1 and Image 2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;

            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`text-center p-5 sm:p-6 rounded-2xl transition-all duration-300 relative group flex flex-col items-center justify-between border ${
                  isSelected
                    ? `bg-[#1b1f2c] ${pillar.borderColor} shadow-[0_0_25px_rgba(0,210,255,0.2)] scale-[1.03]`
                    : 'bg-[#171b28]/60 border-white/10 hover:border-white/20 hover:bg-[#1b1f2c]/80'
                }`}
              >
                {/* Glowing Circular Icon Holder (faithful to Image 1 & 2) */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 relative ${
                    isSelected
                      ? 'shadow-[0_0_25px_currentColor]'
                      : 'group-hover:scale-110'
                  }`}
                  style={{
                    color: pillar.color,
                    background: `radial-gradient(circle, ${pillar.color}25 0%, rgba(15,19,31,0.8) 80%)`,
                    border: `2px solid ${pillar.color}`
                  }}
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                  {isSelected && (
                    <span
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: pillar.color }}
                    />
                  )}
                </div>

                {/* Pillar Title */}
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-white tracking-wider mb-1">
                    {pillar.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[#8b90a0] block">
                    {pillar.tagline}
                  </span>
                </div>

                {/* Selection Indicator line */}
                <div
                  className={`w-12 h-1 rounded-full mt-3 transition-all ${
                    isSelected ? 'w-16' : 'opacity-0 group-hover:opacity-50'
                  }`}
                  style={{ backgroundColor: pillar.color }}
                />
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Expanded Detail Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#00d2ff]/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#171b28] to-[#0f131f]">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                  style={{
                    backgroundColor: `${pillars[selectedPillar].color}20`,
                    color: pillars[selectedPillar].color,
                    border: `1px solid ${pillars[selectedPillar].color}50`
                  }}
                >
                  {pillars[selectedPillar].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {pillars[selectedPillar].name} - {pillars[selectedPillar].tagline}
                </h3>
              </div>

              <p className="text-[#c1c6d7] text-sm sm:text-base leading-relaxed mb-6">
                {pillars[selectedPillar].description}
              </p>

              {/* Feature Bullet Points */}
              <div className="grid sm:grid-cols-2 gap-3">
                {pillars[selectedPillar].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#dfe2f3]">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: pillars[selectedPillar].color }}
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Side */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <button
                onClick={() => onSelectService(pillars[selectedPillar].name)}
                className="w-full btn-glow-primary py-3.5 px-6 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Cotizar {pillars[selectedPillar].name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppChatUrl(pillars[selectedPillar].whatsappPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-medium text-sm flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Brand Slogan Strip (faithful to Image 1 & 2) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-12 pt-8 border-t border-white/5 font-mono text-xs sm:text-sm text-[#8b90a0] tracking-widest uppercase">
          <span className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" /> TECNOLOGÍA
          </span>
          <span className="flex items-center gap-2 hover:text-[#4a8eff] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a8eff]" /> AUTOMATIZACIÓN
          </span>
          <span className="flex items-center gap-2 hover:text-[#b56eff] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b56eff]" /> INNOVACIÓN
          </span>
        </div>

      </div>
    </section>
  );
};
