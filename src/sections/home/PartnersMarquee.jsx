import React from 'react';
import { partnersData } from '../../data/partnersData';
import Badge from '../../components/common/Badge';

export default function PartnersMarquee() {
  return (
    <section className="py-12 border-y border-[#DFDFD4] bg-[#F7F7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#525866] block">
            VERIFIED ALLIANCES &amp; INTEGRATIONS
          </span>
          <h3 className="text-sm font-bold text-[#0E1116] uppercase mt-0.5">
            Trusted by Enterprise Leaders, Regulators &amp; Infrastructure Providers
          </h3>
        </div>

        <Badge variant="white" size="sm">
          Global Consortium Ecosystem
        </Badge>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden flex items-center select-none py-2">
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {partnersData.concat(partnersData).map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#E5E5DC] shadow-subtle hover:border-[#CBD5E1] transition-all duration-300 group cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F0EFE8] flex items-center justify-center font-bold text-xs text-[#0B2046] font-display group-hover:bg-[#0B2046] group-hover:text-white transition-colors">
                {partner.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#111215] whitespace-nowrap group-hover:text-[#0B2046] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-[#6B7280] whitespace-nowrap">
                  {partner.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
