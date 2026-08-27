import React, { useState, useEffect } from 'react';
import { PRICING_PLANS } from '../data/pricingData';
import { getWhatsAppChatUrl } from '../data/constants';
import { X, CheckCircle2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(defaultPlan || 'Landing Pro Negocio');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (defaultPlan) {
      setSelectedPlan(defaultPlan);
    }
  }, [defaultPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const plan = PRICING_PLANS.find(p => p.name.toLowerCase().includes(selectedPlan.toLowerCase())) || PRICING_PLANS[1];

    const message = `¡Hola SoftIA! Deseo contratar una Landing Page:\n` +
      `📦 Plan elegido: ${selectedPlan} ($${plan.price} USD)\n` +
      `👤 Nombre: ${name}\n` +
      `🏢 Negocio: ${businessName || 'Nuevo emprendimiento'}\n` +
      `📱 Teléfono/WhatsApp: ${phone}\n` +
      (notes ? `📝 Requerimientos: ${notes}\n` : '') +
      `\n¿Cuáles son los siguientes pasos para empezar?`;

    window.open(getWhatsAppChatUrl(message), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 bg-[#111625] border border-[#00d2ff]/40 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8b90a0] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[#00d2ff]/20 text-[#00d2ff] flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono text-[#00d2ff] uppercase font-bold tracking-wider">
            Comienza tu Transformación Digital
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">
          Quiero mi Landing Page Profesional
        </h3>
        <p className="text-xs sm:text-sm text-[#c1c6d7] mb-6">
          Completa tus datos para coordinar el diseño y puesta en marcha de tu nueva web.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Plan Selector */}
          <div>
            <label className="block text-xs font-mono text-[#adc7ff] uppercase mb-2">
              Selecciona tu Plan:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {PRICING_PLANS.map((p) => {
                const isSelected = selectedPlan === p.name;
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => setSelectedPlan(p.name)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-[#00d2ff] bg-[#00d2ff]/20 text-white shadow-sm'
                        : 'border-white/10 bg-[#171b28] text-[#c1c6d7] hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-bold block truncate">{p.name}</span>
                    <span className="text-xs font-mono text-[#47d6ff] font-bold">
                      ${p.price} USD
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                Tu Nombre *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. María Gómez"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                Nombre de tu Negocio
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Ej. Bakery Delipán"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
              WhatsApp / Teléfono *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ej. +51 987 654 321"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
              Detalles o preguntas adicionales (Opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="¿Tienes logotipo, dominio o redes sociales activas?"
              className="w-full px-4 py-2 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff] resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full btn-glow-primary py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Coordinar pedido por WhatsApp</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-[#8b90a0]">
            ⚡ Tiempo de respuesta estimado: menos de 5 minutos
          </p>
        </form>
      </div>
    </div>
  );
};
