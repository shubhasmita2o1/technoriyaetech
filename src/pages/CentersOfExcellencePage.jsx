import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Microscope, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Wrench, Flame, Zap } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { coeLabs } from '../data/coeData';

export default function CentersOfExcellencePage({ onOpenContact }) {
  const location = useLocation();
  const [activeLabId, setActiveLabId] = useState(coeLabs[0].id);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveLabId(id);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO 
        title="Centers of Excellence (CoE) | 8 Advanced Technology Labs | Technoriya"
        description="Technoriya's 8 Centers of Excellence: IoT Lab, Cybersecurity Lab, AI Lab, VLSI Lab, AR/VR Lab, AI Edge Lab, EV Lab, and H2 Solid Fuel Lab. Bridging academic university research and industrial execution."
        canonical="https://technoriya.com/centers-of-excellence"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>R&amp;D Proving Grounds</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Centers of Excellence <br />
            <span className="text-[#0B2046]">Where Research, Silicon &amp; Industry Converge.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            Our 8 specialized innovation laboratories are built to prototype, stress-test, and commercialize breakthrough deep-tech. Bridging premier academic institutions (IIT &amp; IISc) with sovereign global enterprises.
          </p>

          {/* Quick Lab Jump Ribbon */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#111215] mr-2">The 8 Labs:</span>
            {coeLabs.map(lab => (
              <a
                key={lab.id}
                href={`#${lab.id}`}
                onClick={() => setActiveLabId(lab.id)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all ${
                  activeLabId === lab.id
                    ? 'bg-[#0B2046] text-white border-[#0B2046]'
                    : 'bg-white text-[#525866] border-[#DFDFD4] hover:border-[#0B2046]'
                }`}
              >
                {lab.code}: {lab.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Labs Catalog */}
      <section className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {coeLabs.map((lab) => (
            <div 
              key={lab.id}
              id={lab.id}
              className="scroll-mt-28 bg-white border border-[#DFDFD4] rounded-[36px] p-8 sm:p-12 shadow-card"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#F0EFE8]">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#0B2046] text-white rounded-full">
                      {lab.code}
                    </span>
                    <span className="text-xs font-mono text-[#525866]">Research &amp; Prototyping Facility</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight">
                    {lab.name}
                  </h2>
                  <p className="mt-1 text-base font-semibold text-[#0B2046]">
                    {lab.headline}
                  </p>
                </div>

                <Button
                  onClick={() => onOpenContact(lab.id)}
                  variant="primary"
                  size="md"
                >
                  COLLABORATE WITH {lab.code}
                </Button>
              </div>

              {/* Lab Visual & Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/9] bg-[#EBEBE2] border border-[#E5E5DC]">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl">
                    <span className="text-[10px] font-mono uppercase text-[#0B2046] font-bold block mb-1">
                      Facility Tagline
                    </span>
                    <p className="text-xs font-semibold text-[#111215]">{lab.tagline}</p>
                  </div>

                  <div className="p-4 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl">
                    <span className="text-[10px] font-mono uppercase text-[#0B2046] font-bold block mb-1">
                      Real-World Enterprise Application
                    </span>
                    <p className="text-xs text-[#525866] leading-relaxed">{lab.realWorldApplication}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#F4F4EE] border border-[#DFDFD4] rounded-2xl text-center">
                    {Object.entries(lab.stats).map(([k, v]) => (
                      <div key={k}>
                        <span className="block text-xs font-mono font-extrabold text-[#0B2046]">{v}</span>
                        <span className="text-[10px] text-[#525866] capitalize line-clamp-1">{k.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Scope & Lab Equipment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#F0EFE8]">
                
                {/* Focus Areas */}
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] mb-3">
                    Core Focus Areas &amp; Engineering Vectors
                  </h3>
                  <div className="space-y-2">
                    {lab.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#1E222A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2046] flex-shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Tools */}
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] mb-3">
                    Laboratory Testing Hardware &amp; Instruments
                  </h3>
                  <div className="space-y-2">
                    {lab.equipmentAndTools.map((tool, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#1E222A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-1.5" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* University & Enterprise Incubation Banner */}
      <section className="py-20 bg-[#F4F4EE] border-t border-[#DFDFD4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" dot={true}>Turnkey Lab Installations</Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight">
            Commission a Turnkey CoE Lab at Your Institution
          </h2>
          <p className="mt-4 text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Technoriya designs, outfits, and licenses turnkey Centers of Excellence for leading engineering universities, defense research bodies, and corporate conglomerates worldwide.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button onClick={() => onOpenContact()} variant="primary" size="lg">
              INQUIRE ABOUT COE SETUP
            </Button>
            <Button to="/company" variant="secondary" size="lg">
              VIEW LEADERSHIP &amp; PEDIGREE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
