import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "Technoriya | Enterprise Technology, SAP, Cybersecurity & Emerging Tech",
  description = "Technoriya e Technologies Pvt Ltd is a premier enterprise technology solutions partner specializing in SAP S/4HANA, Cybersecurity & DFIR, Cloud Infrastructure, Private 5G, Industrial IoT, and Emerging Technology Centers of Excellence.",
  canonical = "https://technoriya.com",
  ogType = "website",
  ogImage = "https://technoriya.com/og-image.jpg",
  schema = null,
}) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Technoriya e Technologies Pvt Ltd",
    "url": "https://technoriya.com",
    "logo": "https://technoriya.com/logo.png",
    "description": description,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9892178457",
        "contactType": "Headquarters Customer Service",
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+82-31-8017-5751",
        "contactType": "East Asia Technology Center",
        "areaServed": "KR"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "219, NBC Complex, Opp. ICICI Bank, Sector 11, CBD Belapur",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400614",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/technoriya-etechnologies-pvt-ltm-smart-revolution/",
      "https://twitter.com/technoriya_etpl",
      "https://www.facebook.com/profile.php?id=100092559212790",
      "https://www.instagram.com/technoriya_com/"
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Technoriya e Technologies" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
