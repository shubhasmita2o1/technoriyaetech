import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, CheckCircle2, Upload, Send, Sparkles } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { careersData } from '../data/careersData';

export default function CareersPage({ onOpenContact }) {
  const [selectedRole, setSelectedRole] = useState(careersData.openings[0].id);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleId: careersData.openings[0].id,
    portfolioLink: '',
    resumeName: '',
    coverNote: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formError, setFormError] = useState('');

  const activeOpening = careersData.openings.find(o => o.id === selectedRole) || careersData.openings[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData(prev => ({ ...prev, resumeName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    if (!applicationData.fullName.trim() || !applicationData.email.trim() || !applicationData.resumeName) {
      setFormStatus('error');
      setFormError('Please provide your name, email, and attach a resume file.');
      return;
    }

    setTimeout(() => {
      setFormStatus('success');
    }, 800);
  };

  return (
    <>
      <SEO 
        title="Careers at Technoriya | Build What's Next | Engineering &amp; R&amp;D"
        description="Join Technoriya e Technologies: Careers in SAP S/4HANA, Cybersecurity &amp; DFIR, Embedded IoT hardware, Private 5G, and deep-tech innovation."
        canonical="https://technoriya.com/careers"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F1F5F9] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" dot={true}>Talent &amp; Engineering Culture</Badge>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B0D11] tracking-tight uppercase font-display leading-[1.05]">
            BUILD WHAT'S NEXT. <br />
            <span className="text-[#0B2046]">Work on Deep-Tech Hardware &amp; Sovereign Software.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4A4E5A] leading-relaxed max-w-3xl font-normal">
            {careersData.subtitle}
          </p>

          {/* Core Perks Strip */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careersData.benefits.map((b, idx) => (
              <div key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-subtle">
                <span className="text-xs font-mono font-bold text-[#0B2046] block mb-2">BENEFIT 0{idx + 1}</span>
                <h3 className="text-base font-bold text-[#0F172A] font-display mb-1.5">{b.title}</h3>
                <p className="text-xs text-[#525866] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Active Requisitions"
            title="OPEN POSITIONS."
            subtitle="Explore current engineering and consulting openings across our hubs in India and international project alliances."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
            
            {/* Left Role Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {careersData.openings.map((opening) => {
                const isSelected = opening.id === selectedRole;
                return (
                  <div
                    key={opening.id}
                    onClick={() => {
                      setSelectedRole(opening.id);
                      setApplicationData(prev => ({ ...prev, roleId: opening.id }));
                    }}
                    className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 ${
                      isSelected
                        ? 'bg-white border-[#0B2046] shadow-card translate-x-1.5'
                        : 'bg-white/60 hover:bg-white border-[#E2E8F0]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#525866] mb-1">
                      <span>{opening.department}</span>
                      <span className="text-[#0B2046] font-semibold">{opening.experience}</span>
                    </div>

                    <h3 className={`text-base font-bold font-display uppercase tracking-tight ${
                      isSelected ? 'text-[#0B2046]' : 'text-[#0F172A]'
                    }`}>
                      {opening.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-3 text-xs text-[#6B7280]">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#2563EB]" /> {opening.location}</span>
                      <span>•</span>
                      <span>{opening.type}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Opening Deep Dive & Application Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-[32px] p-6 sm:p-10 shadow-card">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                  <Badge variant="primary" size="sm">{activeOpening.department}</Badge>
                  <span className="text-xs font-mono text-[#525866]">Req #{activeOpening.id}</span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display uppercase tracking-tight">
                  {activeOpening.title}
                </h2>
                <div className="mt-2 flex items-center gap-4 text-xs text-[#525866]">
                  <span><strong>Location:</strong> {activeOpening.location}</span>
                  <span>•</span>
                  <span><strong>Experience:</strong> {activeOpening.experience}</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {activeOpening.summary}
                </p>

                {/* Responsibilities */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] mb-2.5">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#2D3139]">
                    {activeOpening.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2046] flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#525866] mb-2.5">
                    Profile Prerequisites
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#2D3139]">
                    {activeOpening.requirements.map((req, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B2046] flex-shrink-0 mt-1.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In-Page Application Form */}
              <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0F172A] font-display uppercase tracking-tight mb-4">
                  Apply for this Position
                </h3>

                {formStatus === 'success' ? (
                  <div className="p-6 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl text-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-lg font-bold text-[#065F46] font-display">Application Received</h4>
                    <p className="text-xs text-[#047857] mt-1">
                      Thank you, {applicationData.fullName}. Our recruitment team will review your resume and contact you if your qualifications match.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1F2228] uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={applicationData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#1F2228] uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={applicationData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="name@domain.com"
                          className="w-full px-3.5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1F2228] uppercase mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={applicationData.phone}
                          onChange={handleInputChange}
                          placeholder="+91..."
                          className="w-full px-3.5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0B2046]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#1F2228] uppercase mb-1">
                          Attach Resume (PDF / DOCX) *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="career-resume"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                          <label
                            htmlFor="career-resume"
                            className="w-full px-3.5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#525866] flex items-center justify-between cursor-pointer hover:bg-white transition"
                          >
                            <span className="truncate">{applicationData.resumeName || "Choose file..."}</span>
                            <Upload className="w-3.5 h-3.5 text-[#0B2046]" />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#1F2228] uppercase mb-1">
                        Brief Cover Statement / Relevant Projects
                      </label>
                      <textarea
                        name="coverNote"
                        rows="2"
                        value={applicationData.coverNote}
                        onChange={handleInputChange}
                        placeholder="Briefly state your core technical achievements or links to published repositories..."
                        className="w-full px-3.5 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0B2046] resize-none"
                      />
                    </div>

                    {formStatus === 'error' && (
                      <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                        {formError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={formStatus === 'submitting'}
                      className="w-full justify-center"
                    >
                      {formStatus === 'submitting' ? 'Submitting Application...' : 'SUBMIT APPLICATION'}
                    </Button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
