import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Filter } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage({ onOpenContact }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Industrial IoT & Automation', value: 'Environmental & Heavy Manufacturing' },
    { label: 'Energy & Utilities', value: 'Energy, Power & Clean Mobility' },
    { label: 'Telecommunications', value: 'Telecommunications & Port Logistics' },
    { label: 'BFSI & Compliance', value: 'Banking, Financial Services & FinTech' },
    { label: 'SAP & Logistics', value: 'Supply Chain, Pharmaceuticals & Logistics' }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.industry.includes(filter) || filter.includes(p.industry));

  return (
    <>
      <SEO 
        title="Case Studies &amp; Verified Projects | Technoriya"
        description="Explore verified real-world engineering case studies: Automated industrial pollution control systems, LoRaWAN smart utility grids, Private 5G telecom architectures, EV307 chargers, and RBI IT-NBFC compliance audits."
        canonical="https://technoriya.com/projects"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F1F5F9] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Proven Engineering Execution</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Featured Projects &amp; <br />
            <span className="text-[#0B2046]">Case Studies.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            Real enterprise challenges solved through rigorous engineering. Review our documented challenges, solutions, architectures, and quantitative outcomes.
          </p>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#0F172A] mr-2">Filter:</span>
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all ${
                  filter === cat.value
                    ? 'bg-[#0B2046] text-white border-[#0B2046]'
                    : 'bg-white text-[#525866] border-[#E2E8F0] hover:border-[#0B2046]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={project.id}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-[#E2E8F0] rounded-[36px] p-6 sm:p-10 shadow-card"
            >
              {/* Visual & Metrics (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] bg-[#E2E8F0] border border-[#E2E8F0]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-mono font-bold text-[#0B2046]">
                      CASE #{project.number}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-3 text-center">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="block text-xs sm:text-sm font-extrabold text-[#0B2046] font-mono">{m.value}</span>
                      <span className="text-[10px] text-[#525866] line-clamp-1">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="primary" size="sm">{project.industry}</Badge>
                    <span className="text-xs font-mono text-[#525866]">Production Deployed</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display uppercase tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-[#0B2046]">
                    {project.lead}
                  </p>

                  {/* Challenge & Solution Blocks */}
                  <div className="mt-5 space-y-3 text-xs leading-relaxed">
                    <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl">
                      <strong className="text-[#0F172A] block uppercase tracking-wider text-[10px] font-mono mb-1">
                        Operational Challenge:
                      </strong>
                      <p className="text-[#525866]">{project.challenge}</p>
                    </div>

                    <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl">
                      <strong className="text-[#0F172A] block uppercase tracking-wider text-[10px] font-mono mb-1">
                        Engineering Solution:
                      </strong>
                      <p className="text-[#525866]">{project.solution}</p>
                    </div>

                    <div className="p-4 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl">
                      <strong className="text-[#065F46] block uppercase tracking-wider text-[10px] font-mono mb-1">
                        Verified Business Outcome:
                      </strong>
                      <p className="text-[#047857] font-medium">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[11px] font-mono px-2.5 py-1 bg-[#F1F5F9] text-[#4A4E5A] rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => onOpenContact(project.id)}
                    variant="primary"
                    size="sm"
                  >
                    REQUEST ARCHITECTURE BRIEF
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
