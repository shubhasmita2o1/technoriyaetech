import React from 'react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { ArrowUpRight, PhoneCall, Mail, MapPin } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function FinalCTASection({ onOpenContact }) {
  return (
    <section className="py-24 md:py-36 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Subtle architectural background gradients (strictly light, warm, no neon) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-100/40 via-amber-50/40 to-stone-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <Badge variant="primary" dot={true}>
          Direct Enterprise Consultation
        </Badge>

        <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B0D11] font-display uppercase tracking-tight leading-[1.05]">
          LET'S BUILD <br />
          <span className="text-[#0B2046] underline decoration-[#E2E8F0] decoration-2 underline-offset-8">
            WHAT'S NEXT.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-normal">
          Talk to our technology experts about your next transformation, engineering, software, cybersecurity, or emerging technology initiative.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={onOpenContact}
            variant="primary"
            size="xl"
          >
            TALK TO AN EXPERT
          </Button>

          <Button
            to="/solutions"
            variant="secondary"
            size="xl"
            iconType="straight"
          >
            EXPLORE OUR SOLUTIONS
          </Button>
        </div>

        {/* Global Direct Touchpoints */}
        <div className="mt-16 pt-10 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center gap-8 text-xs text-[#525866]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0B2046]" />
            <span>Navi Mumbai • Seongnam-si • Jubail</span>
          </div>

          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-[#0B2046]" />
            <a href={`tel:${companyData.contact.phone}`} className="hover:text-[#0B2046] font-semibold transition">
              {companyData.contact.phone}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0B2046]" />
            <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#0B2046] font-semibold transition">
              {companyData.contact.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
