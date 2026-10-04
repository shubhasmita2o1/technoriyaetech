import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { insightsData } from '../../data/insightsData';

export default function InsightsPreviewSection() {
  const featuredArticle = insightsData.find(a => a.featured) || insightsData[0];
  const supportingArticles = insightsData.filter(a => a.id !== featuredArticle.id).slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-[#FAFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Editorial &amp; Research Publications"
          title="TECHNOLOGY INSIGHTS."
          subtitle="Tactical whitepapers, technical deep-dives, and statutory compliance blueprints authored by Technoriya practice leads."
          align="between"
          action={
            <Button to="/insights" variant="secondary" size="md">
              VIEW ALL PUBLICATIONS
            </Button>
          }
        />

        {/* Publication Layout: 1 Featured Big Article + 3 Supporting Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
          
          {/* Featured Article (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#DFDFD4] rounded-[32px] p-6 sm:p-10 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#EBEBE2] mb-6">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary" size="sm">Featured Blueprint</Badge>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-3">
                <span className="font-semibold text-[#0B2046] uppercase font-mono">{featuredArticle.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E1116] group-hover:text-[#0B2046] transition-colors font-display uppercase tracking-tight leading-tight">
                {featuredArticle.title}
              </h3>

              <p className="mt-3 text-sm text-[#4A4E5A] leading-relaxed line-clamp-3">
                {featuredArticle.summary}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F0EFE8] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#525866]">By {featuredArticle.author}</span>
              <Link
                to={`/insights#${featuredArticle.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2046] group-hover:text-[#2563EB] transition-colors"
              >
                <span>Read Full Analysis</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Supporting Articles List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {supportingArticles.map((article) => (
              <Link
                key={article.id}
                to={`/insights#${article.id}`}
                className="p-6 bg-white border border-[#DFDFD4] hover:border-[#0B2046] rounded-3xl shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group flex-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B7280] mb-2">
                    <span className="font-semibold text-[#0B2046] uppercase font-mono">{article.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0E1116] group-hover:text-[#0B2046] transition-colors font-display uppercase tracking-tight line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="mt-2 text-xs text-[#525866] line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-[11px] font-semibold text-[#8B92A2] group-hover:text-[#0B2046] transition-colors">
                  <span>Explore Topic</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
