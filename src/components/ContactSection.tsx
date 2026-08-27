import React, { useState } from 'react';
import { BRAND, getWhatsAppChatUrl } from '../data/constants';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    category: 'Gastronomía / Restaurante',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `¡Hola SoftIA! Mi nombre es ${formData.name}.\n` +
      `🏢 Negocio: ${formData.businessName || 'Nuevo Proyecto'}\n` +
      `📂 Rubro: ${formData.category}\n` +
      `📱 Tel/WhatsApp: ${formData.phone}\n` +
      `✉️ Correo: ${formData.email}\n` +
      (formData.message ? `💬 Mensaje: ${formData.message}` : '');

    const url = getWhatsAppChatUrl(message);
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 relative bg-[#0f131f] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#4a8eff]/30 text-[#adc7ff] font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTAMOS LISTOS PARA AYUDARTE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Impulsa la presencia de tu negocio hoy
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] max-w-2xl mx-auto">
            Completa el formulario o contáctanos directamente por WhatsApp para recibir una propuesta personalizada sin costo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-3xl bg-[#171b28]/90 border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Canales de Atención Directa
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={getWhatsAppChatUrl("¡Hola SoftIA! Quisiera conversar con un asesor comercial sobre una Landing Page.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#25D366]/15 border border-white/10 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8b90a0] block">WhatsApp Oficial</span>
                    <span className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                      {BRAND.whatsappFormatted}
                    </span>
                    <p className="text-xs text-[#c1c6d7] mt-0.5">Respuesta promedio: &lt; 5 minutos</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#00d2ff]/15 border border-white/10 hover:border-[#00d2ff]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00d2ff]/20 text-[#00d2ff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8b90a0] block">Correo Electrónico</span>
                    <span className="text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                      {BRAND.email}
                    </span>
                    <p className="text-xs text-[#c1c6d7] mt-0.5">Para propuestas corporativas</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-[#b56eff]/20 text-[#b56eff] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8b90a0] block">Ubicación & Cobertura</span>
                    <span className="text-base font-bold text-white">
                      {BRAND.location}
                    </span>
                    <p className="text-xs text-[#c1c6d7] mt-0.5">Atención remota a todo el mundo</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-[#4a8eff]/20 text-[#4a8eff] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8b90a0] block">Horarios de Asesoría</span>
                    <span className="text-base font-bold text-white">
                      Lunes a Sábado: 8:00 AM - 8:00 PM
                    </span>
                    <p className="text-xs text-[#c1c6d7] mt-0.5">Asistente IA disponible 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl bg-[#171b28]/95 border border-[#00d2ff]/30 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Solicita una Propuesta Gratuita
              </h3>
              <p className="text-xs sm:text-sm text-[#8b90a0] mb-8">
                Déjanos tus datos y nos pondremos en contacto contigo de inmediato con una cotización a medida.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    ¡Mensaje Enviado con Éxito!
                  </h4>
                  <p className="text-sm text-[#dfe2f3] mb-6">
                    Se ha generado tu solicitud y te estamos redirigiendo a WhatsApp para coordinar los detalles con un asesor.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-glow-primary px-6 py-2.5 rounded-xl text-white text-xs font-semibold"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                        Nombre del Negocio
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Ej. Clínica Dental Sonrisas"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. +51 987 654 321"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                        Rubro de tu Empresa
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d2ff] transition-colors"
                      >
                        <option value="Gastronomía / Restaurante">Gastronomía / Restaurante / Panadería</option>
                        <option value="Salud / Clínica / Dental">Salud / Clínica / Odontología</option>
                        <option value="Servicios Profesionales / Legal">Servicios Profesionales / Legal / Consultoría</option>
                        <option value="Tienda / Ecommerce / Ropa">Tienda de Ropa / Calzado / Retail</option>
                        <option value="Gimnasio / Deportes">Gimnasio / Fitness / Deportes</option>
                        <option value="Otro">Otro Rubro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                      Correo Electrónico (Opcional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@tunegocio.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#c1c6d7] uppercase mb-1.5">
                      ¿Qué características especiales necesitas?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos si tienes logotipo, si deseas catálogo con carrito, o automatización con chatbot IA..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-[#8b90a0] text-sm focus:outline-none focus:border-[#00d2ff] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-glow-primary py-4 rounded-xl text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud y Recibir Cotización</span>
                  </button>

                  <p className="text-center text-[11px] text-[#8b90a0]">
                    🔒 Tus datos están 100% protegidos. No compartimos tu información con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
