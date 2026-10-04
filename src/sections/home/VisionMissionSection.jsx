import React from 'react';
import Badge from '../../components/common/Badge';
import { Target, Compass } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function VisionMissionSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F1F5F9] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" dot={true}>Guiding Principles</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight uppercase font-display">
            MISSION &amp; VISION.
          </h2>
          <p className="mt-3 text-base text-[#525866]">
            The strategic north star directing Technoriya's multi-disciplinary engineering and academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 sm:p-12 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FD] text-[#0B2046] flex items-center justify-center border border-[#BFDCF8]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#525866] uppercase tracking-wider block">Foundational Mandate</span>
                  <h3 className="text-xl font-extrabold text-[#0F172A] font-display uppercase">OUR MISSION</h3>
                </div>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-[#0B2046] font-display uppercase tracking-tight leading-snug">
                "{companyData.mission}"
              </blockquote>
            </div>

            <p className="mt-6 pt-6 border-t border-[#E2E8F0] text-xs text-[#525866] leading-relaxed">
              Committed to breaking the cost barrier of enterprise ERP while deploying uncompromised, resilient digital architectures for public utilities and industrial automation.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 sm:p-12 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center border border-[#FDE68A]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#525866] uppercase tracking-wider block">Future Trajectory</span>
                  <h3 className="text-xl font-extrabold text-[#0F172A] font-display uppercase">OUR VISION</h3>
                </div>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-[#0F172A] font-display uppercase tracking-tight leading-snug">
                "{companyData.vision}"
              </blockquote>
            </div>

            <p className="mt-6 pt-6 border-t border-[#E2E8F0] text-xs text-[#525866] leading-relaxed">
              Synchronizing physical factory machinery and field telemetry with intelligent cloud software to build autonomous, high-efficiency commercial enterprises.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
