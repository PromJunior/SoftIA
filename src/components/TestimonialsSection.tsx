import React from 'react';
import { TESTIMONIALS } from '../data/faqData';
import { Star, Quote, CheckCircle2, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#0f131f] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1f2c] border border-[#25D366]/30 text-[#25D366] font-mono text-xs mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>RESULTADOS REALES & CASOS DE ÉXITO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Negocios que crecen con <span className="gradient-text">SoftIA</span>
          </h2>

          <p className="text-base sm:text-lg text-[#c1c6d7] max-w-2xl mx-auto">
            Descubre las experiencias de dueños de negocio y profesionales que digitalizaron su presencia con nosotros.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-7 sm:p-8 rounded-3xl bg-[#171b28]/80 border-white/10 hover:border-[#00d2ff]/40 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Star rating & Result Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#ffbd2e]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffbd2e]" />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                    {t.results}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#4a8eff]/30 mb-3" />

                <p className="text-sm sm:text-base text-[#dfe2f3] italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#00d2ff]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                  </h4>
                  <p className="text-xs text-[#8b90a0]">
                    {t.role} • <span className="text-[#a5e7ff]">{t.business}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
