import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Cpu, Globe2, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export default function HeroSection({ onOpenContact }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Light atmospheric background elements - warm & architectural, NO neon */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/50 to-amber-50/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-100/80 to-stone-100/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Pill */}
        <div className="flex items-center gap-3 mb-8">
          <Badge variant="primary" dot={true} dotColor="bg-[#2563EB]">
            Enterprise Technology &amp; R&amp;D
          </Badge>
          <span className="hidden sm:inline text-xs text-[#525866] font-medium">
            Founded with IIT &amp; IISc Academic Pedigree • Navi Mumbai • Pangyo • Jubail
          </span>
        </div>

        {/* Hero Grid: Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Typography Column (7 cols) */}
          <div className="lg:col-span-7 pr-0 lg:pr-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold text-[#0B0D11] tracking-tight leading-[1.04] font-display uppercase">
              Engineering <br />
              Technology for a <br />
              <span className="text-[#0B2046] underline decoration-[#DFDFD4] decoration-2 underline-offset-8">
                Changing World.
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#374151] leading-relaxed max-w-2xl font-normal">
              Technoriya is a premier enterprise solutions partner delivering <strong>SAP S/4HANA</strong>, advanced <strong>Cybersecurity &amp; DFIR</strong>, sovereign cloud, <strong>Private 5G</strong>, industrial automation, and deep-tech Centers of Excellence across three continents.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button 
                onClick={onOpenContact} 
                variant="primary" 
                size="lg"
              >
                TALK TO AN EXPERT
              </Button>
              <Button 
                to="/solutions" 
                variant="secondary" 
                size="lg"
                iconType="straight"
              >
                EXPLORE OUR SOLUTIONS
              </Button>
            </div>

            {/* Credibility Ticker Bar */}
            <div className="mt-14 pt-8 border-t border-[#DFDFD4] grid grid-cols-3 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0B2046] font-display">IIT &amp; IISc</span>
                <p className="text-xs text-[#525866] mt-1 font-medium">Academic leadership &amp; advisory pedigree</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0B2046] font-display">8 CoE Labs</span>
                <p className="text-xs text-[#525866] mt-1 font-medium">IoT, Cyber, VLSI, AI, AR/VR, EV, H2</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0B2046] font-display">3 Continents</span>
                <p className="text-xs text-[#525866] mt-1 font-medium">India (HQ), South Korea &amp; Saudi Arabia</p>
              </div>
            </div>

          </div>

          {/* Editorial Visual Composition Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden bg-white border border-[#DFDFD4] p-3 shadow-elevated">
              
              {/* Primary Image: Enterprise Architecture & Technology */}
              <div className="relative h-[380px] sm:h-[440px] rounded-[24px] overflow-hidden bg-[#ECECE5]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise Modern Technology Infrastructure"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle soft gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-mono tracking-wider uppercase font-semibold text-white border border-white/30">
                      Tier-1 Enterprise Delivery
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display leading-snug">
                    Sovereign Cloud, SAP Core &amp; Industrial IoT
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1">
                    Audited compliance with RBI, SEBI, and CERT-In national guidelines.
                  </p>
                </div>
              </div>

              {/* Floating Floating Interactive Status Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md border border-[#DFDFD4] p-4 rounded-2xl shadow-float max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0E1116] block">Zero Breach Track</span>
                    <span className="text-[10px] text-[#525866]">ISO &amp; CERT-In Audited</span>
                  </div>
                </div>
                <div className="w-full bg-[#F0EFE8] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[99.9%]" />
                </div>
              </div>

              {/* Floating Global Operations Indicator */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-[#DFDFD4] px-4 py-2.5 rounded-2xl shadow-card hidden sm:flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
                <span className="text-xs font-bold text-[#0B2046]">Pangyo • Jubail • Navi Mumbai</span>
              </div>

            </div>

            {/* Quick Solution Anchors under visual */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[#525866]">
              <span className="font-semibold text-[#0E1116]">Strategic Focus:</span>
              <span className="px-2.5 py-1 bg-white border border-[#DFDFD4] rounded-lg">SAP S/4HANA</span>
              <span className="px-2.5 py-1 bg-white border border-[#DFDFD4] rounded-lg">DFIR Incident Response</span>
              <span className="px-2.5 py-1 bg-white border border-[#DFDFD4] rounded-lg">Private 5G SA</span>
              <span className="px-2.5 py-1 bg-white border border-[#DFDFD4] rounded-lg">Pollution Automation</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
