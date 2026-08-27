import React, { useState } from 'react';
import { PRICING_PLANS, CALCULATOR_ADDONS } from '../data/pricingData';
import { getWhatsAppChatUrl } from '../data/constants';
import { 
  Check, 
  X, 
  Sparkles, 
  Calculator, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  Zap, 
  CheckCircle2,
  Plus
} from 'lucide-react';

interface PricingCalculatorProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'plans' | 'calculator'>('plans');
  
  // Calculator states
  const [selectedBasePlan, setSelectedBasePlan] = useState<string>('plan-growth-pro');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['addon-whatsapp-catalog', 'addon-ai-bot']);
  const [businessName, setBusinessName] = useState<string>('');

  const basePlan = PRICING_PLANS.find(p => p.id === selectedBasePlan) || PRICING_PLANS[1];
  
  const calculateTotal = () => {
    const basePrice = basePlan.price;
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const addon = CALCULATOR_ADDONS.find(a => a.id === addonId);
      return acc + (addon ? addon.price : 0);
    }, 0);
    return basePrice + addonsTotal;
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const generateWhatsAppCalculatorUrl = () => {
    const addonsList = selectedAddons
      .map(id => CALCULATOR_ADDONS.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `¡Hola SoftIA! Calculé una cotización personalizada para mi negocio:\n` +
      `🏢 Negocio: ${businessName || 'Mi Negocio'}\n` +
      `📦 Plan Base: ${basePlan.name} (USD $${basePlan.price})\n` +
      (addonsList ? `➕ Adicionales seleccionados: ${addonsList}\n` : '') +
      `💰 Total estimado: USD $${calculateTotal()}\n\n` +
      `¿Podemos coordinar para iniciar el desarrollo?`;

    return getWhatsAppChatUrl(text);
  };

  return (
    <section id="precio" className="py-20 lg:py-28 relative bg-[#0a0e1a] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#4a8eff]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#00d2ff]/30 text-[#00d2ff] font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PLANES TRANSPARENTES & SIN SORPRESAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Inversión clara para <span className="gradient-text">hacer crecer tu negocio</span>
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] max-w-2xl mx-auto">
            Elige el plan ideal o utiliza nuestro cotizador interactivo para armar un paquete a la medida exacta de tus objetivos.
          </p>

          {/* Toggle between Fixed Plans and Interactive Calculator */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#171b28] border border-white/10 shadow-inner">
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'plans'
                  ? 'bg-gradient-to-r from-[#4a8eff] to-[#00d2ff] text-white shadow-lg'
                  : 'text-[#c1c6d7] hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Ver Planes Fijos</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'bg-gradient-to-r from-[#4a8eff] to-[#00d2ff] text-white shadow-lg'
                  : 'text-[#c1c6d7] hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Cotizador Personalizado</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Fixed Pricing Plans */}
        {activeTab === 'plans' && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? 'border-2 border-[#00d2ff] bg-[#171b28]/95 shadow-[0_0_40px_rgba(0,210,255,0.25)] scale-[1.02] md:-translate-y-2'
                    : 'border-white/10 bg-[#171b28]/70 hover:border-white/20'
                }`}
              >
                {/* Popular / AI badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-[#00d2ff] to-[#4a8eff] text-[#001f28] shadow-md uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c1c6d7] leading-relaxed min-h-[40px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2 pb-4 border-b border-white/10">
                    <span className="text-xs font-mono text-[#8b90a0]">USD</span>
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-white">
                      ${plan.price}
                    </span>
                    <span className="text-xs text-[#8b90a0] font-mono">/{plan.billingPeriod}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#00d2ff] mb-6">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Entrega: {plan.deliveryDays}</span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-white font-mono uppercase tracking-wider block mb-2">
                      Lo que incluye:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dfe2f3]">
                        <Check className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.map((notFeat, i) => (
                      <div key={`not-${i}`} className="flex items-start gap-2.5 text-xs text-[#8b90a0]/60 line-through">
                        <X className="w-4 h-4 text-[#8b90a0]/40 shrink-0 mt-0.5" />
                        <span>{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      plan.highlighted
                        ? 'btn-glow-cyan text-[#001f28] shadow-lg font-bold'
                        : 'btn-glow-primary text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppChatUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl border border-white/10 hover:border-[#25D366]/50 bg-white/5 hover:bg-[#25D366]/10 text-xs text-[#c1c6d7] hover:text-[#25D366] font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Real-time Interactive Custom Calculator */}
        {activeTab === 'calculator' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#00d2ff]/40 bg-[#111625]/95 shadow-2xl max-w-4xl mx-auto">
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/20 text-[#00d2ff] flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Cotizador Instantáneo en Tiempo Real
                </h3>
                <p className="text-xs sm:text-sm text-[#8b90a0]">
                  Selecciona la base y los módulos adicionales que necesitas. El presupuesto se calcula al instante.
                </p>
              </div>
            </div>

            {/* Step A: Business Name */}
            <div className="mb-6">
              <label className="block text-xs font-mono text-[#adc7ff] uppercase tracking-wider mb-2">
                1. Nombre o Rubro de tu Negocio:
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Ej. Panadería Delipán / Consultora Legal / Boutique Moda"
                className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all"
              />
            </div>

            {/* Step B: Choose Base Plan */}
            <div className="mb-8">
              <label className="block text-xs font-mono text-[#adc7ff] uppercase tracking-wider mb-3">
                2. Selecciona tu Plan Base:
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {PRICING_PLANS.map((plan) => {
                  const isSelected = selectedBasePlan === plan.id;
                  return (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedBasePlan(plan.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#00d2ff] bg-[#00d2ff]/10 shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                          : 'border-white/10 bg-[#0f131f] hover:border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-sm text-white">{plan.name}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#00d2ff]" />}
                      </div>
                      <span className="text-lg font-bold font-mono text-[#47d6ff]">
                        ${plan.price} USD
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step C: Toggle Addons */}
            <div className="mb-8">
              <label className="block text-xs font-mono text-[#adc7ff] uppercase tracking-wider mb-3">
                3. Añade Módulos & Automatizaciones:
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {CALCULATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'border-[#4a8eff] bg-[#4a8eff]/15'
                          : 'border-white/10 bg-[#0f131f] hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-xs sm:text-sm text-white">
                            {addon.name}
                          </span>
                          {addon.recommended && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#25D366]/20 text-[#25D366] font-mono">
                              Recomendado
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#8b90a0] leading-snug">
                          {addon.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono font-bold text-[#00d2ff] block">
                          +${addon.price}
                        </span>
                        <span className={`text-[10px] font-mono ${isChecked ? 'text-[#4a8eff] font-bold' : 'text-[#8b90a0]'}`}>
                          {isChecked ? 'Incluido' : '+ Agregar'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total & Action Footer */}
            <div className="p-6 rounded-2xl bg-[#0a0e1a] border border-[#00d2ff]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-[#8b90a0] uppercase block">
                  Total Estimado de Inversión (Pago Único):
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-mono text-white">
                    ${calculateTotal()}
                  </span>
                  <span className="text-sm font-mono text-[#00d2ff]">USD</span>
                  <span className="text-xs text-[#8b90a0]">/ Dominio & Hosting por 1 año incluidos</span>
                </div>
              </div>

              <a
                href={generateWhatsAppCalculatorUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-glow-cyan px-8 py-4 rounded-xl text-[#001f28] font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar cotización a WhatsApp</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
