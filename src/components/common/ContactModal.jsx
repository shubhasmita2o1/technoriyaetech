import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, Building2, MapPin } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';
import { solutionsData } from '../../data/solutionsData';

export default function ContactModal({ isOpen, onClose, defaultSolution = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    solution: defaultSolution || 'sap-erp',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultSolution) {
      setFormData(prev => ({ ...prev, solution: defaultSolution }));
    }
  }, [defaultSolution]);

  // Trap escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Form validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      solution: 'sap-erp',
      message: '',
    });
    setStatus('idle');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative w-full max-w-3xl bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl shadow-float overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E2E8F0] bg-white">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <div>
              <h3 id="contact-modal-title" className="text-lg font-bold text-[#0F172A] tracking-tight">
                TALK TO AN EXPERT
              </h3>
              <p className="text-xs text-[#525866]">
                Technoriya Enterprise Technology &amp; Advisory Group
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#525866] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {status === 'success' ? (
            <div className="py-12 text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#059669]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#0F172A] mb-2 font-display">Inquiry Transmitted Successfully</h4>
              <p className="text-sm text-[#525866] mb-6 leading-relaxed">
                Thank you, {formData.fullName}. A senior enterprise technology specialist from our Navi Mumbai headquarters or international desk will review your requirements and respond within 24 business hours.
              </p>
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 text-left text-xs text-[#525866] space-y-1.5 mb-6">
                <p><strong className="text-[#0F172A]">Selected Focus:</strong> {solutionsData.find(s => s.id === formData.solution)?.title || formData.solution}</p>
                <p><strong className="text-[#0F172A]">Contact Email:</strong> {formData.email}</p>
                <p><strong className="text-[#0F172A]">Direct Escalations:</strong> info@technoriya.com | +91 9892178457</p>
              </div>
              <Button onClick={resetForm} variant="primary" size="md">
                Done &amp; Return to Website
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-fullName" className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0B2046] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0B2046] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98921 78457"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0B2046] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="modal-company" className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    id="modal-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or Government Dept."
                    className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0B2046] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-solution" className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                  Area of Strategic Interest
                </label>
                <select
                  id="modal-solution"
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0B2046] focus:border-transparent transition"
                >
                  {solutionsData.map(sol => (
                    <option key={sol.id} value={sol.id}>
                      {sol.title} ({sol.tags.slice(0, 2).join(', ')})
                    </option>
                  ))}
                  <option value="coe-labs">Centers of Excellence (CoE 8 Labs Collaboration)</option>
                  <option value="regulatory-compliance">Regulatory Audit (RBI IT-NBFC, CERT-In, SEBI)</option>
                  <option value="other-consulting">Strategic Telecom / General Enterprise Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-semibold text-[#1F2228] uppercase tracking-wider mb-1.5">
                  Project Brief or Core Technical Objective <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Outline your timeline, current architecture challenges, or specific regulatory milestones..."
                  className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0B2046] focus:border-transparent transition resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                  {errorMessage}
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2E8F0]">
                <div className="flex items-center gap-4 text-xs text-[#525866]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" /> Navi Mumbai • Pangyo • Jubail
                  </span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 text-sm font-medium text-[#525866] hover:text-[#0F172A] rounded-full transition"
                  >
                    Cancel
                  </button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Transmitting...' : 'TALK TO AN EXPERT'}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
