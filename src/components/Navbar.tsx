import React, { useState, useEffect } from 'react';
import { BRAND, getWhatsAppChatUrl } from '../data/constants';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'beneficios', 'que-incluye', 'ejemplos', 'proceso', 'precio', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'que-incluye', label: 'Qué incluye' },
    { id: 'ejemplos', label: 'Ejemplos' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'precio', label: 'Precio' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f131f]/90 backdrop-blur-xl border-b border-[#00d2ff]/20 shadow-2xl py-3'
          : 'bg-[#0f131f]/75 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center gap-3 group"
          id="nav-brand-logo"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#4a8eff] to-[#00d2ff] group-hover:shadow-[0_0_15px_rgba(74,142,255,0.6)] transition-all">
            <img
              src={BRAND.logoUrl}
              alt="SoftIA Logo"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-[#adc7ff] transition-colors flex items-center gap-1">
              Soft<span className="text-[#00d2ff]">IA</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'text-[#47d6ff] font-semibold bg-[#171b28]/80 border-b-2 border-[#00d2ff]'
                    : 'text-[#c1c6d7] hover:text-[#adc7ff] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={getWhatsAppChatUrl("¡Hola SoftIA! Quisiera consultar sobre una Landing Page para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/30 transition-all flex items-center gap-1.5 text-xs font-mono"
            title="Chat directo en WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          <button
            id="nav-cta-btn"
            onClick={() => onOpenOrderModal()}
            className="btn-glow-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm text-white font-medium shadow-[0_0_15px_rgba(74,142,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Quiero mi Landing Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-btn"
          aria-label="Abrir menú"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#dfe2f3] hover:text-[#47d6ff] hover:bg-[#171b28] transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#171b28] border-b border-white/10 px-6 py-5 shadow-2xl transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-[#00d2ff] bg-white/5 font-semibold'
                    : 'text-[#dfe2f3] hover:text-[#47d6ff]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full btn-glow-primary py-3 rounded-xl text-white font-medium text-center text-sm shadow-lg"
              >
                🚀 Quiero mi Landing Page
              </button>

              <a
                href={getWhatsAppChatUrl("¡Hola SoftIA! Quisiera cotizar una Landing Page para mi negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] font-medium text-center text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
