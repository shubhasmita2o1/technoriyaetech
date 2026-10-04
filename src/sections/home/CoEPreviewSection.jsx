import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Microscope, ShieldCheck, Cpu, Eye, Radio, Zap, Flame, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { coeLabs } from '../../data/coeData';

export default function CoEPreviewSection({ onOpenContact }) {
  const [selectedLabId, setSelectedLabId] = useState(coeLabs[0].id);

  const activeLab = coeLabs.find(lab => lab.id === selectedLabId) || coeLabs[0];

  return (
    <section className="py-20 md:py-32 bg-[#F1F5F9] border-y border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          eyebrow="R&amp;D Innovation Ecosystem"
          title="CENTERS OF EXCELLENCE."
          subtitle="Where academic research, silicon engineering, and commercial enterprise technologies converge into physical innovation."
          align="between"
          action={
            <Button to="/centers-of-excellence" variant="primary" size="md">
              EXPLORE ALL 8 LABS
            </Button>
          }
        />

        {/* 8 Labs Interactive Navigation Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mt-8">
          {coeLabs.map((lab) => {
            const isSelected = lab.id === selectedLabId;
            return (
              <button
                key={lab.id}
                onClick={() => setSelectedLabId(lab.id)}
                className={`p-3 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B2046] text-white border-[#0B2046] shadow-card -translate-y-1'
                    : 'bg-white hover:bg-[#F1F5F9] text-[#0F172A] border-[#E2E8F0]'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#BFDCF8]' : 'text-[#888E9B]'}`}>
                  {lab.code}
                </span>
                <span className="text-xs font-bold mt-2 font-display uppercase tracking-tight">
                  {lab.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Lab Showcase Stage */}
        <div className="mt-8 bg-white border border-[#E2E8F0] rounded-[36px] p-6 sm:p-10 md:p-12 shadow-float grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#E2E8F0] border border-[#E2E8F0]">
              <img
                src={activeLab.image}
                alt={activeLab.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-full font-bold uppercase tracking-wider">
                  {activeLab.code} Testbench
                </span>
                <h4 className="text-lg font-bold font-display mt-1">{activeLab.tagline}</h4>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="mt-4 grid grid-cols-3 gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 text-center">
              {Object.entries(activeLab.stats).map(([k, v]) => (
                <div key={k}>
                  <span className="block text-xs font-extrabold text-[#0B2046] font-mono">{v}</span>
                  <span className="text-[10px] text-[#525866] uppercase tracking-wider capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details & Research Scope (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="primary" size="sm">
                  {activeLab.code}
                </Badge>
                <span className="text-xs font-mono text-[#525866]">Commercial &amp; Academic Incubator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display uppercase tracking-tight">
                {activeLab.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#0B2046]">
                {activeLab.headline}
              </p>

              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">
                {activeLab.summary}
              </p>

              {/* Research Vectors */}
              <div className="mt-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] block mb-3">
                  Research Vectors &amp; Focus Areas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeLab.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1E222A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2046] flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Impact */}
              <div className="mt-6 p-4 bg-[#F1F5F9] border border-[#E2E8F0] rounded-2xl text-xs text-[#4A4E5A]">
                <strong className="text-[#0F172A] block mb-0.5">Real-World Enterprise Application:</strong>
                {activeLab.realWorldApplication}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
              <Button
                to={`/centers-of-excellence#${activeLab.id}`}
                variant="primary"
                size="md"
              >
                EXPLORE {activeLab.name.toUpperCase()}
              </Button>

              <Button
                onClick={onOpenContact}
                variant="secondary"
                size="md"
              >
                COLLABORATE WITH THIS LAB
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
