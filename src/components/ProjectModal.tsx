import React from 'react';
import { ProjectDemo } from '../types';
import { getWhatsAppChatUrl } from '../data/constants';
import { X, CheckCircle2, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDemo | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 bg-[#111625] border border-[#00d2ff]/40 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8b90a0] hover:text-white hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/40">
            {project.category}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40">
            {project.badge}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[#8b90a0] mb-6">
          {project.tagline}
        </p>

        {/* Large Image Preview */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl bg-[#0a0e1a]">
          <img
            src={project.previewUrl}
            alt={project.title}
            className="w-full h-auto max-h-[380px] object-cover"
          />
        </div>

        {/* Description & Metrics */}
        <div className="grid md:grid-cols-12 gap-6 mb-6">
          <div className="md:col-span-7">
            <h4 className="text-sm font-bold text-white font-mono uppercase mb-2">
              Estrategia y Arquitectura:
            </h4>
            <p className="text-sm text-[#c1c6d7] leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="space-y-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#dfe2f3]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between p-4 rounded-2xl bg-[#171b28] border border-white/10">
            <div>
              <span className="text-xs font-mono text-[#8b90a0] uppercase block mb-3">
                Métricas de Rendimiento:
              </span>
              <div className="space-y-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-2 border-b border-white/5 text-xs">
                    <span className="text-[#c1c6d7]">{m.label}</span>
                    <span className="font-bold font-mono text-[#00d2ff]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-2">
              <a
                href={getWhatsAppChatUrl(`¡Hola SoftIA! Vi la demo de ${project.title} y deseo una solución similar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-glow-cyan py-3 rounded-xl text-[#001f28] font-bold text-xs flex items-center justify-center gap-2 shadow-lg text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar una web como esta</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
