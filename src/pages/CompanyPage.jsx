import React from 'react';
import { ShieldCheck, Award, MapPin, Phone, Mail, CheckCircle2, ArrowUpRight, Target, Compass, Users } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { companyData } from '../data/companyData';
import { partnersData } from '../data/partnersData';

export default function CompanyPage({ onOpenContact }) {
  const certifications = [
    {
      title: "CERT-In Cyber Security Directive Compliance",
      authority: "Indian Computer Emergency Response Team (CERT-In)",
      scope: "Mandatory 180-day log preservation, 6-hour incident reporting window, and SOC asset ingestion."
    },
    {
      title: "RBI IT-NBFC Master Direction Framework",
      authority: "Reserve Bank of India (RBI)",
      scope: "Information Security Steering Committee (ISSC), IT Strategy Committee (ITSC), and IS Audit standards."
    },
    {
      title: "SEBI Cyber Security & Resilience Framework",
      authority: "Securities and Exchange Board of India (SEBI)",
      scope: "Comprehensive security audit and penetration testing for market infrastructure institutions and stockbrokers."
    },
    {
      title: "STQC Cyber Security Audit Readiness",
      authority: "Standardisation Testing and Quality Certification (MeitY)",
      scope: "Public sector and e-governance application security compliance and vulnerability assessment."
    },
    {
      title: "NPCI UPI & Payment Switch Security",
      authority: "National Payments Corporation of India (NPCI)",
      scope: "Transaction encryption, HSM key lifecycle management, and payment gateway compliance."
    },
    {
      title: "ISO/IEC 27001 & ISO/IEC 27037 Forensic Chain",
      authority: "International Organization for Standardization",
      scope: "Information Security Management System (ISMS) and digital evidence handling preservation."
    }
  ];

  return (
    <>
      <SEO 
        title="About Technoriya | Leadership, IIT &amp; IISc Pedigree, Global Hubs"
        description="Learn about Technoriya e Technologies Pvt Ltd: Leadership from IIT, IISc, and global telecom pioneers. Global presence in India (HQ), South Korea, and Saudi Arabia."
        canonical="https://technoriya.com/company"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Corporate Profile &amp; Governance</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Engineering Excellence. <br />
            <span className="text-[#0B2046]">Rooted in Academic Rigor and Global Delivery.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            {companyData.description}
          </p>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {companyData.highlights.map((h, idx) => (
              <div key={idx} className="bg-white border border-[#DFDFD4] rounded-2xl p-4 shadow-subtle">
                <span className="text-xs text-[#525866] font-medium block">{h.label}</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#0B2046] font-display mt-0.5 block">{h.value}</span>
                <span className="text-[11px] text-[#6B7280] block mt-0.5">{h.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Deep-Dive */}
      <section id="vision-mission" className="py-20 md:py-28 bg-[#FAFAF7] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#DFDFD4] rounded-[32px] p-8 sm:p-12 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F5FD] text-[#0B2046] flex items-center justify-center border border-[#BFDCF8]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#525866] uppercase">Foundational Purpose</span>
                    <h3 className="text-xl font-extrabold text-[#0E1116] font-display uppercase">OUR MISSION</h3>
                  </div>
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-[#0B2046] font-display uppercase tracking-tight leading-snug">
                  "{companyData.mission}"
                </blockquote>
              </div>
              <p className="mt-6 pt-6 border-t border-[#F0EFE8] text-xs text-[#525866]">
                Ensuring that smart grid utilities, telecom infrastructure, and industrial factories gain affordable, sovereign, and secure access to world-class software and automation.
              </p>
            </div>

            <div className="bg-white border border-[#DFDFD4] rounded-[32px] p-8 sm:p-12 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center border border-[#FDE68A]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#525866] uppercase">Long-Term Trajectory</span>
                    <h3 className="text-xl font-extrabold text-[#0E1116] font-display uppercase">OUR VISION</h3>
                  </div>
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-[#0E1116] font-display uppercase tracking-tight leading-snug">
                  "{companyData.vision}"
                </blockquote>
              </div>
              <p className="mt-6 pt-6 border-t border-[#F0EFE8] text-xs text-[#525866]">
                Accelerating the symbiotic relationship between real-time data digitization and heavy industrial automation to build smarter, safer commercial enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Team */}
      <section id="leadership" className="py-20 md:py-32 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership &amp; Technical Council"
            title="MANAGEMENT &amp; ADVISORS."
            subtitle="Distinguished leaders from premier institutions (IIT, IISc) and international enterprise technology groups guiding Technoriya's innovation."
            align="between"
            action={
              <Button onClick={() => onOpenContact()} variant="primary" size="md">
                SCHEDULE ADVISORY CALL
              </Button>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {companyData.leadership.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#DFDFD4] rounded-3xl p-6 sm:p-8 shadow-subtle hover:shadow-card transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EFE8]">
                    <span className="text-xs font-mono font-bold text-[#0B2046]">COUNCIL 0{idx + 1}</span>
                    <Badge variant="neutral" size="sm">{leader.role}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[#0E1116] font-display">
                    {leader.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#0B2046] block mt-0.5">
                    {leader.qualifications}
                  </span>

                  <p className="mt-4 text-xs sm:text-sm text-[#525866] leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section id="offices" className="py-20 md:py-32 bg-[#FAFAF7] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Global Footprint"
            title="THREE CONTINENTAL HUBS."
            subtitle="Physically deployed where enterprise innovation, telecommunications manufacturing, and industrial transformation happen."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {companyData.offices.map((office) => (
              <div 
                key={office.country}
                className="bg-white border border-[#DFDFD4] rounded-3xl p-8 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-extrabold uppercase tracking-wider text-[#0B2046]">
                      {office.country}
                    </span>
                    <Badge variant="primary" size="sm">{office.badge}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[#0E1116] font-display mb-2">{office.title}</h3>
                  <p className="text-xs sm:text-sm text-[#525866] leading-relaxed mb-6">
                    {office.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EFE8] space-y-2 text-xs text-[#374151]">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#0B2046]" />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0B2046]" />
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Statutory Audits */}
      <section id="certifications" className="py-20 md:py-32 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Statutory Governance"
            title="CERTIFICATIONS &amp; AUDITS."
            subtitle="Verified alignment with sovereign regulatory standards across banking, capital markets, and national e-governance."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert, cIdx) => (
              <div 
                key={cIdx}
                className="bg-white border border-[#DFDFD4] rounded-2xl p-6 shadow-subtle hover:border-[#0B2046] transition"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#0B2046]" />
                  <span className="text-[10px] font-mono uppercase text-[#0B2046] font-bold">Standard 0{cIdx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-[#0E1116] font-display mb-1">
                  {cert.title}
                </h3>
                <span className="text-xs font-semibold text-[#525866] block mb-3">
                  Authority: {cert.authority}
                </span>
                <p className="text-xs text-[#525866] leading-relaxed pt-3 border-t border-[#F0EFE8]">
                  {cert.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Associates Catalog */}
      <section id="partners" className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Strategic Alliances"
            title="PARTNERS &amp; ASSOCIATES."
            subtitle="Collaborative engagements with global advisory leaders, telecom operators, and national public infrastructure consortia."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {partnersData.map((partner, pIdx) => (
              <div 
                key={pIdx}
                className="bg-white border border-[#DFDFD4] rounded-2xl p-6 shadow-subtle hover:shadow-card transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-[#0B2046] font-bold">{partner.category}</span>
                    <span className="text-xs text-[#8A8F9E]">&bull;</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0E1116] font-display">
                    {partner.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#2563EB] block mt-0.5">
                    {partner.role}
                  </span>
                  <p className="mt-3 text-xs text-[#525866] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
