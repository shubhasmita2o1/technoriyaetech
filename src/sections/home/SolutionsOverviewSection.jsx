import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { solutionsData } from '../../data/solutionsData';

export default function SolutionsOverviewSection({ onOpenContact }) {
  const [hoveredSolution, setHoveredSolution] = useState(null);

  return (
    <section className="py-20 md:py-32 bg-[#FAFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Solutions Architecture"
          title="ENTERPRISE SOLUTIONS."
          subtitle="Engineered for high-stakes operational continuity, regulatory compliance, and cross-functional performance."
          align="between"
          action={
            <Button to="/solutions" variant="secondary" size="md">
              VIEW ALL 8 SOLUTIONS
            </Button>
          }
        />

        {/* Editorial Solutions Grid - Asymmetrical, soft-radius, distinct layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {solutionsData.map((sol, index) => {
            const isFeatured = index === 0 || index === 1; // SAP & Cyber get primary editorial spotlight

            return (
              <div
                key={sol.id}
                onMouseEnter={() => setHoveredSolution(sol.id)}
                onMouseLeave={() => setHoveredSolution(null)}
                className={`group relative bg-white border border-[#DFDFD4] hover:border-[#0B2046] rounded-[32px] p-8 sm:p-10 shadow-subtle hover:shadow-elevated transition-all duration-500 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-1 bg-gradient-to-b from-white to-[#F9F9F4]' : ''
                }`}
              >
                <div>
                  {/* Top bar with number and tag */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#F0EFE8]">
                    <span className="text-3xl font-extrabold text-[#0B2046] font-mono tracking-tighter">
                      {sol.number}
                    </span>
                    <Badge variant="neutral" size="sm">
                      {sol.tags[0]}
                    </Badge>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-[#0E1116] group-hover:text-[#0B2046] transition-colors font-display uppercase tracking-tight">
                    {sol.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#4A4E5A] leading-relaxed line-clamp-3">
                    {sol.shortDesc}
                  </p>

                  {/* Verified Deliverables Snippet */}
                  <div className="mt-6 pt-6 border-t border-[#F0EFE8] space-y-2">
                    {sol.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-[#2D3139]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B2046]" />
                        <span className="font-semibold">{cap.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Tags & Action Link */}
                <div className="mt-8 pt-6 border-t border-[#F0EFE8] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {sol.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 bg-[#F4F4EE] text-[#525866] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/solutions#${sol.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2046] group-hover:text-[#2563EB] transition-colors"
                  >
                    <span>Read Full Scope</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Software & ERP */}
        <div className="mt-12 bg-[#0B2046] text-white rounded-[32px] p-8 sm:p-12 shadow-float flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <Badge variant="accent" size="sm" className="bg-white/10 text-white border-white/20">
              ERP &amp; Software Modernization
            </Badge>
            <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold font-display uppercase tracking-tight leading-tight">
              Looking for Bespoke ERP or S/4HANA Consulting?
            </h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              From Finance, HRMS, and Procurement to automated high-bay warehouse slotting in SAP EWM, our senior architects craft scalable enterprise systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <Button 
              onClick={onOpenContact} 
              variant="accent" 
              size="lg"
              className="bg-white text-[#0B2046] hover:bg-[#F4F4EE]"
            >
              TALK TO AN EXPERT
            </Button>
            <Button 
              to="/solutions#sap-erp" 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              SAP S/4HANA DETAILS
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
