import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ExternalLink, 
  ArrowUpRight,
  Shield,
  Layers,
  Building2,
  Globe2
} from 'lucide-react';
import { companyData } from '../../data/companyData';
import { solutionsData } from '../../data/solutionsData';
import { coeLabs } from '../../data/coeData';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#F1F5F9] border-t border-[#E2E8F0] text-[#0F172A] pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand Statement & Global Offices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E2E8F0]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3.5 mb-6 group">
              <img 
                src="/logo.png" 
                alt="Technoriya eTechnologies - smart revolution" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#0F172A] font-display uppercase leading-tight group-hover:text-[#0B2046] transition-colors">
                  TECHNORIYA
                </span>
                <span className="block text-[10px] tracking-wider text-[#6B7280] font-medium uppercase">
                  e Technologies Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
              {companyData.mission}
            </p>

            <div className="p-4 bg-white border border-[#E2E8F0] rounded-2xl mb-6 shadow-subtle">
              <span className="text-[11px] font-mono uppercase text-[#0B2046] font-bold block mb-1">Elite Engineering Heritage</span>
              <p className="text-xs text-[#525866]">
                Advisory and research leadership drawing from <strong>IIT, IISc</strong>, alongside global telecommunications and enterprise technology executives.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full hover:bg-emerald-100 transition"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>WhatsApp: +91 7039904327</span>
              </a>
              <a
                href={companyData.contact.erpPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-white text-[#0B2046] border border-[#E2E8F0] rounded-full hover:bg-[#F1F5F9] transition"
              >
                <span>ERP Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Global Locations Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyData.offices.map((office) => (
              <div 
                key={office.country}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-subtle hover:border-[#CBD5E1] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B2046]">
                      {office.country}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#E2E8F0] text-[#4A4E5A] rounded-full">
                      {office.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] mb-2">{office.title}</h4>
                  <p className="text-xs text-[#525866] leading-relaxed mb-4">
                    {office.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] text-xs space-y-1 text-[#4A4E5A]">
                  <p><strong>Tel:</strong> {office.phone}</p>
                  <p><strong>Email:</strong> {office.email}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Middle Tier: Link Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-[#E2E8F0]">
          
          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4 font-mono">
              Enterprise Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#525866]">
              {solutionsData.slice(0, 7).map(sol => (
                <li key={sol.id}>
                  <Link to={`/solutions#${sol.id}`} className="hover:text-[#0B2046] transition hover:underline">
                    {sol.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/solutions" className="font-semibold text-[#0B2046] hover:underline">
                  All Solutions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Centers of Excellence Column */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4 font-mono">
              Centers of Excellence
            </h4>
            <ul className="space-y-2.5 text-xs text-[#525866]">
              {coeLabs.map(lab => (
                <li key={lab.id}>
                  <Link to={`/centers-of-excellence#${lab.id}`} className="hover:text-[#0B2046] transition hover:underline flex items-center justify-between">
                    <span>{lab.name}</span>
                    <span className="text-[10px] font-mono text-[#8B92A2]">{lab.code}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Column */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4 font-mono">
              Emerging Technologies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#525866]">
              <li><Link to="/technology#ai" className="hover:text-[#0B2046] transition hover:underline">Clinical Artificial Intelligence</Link></li>
              <li><Link to="/technology#ai-edge" className="hover:text-[#0B2046] transition hover:underline">On-Device AI Edge Computing</Link></li>
              <li><Link to="/technology#iot" className="hover:text-[#0B2046] transition hover:underline">LoRaWAN &amp; NB-IoT Telematics</Link></li>
              <li><Link to="/technology#industrial-iot" className="hover:text-[#0B2046] transition hover:underline">Pollution Control Automation</Link></li>
              <li><Link to="/technology#telecom-5g" className="hover:text-[#0B2046] transition hover:underline">Private 5G Standalone (SA)</Link></li>
              <li><Link to="/technology#ev" className="hover:text-[#0B2046] transition hover:underline">EV307 Fast-Charging Systems</Link></li>
              <li><Link to="/technology#h2" className="hover:text-[#0B2046] transition hover:underline">Solid Hydride Hydrogen R&amp;D</Link></li>
              <li><Link to="/technology#vlsi" className="hover:text-[#0B2046] transition hover:underline">VLSI &amp; ASIC Silicon Design</Link></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4 font-mono">
              Industries Served
            </h4>
            <ul className="space-y-2.5 text-xs text-[#525866]">
              <li><Link to="/industries#bfsi" className="hover:text-[#0B2046] transition hover:underline">BFSI &amp; Sovereign Banking</Link></li>
              <li><Link to="/industries#healthcare" className="hover:text-[#0B2046] transition hover:underline">Healthcare &amp; Life Sciences</Link></li>
              <li><Link to="/industries#manufacturing" className="hover:text-[#0B2046] transition hover:underline">Heavy Manufacturing &amp; Scrubber Auto</Link></li>
              <li><Link to="/industries#telecom" className="hover:text-[#0B2046] transition hover:underline">Telecommunications &amp; Carriers</Link></li>
              <li><Link to="/industries#government" className="hover:text-[#0B2046] transition hover:underline">Government &amp; Sovereign Cloud</Link></li>
              <li><Link to="/industries#energy-utilities" className="hover:text-[#0B2046] transition hover:underline">Energy, Power &amp; Smart Grid</Link></li>
              <li><Link to="/industries#education-research" className="hover:text-[#0B2046] transition hover:underline">Universities &amp; Defense Labs</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4 font-mono">
              Company &amp; Culture
            </h4>
            <ul className="space-y-2.5 text-xs text-[#525866]">
              <li><Link to="/company" className="hover:text-[#0B2046] transition hover:underline">About Technoriya</Link></li>
              <li><Link to="/company#leadership" className="hover:text-[#0B2046] transition hover:underline">Leadership &amp; Advisors</Link></li>
              <li><Link to="/company#vision-mission" className="hover:text-[#0B2046] transition hover:underline">Vision &amp; Mission</Link></li>
              <li><Link to="/company#partners" className="hover:text-[#0B2046] transition hover:underline">Partners &amp; Associates</Link></li>
              <li><Link to="/company#certifications" className="hover:text-[#0B2046] transition hover:underline">Certifications &amp; Audits</Link></li>
              <li><Link to="/projects" className="hover:text-[#0B2046] transition hover:underline">Case Studies</Link></li>
              <li><Link to="/insights" className="hover:text-[#0B2046] transition hover:underline">Editorial Insights</Link></li>
              <li>
                <Link to="/careers" className="font-bold text-[#0B2046] hover:underline flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded-full font-mono">Hiring</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier: Global Markets, Socials & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6B7280]">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} Technoriya e Technologies Pvt. Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-[#CBD5E1]">•</span>
            <span>CIN &amp; Incorporation Registered in India</span>
            <span className="hidden sm:inline text-[#CBD5E1]">•</span>
            <span>Global Presence: India, South Korea, Saudi Arabia, USA, Canada, UK</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/technoriya-etechnologies-pvt-ltm-smart-revolution/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B2046] transition">LinkedIn</a>
            <a href="https://twitter.com/technoriya_etpl" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B2046] transition">Twitter / X</a>
            <a href="https://www.facebook.com/profile.php?id=100092559212790" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B2046] transition">Facebook</a>
            <a href="https://www.instagram.com/technoriya_com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B2046] transition">Instagram</a>
            <a href="https://www.youtube.com/watch?v=Ixb-zTkvk4g" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B2046] transition">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
