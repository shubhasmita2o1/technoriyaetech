import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Microscope, Code2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export default function WhatWeDoSection({ onOpenContact }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      number: "01",
      title: "ENTERPRISE TECHNOLOGY",
      shortSummary: "Core Digital Backbones, Sovereign Cloud & Defense-Grade Cybersecurity",
      description: "We modernize mission-critical operations through end-to-end SAP S/4HANA implementations, sovereign BFSI & Government Community Clouds, 24x7 SOC incident response, and strict compliance with RBI IT-NBFC and CERT-In national directives.",
      services: [
        "SAP S/4HANA & EWM Logistics Modernization",
        "Digital Forensics & Incident Response (DFIRaaS)",
        "RBI, SEBI & CERT-In Statutory Security Audits",
        "Sovereign Multi-Tenant Community Clouds",
        "vCISO & vDPO Executive Governance"
      ],
      technologies: ["SAP S/4HANA", "SAP EWM", "SIEM/SOAR", "BFSI Cloud", "DFIR", "STQC"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      link: "/solutions"
    },
    {
      number: "02",
      title: "EMERGING TECHNOLOGY",
      shortSummary: "Private 5G, Industrial IoT, On-Device TinyML & Clean Energy",
      description: "Translating deep physics and electrical hardware into connected industrial realities. We engineer carrier-grade Private 5G campus networks, automated pollution control scrubbers, LoRaWAN smart meter grids, and the EV307 high-voltage charging ecosystem.",
      services: [
        "Private 5G Standalone (SA) Campus Networks",
        "Pollution Control System Automation",
        "EV307 Series Fast Chargers & Induction Motors",
        "LoRaWAN & NB-IoT Long-Range Telematics",
        "Solid Hydride Hydrogen Power R&D"
      ],
      technologies: ["Private 5G", "LoRaWAN", "EV307 Ultra-Fast", "TinyML", "CPCB Gateway", "Solid H2"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      link: "/technology"
    },
    {
      number: "03",
      title: "CENTERS OF EXCELLENCE",
      shortSummary: "8 High-Impact Advanced Research & Commercial Incubation Labs",
      description: "Our dedicated proving grounds unite university academic research with commercial engineering. Covering IoT, Cybersecurity, Clinical AI, VLSI semiconductor design, AR/VR spatial twins, AI Edge computing, EV hardware, and H2 Solid Fuel cells.",
      services: [
        "Full Hardware & Silicon Testbench Access",
        "Turnkey Corporate & University CoE Labs",
        "Clinical Diagnostic AI & Surgical Vision Models",
        "FPGA Semiconductor Prototyping & Verification",
        "Dedicated Enterprise IoT & Cyber Skill Centers"
      ],
      technologies: ["8 Labs", "FPGA Silicon", "DICOM Vision", "6-DoF AR/VR", "Sieverts Hydride"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
      link: "/centers-of-excellence"
    },
    {
      number: "04",
      title: "SOFTWARE & ERP",
      shortSummary: "Bespoke Enterprise Software, Custom ERP Modules & Workflow Automation",
      description: "When commercial off-the-shelf software is too rigid or expensive, we engineer custom modular ERP engines and cross-platform enterprise applications tailored to exact multi-entity corporate processes and legacy databases.",
      services: [
        "Custom Modular ERP for Manufacturing & Trade",
        "Finance, HRMS, Procurement & Inventory Engines",
        "Zero-Code Business Workflow Approval Automation",
        "Legacy Database & Mainframe Modernization",
        "Enterprise Concurrency Web & Mobile Portals"
      ],
      technologies: ["Custom ERP", "Workflow Engine", "REST/GraphQL", "PostgreSQL", "Offline-Sync"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "/solutions#software-erp-development"
    }
  ];

  const current = pillars[activePillar];

  return (
    <section className="py-20 md:py-32 bg-[#F4F4EE] border-y border-[#DFDFD4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Four Strategic Pillars"
          title="WHAT WE DO."
          subtitle="An interactive ecosystem spanning mission-critical enterprise platforms, physical industrial hardware, cutting-edge research labs, and tailored software."
          align="between"
          action={
            <Button onClick={onOpenContact} variant="primary" size="md">
              TALK TO AN EXPERT
            </Button>
          }
        />

        {/* Interactive Composition Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Pillar Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {pillars.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <div
                  key={pillar.number}
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 border text-left ${
                    isSelected
                      ? 'bg-white border-[#0B2046] shadow-elevated translate-x-2'
                      : 'bg-white/60 hover:bg-white border-[#DFDFD4] hover:border-[#CBD5E1]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      isSelected ? 'bg-[#0B2046] text-white' : 'bg-[#EAEAE2] text-[#525866]'
                    }`}>
                      {pillar.number}
                    </span>
                    <span className={`text-xs font-semibold ${isSelected ? 'text-[#0B2046]' : 'text-[#8B92A2]'}`}>
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className={`mt-3 text-lg sm:text-xl font-bold font-display uppercase tracking-tight transition-colors ${
                    isSelected ? 'text-[#0B2046]' : 'text-[#0E1116]'
                  }`}>
                    {pillar.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-[#525866] line-clamp-2 leading-relaxed">
                    {pillar.shortSummary}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#0B2046] opacity-0 group-hover:opacity-100 transition-opacity">
                    {isSelected && <span>Explore Scope &rarr;</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Content & Image Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#DFDFD4] rounded-[32px] p-6 sm:p-8 md:p-10 shadow-float flex flex-col justify-between">
            
            {/* Top row */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E5DC]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono font-extrabold text-[#0B2046]">
                    {current.number}
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#525866] font-mono">CORE CAPABILITY</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E1116] font-display uppercase">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <Link
                  to={current.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2046] hover:text-[#2563EB] transition px-4 py-2 bg-[#F4F4EE] hover:bg-[#EAEAE2] rounded-full"
                >
                  <span>Explore Dedicated Page</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-[#374151] leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Verified Services List */}
              <div className="mt-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] block mb-3">
                  Key Deliverables &amp; Verified Focus
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.services.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#1E222A]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B2046] flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Image preview & tech tags */}
            <div className="mt-8 pt-6 border-t border-[#E5E5DC] flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#0E1116] mr-1">Stack:</span>
                {current.technologies.map(tag => (
                  <span 
                    key={tag}
                    className="text-xs font-mono px-3 py-1 bg-[#F4F4EE] text-[#0B2046] border border-[#DFDFD4] rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Button 
                to={current.link}
                variant="primary" 
                size="md"
                className="w-full sm:w-auto"
              >
                EXPLORE {current.title}
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
