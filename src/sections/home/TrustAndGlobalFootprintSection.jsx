import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, ShieldCheck, Microscope, ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Badge from '../../components/common/Badge';

export default function TrustAndGlobalFootprintSection() {
  const pillars = [
    {
      title: "Academic & Research Pedigree",
      subtitle: "IIT & IISc Foundation",
      icon: Microscope,
      description: "Rooted in premier academic leadership from the Indian Institutes of Technology (IIT) and Indian Institute of Science (IISc), bridging theoretical rigor with heavy industry execution.",
      highlights: [
        "Advisory leadership from IIT & IISc faculty",
        "Proprietary mathematical & embedded algorithms",
        "8 specialized Centers of Excellence"
      ],
      linkText: "Explore CoE Labs",
      linkTo: "/centers-of-excellence"
    },
    {
      title: "Tri-Continental Presence",
      subtitle: "India • South Korea • Saudi Arabia",
      icon: Globe2,
      description: "Direct operating entities across major industrial and technology corridors, enabling seamless multinational execution, cross-border research, and 24/7 engineering continuity.",
      highlights: [
        "Navi Mumbai, India — Global HQ & Core Software Hub",
        "Seongnam-si, South Korea — East Asia Tech Center",
        "Jubail, Saudi Arabia — Industrial Operations"
      ],
      linkText: "View Global Hubs",
      linkTo: "/company#locations"
    },
    {
      title: "Sovereign Compliance & Defense",
      subtitle: "Regulatory Grade",
      icon: ShieldCheck,
      description: "Architectures engineered to meet the strictest statutory standards across banking, national infrastructure, telecommunications, and defense-grade information security.",
      highlights: [
        "RBI IT-NBFC Master Direction alignment",
        "CERT-In 6-hour incident response readiness",
        "ISO/IEC 27001 & 27037 forensic chain integrity"
      ],
      linkText: "Compliance Frameworks",
      linkTo: "/company#certifications"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F1F5F9] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Enterprise Trust & Reach"
          title="WHY GLOBAL ENTERPRISES PARTNER WITH US."
          subtitle="Combining elite university research rigor with cross-border engineering footprints and strict statutory compliance."
          align="left"
        />

        {/* 3-Column Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F5FD] text-[#0B2046] flex items-center justify-center border border-[#BFDCF8]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] font-display uppercase tracking-tight leading-snug group-hover:text-[#0B2046] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#525866] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 space-y-2.5 pt-6 border-t border-[#E2E8F0]">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#2B2F38]">
                        <CheckCircle2 className="w-4 h-4 text-[#0B2046] flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
                  <Link
                    to={item.linkTo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2046] hover:text-[#2563EB] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
