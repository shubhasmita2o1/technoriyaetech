import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Building2, Factory, Landmark, Activity, Radio, Zap, GraduationCap } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { industriesData } from '../data/industriesData';

export default function IndustriesPage({ onOpenContact }) {
  const location = useLocation();
  const [activeIndId, setActiveIndId] = useState(industriesData[0].id);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveIndId(id);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO 
        title="Industries Empowered | BFSI, Healthcare, Telecom, Manufacturing | Technoriya"
        description="Technoriya delivers sector-specific enterprise technology: Banking sovereign cloud &amp; RBI compliance, clinical healthcare AI, heavy manufacturing pollution automation, and Private 5G telecom."
        canonical="https://technoriya.com/industries"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Industry Specialization</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Sector-Specific Solutions <br />
            <span className="text-[#0B2046]">Engineered for Exact Regulatory &amp; Field Realities.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            No two industries share identical operational tolerances. We design specialized architectures tailored to statutory compliance in banking, clinical precision in healthcare, and environmental scrubbing in heavy manufacturing.
          </p>

          {/* Quick Jump Ribbon */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#111215] mr-2">Sectors:</span>
            {industriesData.map(ind => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                onClick={() => setActiveIndId(ind.id)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all ${
                  activeIndId === ind.id
                    ? 'bg-[#0B2046] text-white border-[#0B2046]'
                    : 'bg-white text-[#525866] border-[#DFDFD4] hover:border-[#0B2046]'
                }`}
              >
                {ind.shortName}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Catalog */}
      <section className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {industriesData.map((ind) => (
            <div 
              key={ind.id}
              id={ind.id}
              className="scroll-mt-28 bg-white border border-[#DFDFD4] rounded-[36px] p-8 sm:p-12 shadow-card"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#F0EFE8]">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="primary" size="sm">{ind.shortName}</Badge>
                    <span className="text-xs font-mono text-[#525866]">Enterprise Vertical</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-[#0B2046]">
                    {ind.lead}
                  </p>
                </div>

                <Button
                  onClick={() => onOpenContact(ind.id)}
                  variant="primary"
                  size="md"
                >
                  CONSULT {ind.shortName} PRACTICE
                </Button>
              </div>

              {/* Description & Image */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
                <div className="lg:col-span-7">
                  <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Key Challenges */}
                  <div className="mt-6 p-5 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B2046] block mb-2.5">
                      Sector-Specific Operational &amp; Compliance Challenges
                    </span>
                    <ul className="space-y-2">
                      {ind.keyChallenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="text-xs text-[#2D3139] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B2046] flex-shrink-0 mt-1.5" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-[#EBEBE2] border border-[#E5E5DC]">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Solutions & Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-[#F0EFE8] items-center">
                <div className="md:col-span-7">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] mb-3">
                    Solutions &amp; Engagements Delivered
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.solutionsDelivered.map((sol, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1E222A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2046] flex-shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 grid grid-cols-3 gap-3 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl p-4 text-center">
                  {ind.verifiedMetrics.map((vm, vIdx) => (
                    <div key={vIdx}>
                      <span className="block text-xs sm:text-sm font-extrabold text-[#0B2046] font-mono">{vm.value}</span>
                      <span className="text-[10px] text-[#525866] line-clamp-1">{vm.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
