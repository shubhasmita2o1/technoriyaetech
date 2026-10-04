import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Radio, 
  Activity, 
  Terminal, 
  Layers, 
  Zap, 
  Building2, 
  Microscope,
  Briefcase,
  Users,
  Award,
  Globe2,
  ExternalLink,
  PhoneCall
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { solutionsData } from '../../data/solutionsData';
import { coeLabs } from '../../data/coeData';
import { technologiesData } from '../../data/technologiesData';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'solutions' | 'technology' | 'coe' | 'company'
  const location = useLocation();

  // Scroll listener for sticky header background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Solutions', path: '/solutions', mega: 'solutions' },
    { name: 'Technology', path: '/technology', mega: 'technology' },
    { name: 'Centers of Excellence', path: '/centers-of-excellence', mega: 'coe' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Company', path: '/company', mega: 'company' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar - Light Theme Only */}
      <div className="hidden lg:block bg-[#F1F5F9] border-b border-[#E2E8F0] text-[11px] font-medium text-[#4A4E5A] py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              <strong>HQ:</strong> Navi Mumbai, India • South Korea • Saudi Arabia
            </span>
            <span className="text-[#94A3B8]">|</span>
            <span>Tel: +91 9892178457 / +82-31-8017-5751</span>
            <span className="text-[#94A3B8]">|</span>
            <span>info@technoriya.com</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="http://erp.technoriya.com/public/login.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0B2046] hover:text-[#2563EB] font-semibold transition"
            >
              <span>Enterprise ERP Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#94A3B8]">|</span>
            <span className="text-[#64748B]">Leadership from IIT &amp; IISc</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-subtle py-3.5' 
            : 'bg-[#F8FAFC] border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Technoriya eTechnologies - smart revolution" 
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#0F172A] font-display uppercase leading-tight group-hover:text-[#0B2046] transition-colors">
                  TECHNORIYA
                </span>
                <span className="text-[10px] tracking-wider text-[#6B7280] font-medium uppercase">
                  e Technologies Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.path);
                const hasMega = !!link.mega;

                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => hasMega && setActiveMegaMenu(link.mega)}
                    onMouseLeave={() => hasMega && setActiveMegaMenu(null)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                        isActive 
                          ? 'text-[#0B2046] bg-[#E2E8F0]' 
                          : 'text-[#2D3139] hover:text-[#0B2046] hover:bg-[#F1F5F9]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {hasMega && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === link.mega ? 'rotate-180 text-[#0B2046]' : 'text-[#888E9B]'}`} />
                      )}
                    </Link>

                    {/* Solutions Mega Menu */}
                    {link.mega === 'solutions' && activeMegaMenu === 'solutions' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[840px] animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-float grid grid-cols-3 gap-6">
                          <div className="col-span-2 grid grid-cols-2 gap-3">
                            {solutionsData.map(sol => (
                              <Link
                                key={sol.id}
                                to={`/solutions#${sol.id}`}
                                className="p-3 rounded-2xl hover:bg-[#F1F5F9] border border-transparent hover:border-[#E2E8F0] transition group"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[11px] font-mono text-[#0B2046] font-semibold">{sol.number}</span>
                                  <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{sol.title}</h4>
                                </div>
                                <p className="text-[11px] text-[#525866] line-clamp-2 leading-relaxed">
                                  {sol.shortDesc}
                                </p>
                              </Link>
                            ))}
                          </div>
                          
                          {/* Mega menu feature card */}
                          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 flex flex-col justify-between">
                            <div>
                              <Badge size="sm" variant="primary">Enterprise Suite</Badge>
                              <h5 className="mt-3 text-sm font-bold text-[#0F172A]">
                                SAP S/4HANA &amp; Sovereign Cyber Defense
                              </h5>
                              <p className="mt-2 text-xs text-[#525866] leading-relaxed">
                                Audited regulatory compliance for RBI, CERT-In, and SEBI coupled with in-memory ERP transformations.
                              </p>
                            </div>
                            <Button 
                              onClick={() => {
                                setActiveMegaMenu(null);
                                onOpenContact();
                              }} 
                              size="sm" 
                              variant="primary" 
                              className="mt-4 w-full"
                            >
                              TALK TO AN EXPERT
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Technology Mega Menu */}
                    {link.mega === 'technology' && activeMegaMenu === 'technology' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px] animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-float grid grid-cols-3 gap-3">
                          {technologiesData.map(tech => (
                            <Link
                              key={tech.id}
                              to={`/technology#${tech.id}`}
                              className="p-3 rounded-2xl hover:bg-[#F1F5F9] border border-transparent hover:border-[#E2E8F0] transition group"
                            >
                              <span className="text-[10px] text-[#2563EB] font-mono uppercase font-semibold">{tech.category}</span>
                              <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#0B2046] transition-colors mt-0.5">{tech.name}</h4>
                              <p className="text-[11px] text-[#525866] line-clamp-2 mt-1">
                                {tech.lead}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Centers of Excellence Mega Menu */}
                    {link.mega === 'coe' && activeMegaMenu === 'coe' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[780px] animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-float">
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2E8F0]">
                            <div>
                              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">8 Advanced Centers of Excellence</h4>
                              <p className="text-[11px] text-[#525866]">Where academic research and commercial engineering converge.</p>
                            </div>
                            <Link to="/centers-of-excellence" className="text-xs font-semibold text-[#0B2046] hover:underline">
                              View All Labs &rarr;
                            </Link>
                          </div>
                          <div className="grid grid-cols-4 gap-2.5">
                            {coeLabs.map(lab => (
                              <Link
                                key={lab.id}
                                to={`/centers-of-excellence#${lab.id}`}
                                className="p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition group"
                              >
                                <span className="text-[10px] font-mono text-[#0B2046] font-bold">{lab.code}</span>
                                <h5 className="text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mt-0.5">{lab.name}</h5>
                                <p className="text-[10px] text-[#525866] line-clamp-1 mt-0.5">{lab.tagline}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Company Dropdown */}
                    {link.mega === 'company' && activeMegaMenu === 'company' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-2 shadow-float space-y-1">
                          <Link to="/company" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition">
                            About Technoriya &amp; Story
                          </Link>
                          <Link to="/company#leadership" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition">
                            Leadership &amp; Advisory Team
                          </Link>
                          <Link to="/company#vision-mission" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition">
                            Vision &amp; Mission
                          </Link>
                          <Link to="/company#partners" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition">
                            Associates &amp; Partners
                          </Link>
                          <Link to="/company#certifications" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition">
                            Certifications &amp; Accreditations
                          </Link>
                          <Link to="/careers" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0B2046] hover:bg-[#F1F5F9] transition flex items-center justify-between">
                            <span>Careers at Technoriya</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button 
                onClick={onOpenContact} 
                variant="primary" 
                size="sm" 
                className="hidden sm:inline-flex"
              >
                TALK TO AN EXPERT
              </Button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-[#0F172A] hover:bg-[#E2E8F0] transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-6 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-3 pb-6 border-b border-[#E2E8F0]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-[#0F172A] hover:text-[#0B2046] py-1 transition flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#8A8F9E]">&rarr;</span>
                </Link>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <Button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }} 
                variant="primary" 
                size="md" 
                className="w-full justify-center"
              >
                TALK TO AN EXPERT
              </Button>

              <a
                href="http://erp.technoriya.com/public/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-semibold text-[#0B2046] py-2 border border-[#E2E8F0] rounded-full hover:bg-white transition"
              >
                Access ERP Client Portal &rarr;
              </a>

              <div className="text-xs text-[#525866] text-center pt-2">
                <p>Navi Mumbai • South Korea • Saudi Arabia</p>
                <p className="mt-1 font-semibold text-[#0F172A]">+91 9892178457 | info@technoriya.com</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
