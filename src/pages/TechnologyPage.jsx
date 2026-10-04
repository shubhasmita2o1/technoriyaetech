import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Cpu, ArrowUpRight, CheckCircle2, Shield, Radio, Layers, Wrench, Flame, Zap } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { technologiesData } from '../data/technologiesData';

export default function TechnologyPage({ onOpenContact }) {
  const location = useLocation();
  const [activeTechId, setActiveTechId] = useState(technologiesData[0].id);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveTechId(id);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO 
        title="Emerging Technology Portfolio | AI Edge, IoT, Private 5G, EV &amp; H2 | Technoriya"
        description="Explore Technoriya's deep-tech engineering portfolio: On-device TinyML AI Edge computing, Private 5G standalone networks, LoRaWAN IoT telematics, EV307 chargers, and solid-state hydrogen R&amp;D."
        canonical="https://technoriya.com/technology"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Deep-Tech Portfolio</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Emerging Technology <br />
            <span className="text-[#0B2046]">Grounded in Silicon, Physics &amp; Code.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            We reject superficial tech hype. Our engineering vectors span physical microcontroller firmware, carrier-grade Private 5G radio propagation, clinical medical imaging models, and ambient-pressure hydrogen metal hydrides.
          </p>

          {/* Quick Filter Ribbon */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#111215] mr-2">Vectors:</span>
            {technologiesData.map(tech => (
              <a
                key={tech.id}
                href={`#${tech.id}`}
                onClick={() => setActiveTechId(tech.id)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all ${
                  activeTechId === tech.id
                    ? 'bg-[#0B2046] text-white border-[#0B2046]'
                    : 'bg-white text-[#525866] border-[#DFDFD4] hover:border-[#0B2046]'
                }`}
              >
                {tech.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Detailed Catalog */}
      <section className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {technologiesData.map((tech) => (
            <div 
              key={tech.id}
              id={tech.id}
              className="scroll-mt-28 bg-white border border-[#DFDFD4] rounded-[36px] p-8 sm:p-12 shadow-card"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#F0EFE8]">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Badge variant="primary" size="sm">{tech.category}</Badge>
                    <span className="text-xs font-mono text-[#525866]">Deep-Tech Vector</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight">
                    {tech.name}
                  </h2>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-[#0B2046]">
                    {tech.lead}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start lg:items-center gap-3">
                  <Link
                    to={`/centers-of-excellence#${tech.relatedLab}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2046] hover:text-[#2563EB] px-4 py-2.5 bg-[#F4F4EE] hover:bg-[#EAEAE2] rounded-full transition"
                  >
                    <span>Inspect CoE Lab Proving Ground</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Button
                    onClick={() => onOpenContact(tech.id)}
                    variant="primary"
                    size="md"
                  >
                    COLLABORATE
                  </Button>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-4xl">
                {tech.description}
              </p>

              {/* Metrics Strip */}
              <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F9F9F4] border border-[#E5E5DC] rounded-2xl p-5 text-center">
                {tech.keyMetrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <span className="block text-2xl font-mono font-extrabold text-[#0B2046]">{m.value}</span>
                    <span className="text-xs text-[#525866] font-medium">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Core Pillars Grid */}
              <div className="mt-8">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] mb-4">
                  Architectural Pillars &amp; Deployment Scope
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tech.corePillars.map((pillar, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="p-6 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl hover:border-[#0B2046] transition"
                    >
                      <span className="text-xs font-mono font-bold text-[#0B2046] block mb-2">0{pIdx + 1}</span>
                      <h4 className="text-sm font-bold text-[#0E1116] font-display mb-1.5">{pillar.title}</h4>
                      <p className="text-xs text-[#525866] leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* R&D Call to Action */}
      <section className="py-20 bg-[#F4F4EE] border-t border-[#DFDFD4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" dot={true}>Hardware &amp; Software R&amp;D</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight">
            Have a Deep-Tech Hardware or Telecom Challenge?
          </h2>
          <p className="mt-4 text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Engage with our senior research team and academic advisors to design custom ASIC logic, evaluate Private 5G coverage, or commission automated industrial panels.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button onClick={() => onOpenContact()} variant="primary" size="lg">
              TALK TO AN EXPERT
            </Button>
            <Button to="/centers-of-excellence" variant="secondary" size="lg">
              TOUR 8 COE LABS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
