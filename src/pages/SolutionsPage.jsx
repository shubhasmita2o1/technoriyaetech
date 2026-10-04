import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Database, Layers, Radio, Cpu, Wrench, BarChart2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { solutionsData } from '../data/solutionsData';

export default function SolutionsPage({ onOpenContact }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(solutionsData[0].id);

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveTab(id);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO 
        title="Enterprise Solutions | SAP S/4HANA, Cybersecurity, Cloud &amp; IoT | Technoriya"
        description="Comprehensive enterprise technology solutions: SAP S/4HANA digital core, sovereign DFIR and cybersecurity audits, Private 5G networks, industrial automation, and custom ERP software."
        canonical="https://technoriya.com/solutions"
      />

      {/* Page Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Enterprise Solutions Architecture</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Enterprise Solutions <br />
            <span className="text-[#0B2046]">Engineered for Operational Resilience.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            From Greenfield SAP S/4HANA core migrations and 24x7 SOC incident response to carrier-grade Private 5G and automated pollution scrubbers, our solutions ensure mission-critical continuity.
          </p>

          {/* Quick Anchor Ribbon */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#111215] mr-2">Jump to Solution:</span>
            {solutionsData.map(sol => (
              <a
                key={sol.id}
                href={`#${sol.id}`}
                onClick={() => setActiveTab(sol.id)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all ${
                  activeTab === sol.id 
                    ? 'bg-[#0B2046] text-white border-[#0B2046]' 
                    : 'bg-white text-[#525866] border-[#DFDFD4] hover:border-[#0B2046]'
                }`}
              >
                {sol.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Catalog */}
      <section className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {solutionsData.map((sol, index) => (
            <div 
              key={sol.id} 
              id={sol.id} 
              className="scroll-mt-28 bg-white border border-[#DFDFD4] rounded-[36px] p-8 sm:p-12 shadow-card"
            >
              {/* Header inside Card */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#F0EFE8]">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-mono font-extrabold text-[#0B2046]">
                      {sol.number}
                    </span>
                    <Badge variant="primary" size="sm">ENTERPRISE PRACTICE</Badge>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight">
                    {sol.title}
                  </h2>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-[#0B2046]">
                    {sol.headline}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {sol.overview}
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
                  <Button 
                    onClick={() => onOpenContact(sol.id)} 
                    variant="primary" 
                    size="md"
                  >
                    CONSULT AN EXPERT
                  </Button>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-mono px-2.5 py-1 bg-[#F4F4EE] text-[#525866] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F9F9F4] border border-[#E5E5DC] rounded-2xl p-5 text-center">
                {sol.verifiedMetrics.map((vm, vIdx) => (
                  <div key={vIdx} className="p-2">
                    <span className="block text-2xl font-mono font-extrabold text-[#0B2046]">{vm.value}</span>
                    <span className="text-xs text-[#525866] uppercase tracking-wider font-medium">{vm.label}</span>
                  </div>
                ))}
              </div>

              {/* Deep Capabilities Grid */}
              <div className="mt-10">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] mb-6">
                  Verified Capabilities &amp; Technical Scope
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sol.capabilities.map((cap, cIdx) => (
                    <div 
                      key={cIdx} 
                      className="p-6 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl hover:border-[#0B2046] hover:bg-white transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-base font-bold text-[#0E1116] font-display mb-2">
                          {cap.name}
                        </h4>
                        <p className="text-xs text-[#525866] leading-relaxed mb-4">
                          {cap.desc}
                        </p>
                      </div>

                      {cap.deliverables && (
                        <div className="pt-3 border-t border-[#EAEAE2] space-y-1.5">
                          {cap.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-[#2D3139]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2046] flex-shrink-0" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-20 bg-[#F4F4EE] border-t border-[#DFDFD4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" dot={true}>Enterprise Engagement</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight">
            Ready to Architect Your Enterprise Roadmap?
          </h2>
          <p className="mt-4 text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Our multi-disciplinary teams in Navi Mumbai, South Korea, and Saudi Arabia are available for confidential architectural evaluations, RF planning, and statutory compliance scoping.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button onClick={() => onOpenContact()} variant="primary" size="lg">
              TALK TO AN EXPERT
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              OFFICE DIRECTORY
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
