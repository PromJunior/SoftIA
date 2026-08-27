import React from 'react';
import { BRAND, getWhatsAppChatUrl } from '../data/constants';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0e1a] border-t border-white/10 w-full py-16 text-[#dfe2f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row (Exact style from Image 4) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#4a8eff] to-[#00d2ff]">
                <img
                  src={BRAND.footerLogoUrl}
                  alt="SoftIA Logo"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight flex items-center gap-1">
                Soft<span className="text-[#00d2ff]">IA</span>
              </span>
            </div>

            <p className="text-sm text-[#c1c6d7] max-w-sm text-center md:text-left">
              Digitalizamos tu negocio para que puedas crecer.
            </p>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm">
            <a
              href="#inicio"
              className="text-[#c1c6d7] hover:text-[#00d2ff] transition-colors"
            >
              Inicio
            </a>
            <a
              href="#beneficios"
              className="text-[#c1c6d7] hover:text-[#00d2ff] transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#que-incluye"
              className="text-[#c1c6d7] hover:text-[#00d2ff] transition-colors"
            >
              Qué incluye
            </a>
            <a
              href="#ejemplos"
              className="text-[#c1c6d7] hover:text-[#00d2ff] transition-colors"
            >
              Ejemplos
            </a>
            <a
              href="#precio"
              className="text-[#c1c6d7] hover:text-[#00d2ff] transition-colors"
            >
              Precio
            </a>
            <a
              href={getWhatsAppChatUrl("¡Hola SoftIA! Quisiera contactar a soporte.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c1c6d7] hover:text-[#25D366] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8b90a0]">
          <p>© {BRAND.year} SoftIA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#8b90a0]">Tecnología • Automatización • Innovación</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
