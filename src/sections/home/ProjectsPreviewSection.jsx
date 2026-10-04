import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { projectsData } from '../../data/projectsData';

export default function ProjectsPreviewSection() {
  // Curate top 3 flagship projects for a compact, high-impact 3-card grid
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Verified Execution"
          title="FEATURED CASE STUDIES."
          subtitle="Real-world engineering challenges solved across industrial automation, telecommunications, and sovereign regulatory compliance."
          align="between"
          action={
            <Button to="/projects" variant="secondary" size="md">
              VIEW ALL CASE STUDIES
            </Button>
          }
        />

        {/* Compact 3-Column Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Header Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E2E8F0]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#0B2046] text-white rounded-full text-[10px] font-mono font-bold shadow-sm">
                    CASE #{project.number}
                  </span>
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[#0F172A] rounded-full text-[10px] font-semibold border border-[#E2E8F0]">
                    {project.industry.split('&')[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-display uppercase tracking-tight leading-snug group-hover:text-[#0B2046] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#525866] leading-relaxed line-clamp-3">
                    {project.lead}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="mt-5 grid grid-cols-2 gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 text-center">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="block text-sm font-extrabold text-[#0B2046] font-mono">{m.value}</span>
                        <span className="text-[10px] text-[#6B7280] font-medium leading-tight block truncate">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Tech & Link */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
                    {project.technologies.slice(0, 2).map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-[#F1F5F9] text-[#4A4E5A] rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects#${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B2046] hover:text-[#2563EB] transition-colors flex-shrink-0"
                  >
                    <span>Read Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
