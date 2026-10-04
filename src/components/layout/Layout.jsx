import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';
import ContactModal from '../common/ContactModal';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function Layout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSolution, setContactSolution] = useState('');
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Only init Lenis on non-reduced-motion devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openContact = (solutionId = '') => {
    setContactSolution(solutionId);
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#111215] relative">
      <Navbar onOpenContact={() => openContact()} />
      
      <main className="flex-grow">
        {/* Pass openContact to children if needed via clone or context, or export a custom event */}
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onOpenContact: openContact });
          }
          return child;
        })}
      </main>

      <Footer onOpenContact={() => openContact()} />

      {/* Global Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={closeContact} 
        defaultSolution={contactSolution} 
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href={companyData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Technoriya"
        className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-white text-emerald-600 border border-emerald-200 rounded-full shadow-elevated flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute -top-8 right-0 bg-[#0B2046] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-sm">
          Chat with an Expert
        </span>
        <MessageSquare className="w-5 h-5 fill-emerald-500 text-emerald-600" />
      </a>
    </div>
  );
}
