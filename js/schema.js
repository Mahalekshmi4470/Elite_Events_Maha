/*
 * schema.js — Structured Data (Schema Markup) for Elite Events
 * Include this file in every HTML page via:
 *    <script src="js/schema.js"></script>
 */

// ─── 1. ORGANIZATION SCHEMA (All Pages) ────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elite Events",
  "url": "https://elite-events-maha.vercel.app",
  "logo": "https://elite-events-maha.vercel.app/images/logo1.png",
  "description": "Elite Events is a premium event management company in Chennai offering wedding planning, corporate events, and birthday party services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tech Park Tower, OMR Road, Perungudi",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600096",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-90806-68496",
    "contactType": "customer service",
    "availableLanguage": ["English", "Tamil"]
  }
};

injectSchema(organizationSchema);

// ─── 2. LOCAL BUSINESS SCHEMA (All Pages) ──────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EventPlanningService",
  "name": "Elite Events",
  "image": "https://elite-events-maha.vercel.app/images/logo1.png",
  "url": "https://elite-events-maha.vercel.app",
  "telephone": "+91-90806-68496",
  "email": "info@eliteevents.com",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tech Park Tower, OMR Road, Perungudi",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600096",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9628",
    "longitude": "80.2436"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Event Planning",
          "url": "https://elite-events-maha.vercel.app/wedding.html"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Management",
          "url": "https://elite-events-maha.vercel.app/corporate.html"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Birthday Party Planning",
          "url": "https://elite-events-maha.vercel.app/birthday.html"
        }
      }
    ]
  }
};

injectSchema(localBusinessSchema);

// ─── 3. FAQ SCHEMA (Only on faq.html) ──────────────────────────────────────
if (window.location.pathname.includes("faq.html")) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How early should we begin the wedding planning process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 6–12 months in advance for a seamless wedding experience with Elite Events in Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "Does Elite Events manage destination weddings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle destination weddings across cities and international locations."
        }
      }
    ]
  };
  injectSchema(faqSchema);
}

// ─── HELPER FUNCTION ────────────────────────────────────────────────────────
function injectSchema(schemaData) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schemaData, null, 2);
  document.head.appendChild(script);
}