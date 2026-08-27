import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { ProblemSection } from './components/ProblemSection';
import { BenefitsSection } from './components/BenefitsSection';
import { WhatIsIncluded } from './components/WhatIsIncluded';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingCalculator } from './components/PricingCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderModal } from './components/OrderModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectDemo } from './types';
import { PORTFOLIO_DEMOS } from './data/portfolioData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderModalPlan, setOrderModalPlan] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectDemo | null>(null);

  const handleOpenOrderModal = (planName?: string) => {
    setOrderModalPlan(planName);
    setIsOrderModalOpen(true);
  };

  const handleSelectServiceFromPillar = (serviceName: string) => {
    setOrderModalPlan(serviceName);
    setIsOrderModalOpen(true);
  };

  const handleOpenPreviewDemo = () => {
    setSelectedProject(PORTFOLIO_DEMOS[0]);
  };

  return (
    <div className="min-h-screen bg-[#0f131f] text-[#dfe2f3] selection:bg-[#4a8eff] selection:text-white flex flex-col">
      {/* Top Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section (Matches image 4 and mockup image 3) */}
        <Hero
          onOpenOrderModal={() => handleOpenOrderModal('Landing Pro Negocio')}
          onOpenPreviewDemo={handleOpenPreviewDemo}
        />

        {/* 2. Pillars Section (Matches image 1 & 2 circles and brand slogan) */}
        <PillarsSection onSelectService={handleSelectServiceFromPillar} />

        {/* 3. Problem Section (Matches image 4 4-cards structure) */}
        <ProblemSection onOpenOrderModal={() => handleOpenOrderModal('Landing Presencia')} />

        {/* 4. Benefits Section */}
        <BenefitsSection onOpenOrderModal={() => handleOpenOrderModal('Landing Pro Negocio')} />

        {/* 5. What Is Included Section */}
        <WhatIsIncluded onOpenOrderModal={() => handleOpenOrderModal('Landing Pro Negocio')} />

        {/* 6. Portfolio & Interactive Live Demos */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. Process in 4 Steps */}
        <ProcessSection onOpenOrderModal={() => handleOpenOrderModal('Landing Pro Negocio')} />

        {/* 8. Transparent Pricing & Instant Quote Calculator */}
        <PricingCalculator onSelectPlan={(planName) => handleOpenOrderModal(planName)} />

        {/* 9. Testimonials & Verified Case Studies */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 11. Contact & Free Diagnosis Proposal */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Order & Inquiries Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultPlan={orderModalPlan}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
