import React, { useState } from 'react';
import { BRAND, getWhatsAppChatUrl } from '../data/constants';
import { X, Send, Sparkles, MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    '🚀 Quiero cotizar una Landing Page para mi negocio',
    '🤖 Me interesa la automatización con IA y Chatbot',
    '📱 Deseo ver un ejemplo adaptado a mi rubro',
    '💬 Quiero hablar con un asesor comercial'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 glass-panel rounded-3xl p-5 border border-[#25D366]/40 bg-[#0f1423]/95 shadow-[0_10px_35px_rgba(0,0,0,0.6)] animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#4a8eff] to-[#00d2ff]">
                  <img
                    src={BRAND.logoUrl}
                    alt="SoftIA Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#0f1423]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1">
                  SoftIA Soporte & Ventas
                </h4>
                <p className="text-[11px] text-[#25D366] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  En línea ahora
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#8b90a0] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message bubble */}
          <div className="p-3.5 rounded-2xl bg-[#171b28] border border-white/10 text-xs text-[#dfe2f3] leading-relaxed mb-4">
            <p className="font-semibold text-white mb-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" />
              ¡Hola! ¿En qué podemos ayudarte hoy?
            </p>
            <p className="text-[#c1c6d7]">
              Selecciona una opción rápida para abrir WhatsApp con un asesor de SoftIA:
            </p>
          </div>

          {/* Quick options */}
          <div className="space-y-2 mb-4">
            {quickMessages.map((msg, i) => (
              <a
                key={i}
                href={getWhatsAppChatUrl(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/5 hover:border-[#25D366]/40 text-xs text-[#dfe2f3] hover:text-white transition-all flex items-center justify-between group block"
              >
                <span className="truncate pr-2">{msg}</span>
                <Send className="w-3 h-3 text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            ))}
          </div>

          {/* Footer Direct WhatsApp Link */}
          <a
            href={getWhatsAppChatUrl("¡Hola SoftIA! Quisiera conversar con un asesor comercial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#22bf5b] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Abrir chat de WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating WhatsApp Bubble (Faithful to Image 4) */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#22bf5b] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all text-white relative group cursor-pointer"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        {isOpen ? (
          <X className="w-7 h-7 relative z-10" />
        ) : (
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        )}
      </button>

    </div>
  );
};
