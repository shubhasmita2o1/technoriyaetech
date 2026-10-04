import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../sections/home/HeroSection';
import PartnersMarquee from '../sections/home/PartnersMarquee';
import WhatWeDoSection from '../sections/home/WhatWeDoSection';
import ProjectsPreviewSection from '../sections/home/ProjectsPreviewSection';
import TrustAndGlobalFootprintSection from '../sections/home/TrustAndGlobalFootprintSection';
import FinalCTASection from '../sections/home/FinalCTASection';

export default function HomePage({ onOpenContact }) {
  return (
    <>
      <SEO 
        title="Technoriya | Enterprise Technology, SAP S/4HANA, Cybersecurity &amp; Emerging Tech"
        description="Technoriya e Technologies Pvt Ltd is a premier enterprise solutions partner specializing in SAP S/4HANA, Cybersecurity &amp; DFIR, Cloud Infrastructure, Private 5G, Industrial IoT, and Emerging Technology Centers of Excellence."
        canonical="https://technoriya.com"
      />

      {/* 1. Hero: Core Value Proposition, Key Metrics & Primary Actions */}
      <HeroSection onOpenContact={onOpenContact} />

      {/* 2. Enterprise Ecosystem & Alliances Marquee */}
      <PartnersMarquee />

      {/* 3. Strategic Hub: Interactive 4-Pillar Architecture */}
      <WhatWeDoSection onOpenContact={onOpenContact} />

      {/* 4. Verified Execution: Streamlined Case Studies Showcase */}
      <ProjectsPreviewSection />

      {/* 5. Enterprise Trust: Academic Pedigree, Tri-Continental Hubs & Sovereign Compliance */}
      <TrustAndGlobalFootprintSection />

      {/* 6. Executive Consultation CTA */}
      <FinalCTASection onOpenContact={onOpenContact} />
    </>
  );
}
