import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { industriesData } from '../../data/industriesData';

export default function IndustriesPreviewSection({ onOpenContact }) {
  const [selectedIndustryId, setSelectedIndustryId] = useState(industriesData[0].id);

  const activeIndustry = industriesData.find(ind => ind.id === selectedIndustryId) || industriesData[0];

  return (
    <section className="py-20 md:py-32 bg-[#F7F7F2] border-y border-[#DFDFD4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Sector Specialization"
          title="INDUSTRIES EMPOWERED."
          subtitle="Precision engineering solutions aligned with sector-specific operational tolerances, statutory mandates, and environmental realities."
          align="between"
          action={
            <Button to="/industries" variant="secondary" size="md">
              VIEW ALL INDUSTRIES
            </Button>
          }
        />

        {/* Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Vertical Industry Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {industriesData.map((ind) => {
              const isSelected = ind.id === selectedIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustryId(ind.id)}
                  onMouseEnter={() => setSelectedIndustryId(ind.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-[#0B2046] shadow-card translate-x-2'
                      : 'bg-white/60 hover:bg-white border-[#DFDFD4] hover:border-[#CBD5E1]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#0B2046]' : 'bg-[#D1D1C7]'}`} />
                    <span className={`text-sm font-bold font-display uppercase tracking-tight ${
                      isSelected ? 'text-[#0B2046]' : 'text-[#2D3139]'
                    }`}>
                      {ind.shortName}
                    </span>
                  </div>
                  <span className={`text-xs font-semibold ${isSelected ? 'text-[#0B2046]' : 'text-[#9CA3AF]'}`}>
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Sector Preview Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#DFDFD4] rounded-[32px] p-6 sm:p-10 shadow-float flex flex-col justify-between">
            <div>
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E5E5DC]">
                <div>
                  <Badge variant="primary" size="sm">{activeIndustry.shortName} Specialization</Badge>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0E1116] font-display uppercase">
                    {activeIndustry.name}
                  </h3>
                </div>
                <Link
                  to={`/industries#${activeIndustry.id}`}
                  className="text-xs font-bold text-[#0B2046] hover:text-[#2563EB] flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Lead & Description */}
              <p className="mt-5 text-sm sm:text-base font-semibold text-[#0B2046] leading-relaxed">
                {activeIndustry.lead}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                {activeIndustry.description}
              </p>

              {/* Solutions Delivered */}
              <div className="mt-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] block mb-2.5">
                  Core Solutions &amp; Engagements Delivered
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeIndustry.solutionsDelivered.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1E222A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2046] flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="mt-6 grid grid-cols-3 gap-3 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl p-3 text-center">
                {activeIndustry.verifiedMetrics.map((vm, vIdx) => (
                  <div key={vIdx}>
                    <span className="block text-xs font-extrabold text-[#0B2046] font-mono">{vm.value}</span>
                    <span className="text-[10px] text-[#525866]">{vm.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Row */}
            <div className="mt-8 pt-6 border-t border-[#E5E5DC] flex flex-wrap items-center justify-between gap-4">
              <Button
                to={`/industries#${activeIndustry.id}`}
                variant="primary"
                size="md"
              >
                EXPLORE {activeIndustry.shortName} SOLUTIONS
              </Button>
              <Button
                onClick={onOpenContact}
                variant="secondary"
                size="md"
              >
                REQUEST SECTOR CONSULTATION
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
