import React, { useState } from 'react';
import { FAQS } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { getWhatsAppChatUrl } from '../data/constants';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#0a0e1a] border-t border-white/5 overflow-hidden">
      {/* Radial soft lighting */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#4a8eff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#00d2ff]/30 text-[#00d2ff] font-mono text-xs mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS DIRECTAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>

          <p className="text-base text-[#c1c6d7]">
            Todo lo que necesitas saber sobre el desarrollo, pagos y entrega de tu página web.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'border-[#00d2ff]/40 bg-[#171b28]/95 shadow-[0_0_20px_rgba(0,210,255,0.1)]'
                    : 'border-white/10 bg-[#171b28]/60 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#00d2ff] text-[#001f28] rotate-180'
                        : 'bg-white/5 text-[#8b90a0]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#c1c6d7] leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#171b28]/80 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white mb-1">
              ¿Tienes alguna duda específica sobre tu rubro?
            </h4>
            <p className="text-xs sm:text-sm text-[#8b90a0]">
              Escríbenos directamente y un asesor resolverá todas tus preguntas en minutos.
            </p>
          </div>

          <a
            href={getWhatsAppChatUrl("¡Hola SoftIA! Tengo una consulta sobre el servicio de landing pages.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs sm:text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar con un asesor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
