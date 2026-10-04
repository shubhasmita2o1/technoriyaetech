import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, Calendar, ArrowUpRight, BookOpen, Share2, ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { insightsData } from '../data/insightsData';

export default function InsightsPage({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticleId, setActiveArticleId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const article = insightsData.find(a => a.id === id);
      if (article) {
        setActiveArticleId(id);
      }
    }
  }, [location.hash]);

  const categories = ['All', 'Cybersecurity', 'SAP', '5G', 'AI', 'Emerging Technologies'];

  const filteredArticles = selectedCategory === 'All'
    ? insightsData
    : insightsData.filter(a => a.category === selectedCategory);

  const activeArticle = insightsData.find(a => a.id === activeArticleId);

  return (
    <>
      <SEO 
        title="Insights &amp; Technical Publications | Technoriya"
        description="Read technical whitepapers, regulatory blueprints, and architecture analyses on SAP S/4HANA, RBI compliance, Private 5G networks, and TinyML edge AI authored by Technoriya engineers."
        canonical="https://technoriya.com/insights"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Editorial Intelligence</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Engineering Insights &amp; <br />
            <span className="text-[#0B2046]">Regulatory Blueprints.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            Authoritative perspectives on enterprise software architecture, statutory cyber defense mandates, and hardware edge engineering from Technoriya's senior practitioners.
          </p>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveArticleId(null);
                }}
                className={`text-xs font-mono px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === cat && !activeArticleId
                    ? 'bg-[#0B2046] text-white border-[#0B2046]'
                    : 'bg-white text-[#525866] border-[#DFDFD4] hover:border-[#0B2046]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Active Article Full View Mode */}
          {activeArticle ? (
            <div className="max-w-4xl mx-auto bg-white border border-[#DFDFD4] rounded-[36px] p-8 sm:p-14 shadow-card">
              <button
                onClick={() => setActiveArticleId(null)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B2046] hover:text-[#2563EB] mb-8 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Publications</span>
              </button>

              <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-4">
                <Badge variant="primary" size="sm">{activeArticle.category}</Badge>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E1116] font-display uppercase tracking-tight leading-tight">
                {activeArticle.title}
              </h1>

              <div className="mt-4 pb-6 border-b border-[#F0EFE8] flex items-center justify-between text-xs text-[#525866]">
                <span>Authored by <strong>{activeArticle.author}</strong></span>
                <span>Technoriya Research Practice</span>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/9] bg-[#EBEBE2] mb-8">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Formatted Article Body */}
              <div className="prose prose-slate max-w-none text-[#374151] text-sm sm:text-base leading-relaxed space-y-6">
                {activeArticle.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.')) {
                    return (
                      <div key={pIdx} className="p-5 bg-[#FAF9F5] border border-[#EBEBE2] rounded-2xl">
                        <p className="font-bold text-[#0E1116] mb-1">{paragraph.split('\n')[0]}</p>
                        <p className="text-xs sm:text-sm text-[#525866]">{paragraph.split('\n').slice(1).join('\n')}</p>
                      </div>
                    );
                  }
                  return <p key={pIdx}>{paragraph}</p>;
                })}
              </div>

              {/* Article Footer CTA */}
              <div className="mt-12 pt-8 border-t border-[#F0EFE8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#525866]">
                  Need architectural advice related to this publication?
                </div>
                <Button onClick={() => onOpenContact()} variant="primary" size="md">
                  TALK TO AN EXPERT
                </Button>
              </div>
            </div>
          ) : (
            /* Articles Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  id={article.id}
                  onClick={() => setActiveArticleId(article.id)}
                  className="bg-white border border-[#DFDFD4] hover:border-[#0B2046] rounded-3xl p-6 sm:p-8 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#EBEBE2] mb-5">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#6B7280] mb-2.5">
                      <span className="font-semibold text-[#0B2046] uppercase font-mono">{article.category}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0E1116] group-hover:text-[#0B2046] transition-colors font-display uppercase tracking-tight line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#525866] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EFE8] flex items-center justify-between text-xs font-semibold text-[#8B92A2] group-hover:text-[#0B2046] transition-colors">
                    <span>Read Publication</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
