import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Globe2, ExternalLink } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { companyData } from '../data/companyData';
import { solutionsData } from '../data/solutionsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: 'India',
    solution: 'sap-erp',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <>
      <SEO 
        title="Contact Technoriya | Global Headquarters &amp; Regional Offices"
        description="Connect with Technoriya e Technologies: Headquarters in Navi Mumbai (India), East Asia Office in Pangyo (South Korea), and Middle East Office in Jubail (Saudi Arabia)."
        canonical="https://technoriya.com/contact"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4F4EE] border-b border-[#DFDFD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Direct Consultation</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            Talk to an Expert. <br />
            <span className="text-[#0B2046]">Connect with Our Global Engineering Hubs.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            Whether preparing for a statutory RBI/CERT-In cybersecurity audit, commissioning an SAP S/4HANA migration, or designing custom IoT hardware, our senior practice leads are at your disposal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[#525866]">
            <span className="font-semibold text-[#111215]">Global Presence:</span>
            {companyData.globalMarkets.map(market => (
              <span key={market} className="px-3 py-1 bg-white border border-[#DFDFD4] rounded-full font-medium">
                {market}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form + Global Office Cards */}
      <section className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#DFDFD4] rounded-[36px] p-8 sm:p-12 shadow-card">
              <div className="pb-6 mb-6 border-b border-[#F0EFE8]">
                <Badge variant="neutral" size="sm">Confidential Project Scoping</Badge>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0E1116] font-display uppercase tracking-tight">
                  Initiate Strategic Inquiry
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#525866]">
                  Your request is routed directly to the appropriate practice head in India, South Korea, or Saudi Arabia.
                </p>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#059669]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E1116] mb-2 font-display">Inquiry Transmitted</h3>
                  <p className="text-sm text-[#525866] mb-6 leading-relaxed">
                    Thank you, {formData.fullName}. A senior enterprise technology specialist will review your project brief and follow up within 24 business hours.
                  </p>
                  <Button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                        country: 'India',
                        solution: 'sap-erp',
                        message: '',
                      });
                    }}
                    variant="primary"
                    size="md"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Your Full Name"
                        className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#DFDFD4] rounded-xl text-sm text-[#111215] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="corporate@domain.com"
                        className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#DFDFD4] rounded-xl text-sm text-[#111215] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91..."
                        className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#DFDFD4] rounded-xl text-sm text-[#111215] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                        Organization / Department
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Entity or Enterprise Name"
                        className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#DFDFD4] rounded-xl text-sm text-[#111215] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                        Enterprise Focus Area
                      </label>
                      <select
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#DFDFD4] rounded-xl text-sm text-[#111215] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                      >
                        {solutionsData.map(sol => (
                          <option key={sol.id} value={sol.id}>
                            {sol.title}
                          </option>
                        ))}
                        <option value="coe-setup">Centers of Excellence (CoE Lab Prototyping)</option>
                        <option value="regulatory-audit">Regulatory Security Audit (RBI, CERT-In, SEBI)</option>
                        <option value="telecom-5g">Private 5G / Telecom Infrastructure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                        Operating Region
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#DFDFD4] rounded-xl text-sm text-[#111215] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                      >
                        <option value="India">India (Navi Mumbai HQ)</option>
                        <option value="South Korea">South Korea (Pangyo Office)</option>
                        <option value="Saudi Arabia">Saudi Arabia (Jubail Office)</option>
                        <option value="North America">North America (USA / Canada)</option>
                        <option value="Europe">Europe / United Kingdom</option>
                        <option value="Other">Other Global Region</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                      Scope Brief or Technical Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Detail current infrastructure constraints, target deadlines, or specific regulatory frameworks..."
                      className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-[#DFDFD4] rounded-xl text-sm text-[#111215] focus:outline-none focus:ring-2 focus:ring-[#0B2046] resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full justify-center"
                  >
                    {status === 'loading' ? 'Transmitting Request...' : 'SUBMIT ENTERPRISE INQUIRY'}
                  </Button>
                </form>
              )}
            </div>

            {/* Offices & Direct Touchpoints Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Contacts Banner */}
              <div className="bg-[#0B2046] text-white rounded-3xl p-6 sm:p-8 shadow-card">
                <span className="text-xs font-mono uppercase text-[#BFDCF8] font-bold block mb-1">
                  DIRECT ESCALATIONS
                </span>
                <h3 className="text-xl font-bold font-display uppercase tracking-tight">
                  Immediate Advisory Desk
                </h3>
                <p className="mt-2 text-xs text-white/80 leading-relaxed mb-6">
                  For active cybersecurity incidents, emergency SOC escalation, or RFP deadlines:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#BFDCF8]" />
                    <span>+91 98921 78457 / +91 84337 66802</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#BFDCF8]" />
                    <span>info@technoriya.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[#BFDCF8]" />
                    <a href={companyData.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                      WhatsApp: +91 7039904327
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Cards */}
              {companyData.offices.map((office) => (
                <div 
                  key={office.country}
                  className="bg-white border border-[#DFDFD4] rounded-3xl p-6 shadow-subtle hover:border-[#CBD5E1] transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B2046]">
                      {office.country}
                    </span>
                    <Badge variant="neutral" size="sm">{office.badge}</Badge>
                  </div>

                  <h4 className="text-base font-bold text-[#0E1116] font-display">{office.title}</h4>
                  <p className="mt-1 text-xs text-[#525866] leading-relaxed mb-4">
                    {office.address}
                  </p>

                  <div className="pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#374151]">
                    <span>Tel: {office.phone}</span>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0B2046] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
