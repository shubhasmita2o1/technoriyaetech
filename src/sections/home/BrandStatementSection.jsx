import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import Badge from '../../components/common/Badge';
import { ShieldCheck, Cpu, Database, Server, Radio, Wrench, Microscope, Code2 } from 'lucide-react';

export default function BrandStatementSection() {
  const pillars = [
    {
      title: "Academic & Research Rigor",
      desc: "Rooted in premier academic leadership from IIT and IISc, we translate deep mathematical and computational research into dependable commercial systems.",
      icon: Microscope,
    },
    {
      title: "Sovereignty & Regulatory Compliance",
      desc: "From RBI IT-NBFC mandates to CERT-In 6-hour directives, our sovereign architectures protect client operations against legal and cyber exposure.",
      icon: ShieldCheck,
    },
    {
      title: "Heavy Industrial Execution",
      desc: "We don't stop at digital mocks. We engineer rugged IP66 physical microcontroller panels, automated pollution scrubbers, and high-voltage EV chargers.",
      icon: Wrench,
    },
    {
      title: "Carrier-Grade Global Alliances",
      desc: "Operating across India, South Korea, and Saudi Arabia, our telecom and enterprise networks support multi-national mission-critical operations.",
      icon: Radio,
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Editorial Brand Manifesto */}
        <div className="max-w-5xl">
          <Badge variant="primary" dot={true}>
            Enterprise Philosophy
          </Badge>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0E1116] tracking-tight leading-[1.2] font-display uppercase">
            We are not an IT outsourcing agency. <br />
            <span className="text-[#0B2046]">
              We are an enterprise technology, engineering, and R&amp;D partner
            </span>{' '}
            building the physical and digital nervous systems of modern industry.
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4B5563] text-base leading-relaxed">
            <p>
              Technoriya was founded with a singular conviction: enterprises facing unprecedented regulatory, connectivity, and supply chain shifts require more than generic consulting templates. They need multidisciplinary engineering teams capable of linking high-voltage electrical hardware directly with in-memory SAP databases and sovereign cyber defenses.
            </p>
            <p>
              With physical operations anchored in Navi Mumbai (India), Seongnam-si (South Korea), and Jubail (Saudi Arabia), we combine the computational rigor of premier research institutions with the execution speed of Tier-1 digital engineering.
            </p>
          </div>
        </div>

        {/* 4 Architectural Values Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="bg-white border border-[#DFDFD4] rounded-3xl p-6 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F5FD] text-[#0B2046] flex items-center justify-center mb-5 border border-[#BFDCF8]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0E1116] mb-2 font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#525866] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EFE8] flex items-center justify-between text-[11px] font-mono font-semibold text-[#8B92A2]">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-[#0B2046]">&bull;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
