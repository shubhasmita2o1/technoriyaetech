import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function NotFoundPage() {
  return (
    <>
      <SEO 
        title="404 Page Not Found | Technoriya"
        description="The requested enterprise page or documentation could not be located."
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-xl mx-auto text-center">
          <Badge variant="primary" size="sm">404 Exception</Badge>
          
          <h1 className="mt-6 text-6xl sm:text-7xl font-extrabold text-[#0B2046] font-mono tracking-tight">
            404
          </h1>
          
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#0F172A] font-display uppercase tracking-tight">
            Page Not Found
          </h2>

          <p className="mt-4 text-sm text-[#525866] leading-relaxed">
            The page or resource you are attempting to access does not exist or may have been consolidated into our modern enterprise architecture.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md">
              RETURN TO HOMEPAGE
            </Button>
            <Button to="/solutions" variant="secondary" size="md">
              EXPLORE SOLUTIONS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
