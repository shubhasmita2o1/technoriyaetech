import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';

// Lazy-loaded routes for optimal Core Web Vitals and minimal initial JS bundle
const HomePage = lazy(() => import('./pages/HomePage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const CentersOfExcellencePage = lazy(() => import('./pages/CentersOfExcellencePage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Fallback Loading Skeleton - Clean, Light Theme
function RouteLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#F8FAFC]">
      <div className="w-10 h-10 border-2 border-[#E2E8F0] border-t-[#0B2046] rounded-full animate-spin mb-4" />
      <span className="text-xs font-mono uppercase tracking-widest text-[#525866]">
        Loading Enterprise Infrastructure...
      </span>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/centers-of-excellence" element={<CentersOfExcellencePage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
