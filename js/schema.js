/*
 * schema.js — Structured Data (Schema Markup) for Elite Events
 * Include this file in every HTML page via:
 *   <script src="js/schema.js"></script>
 *
 * This injects JSON-LD for:
 *  1. Organization
 *  2. FAQ Page (only on faq.html)
 *  3. Services (LocalBusiness)
 */

// ─── 1. ORGANIZATION SCHEMA (All Pages) ────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elite Events",
  "url": "https://www.eliteevents.com",
  "logo": "https://www.eliteevents.com/images/logo1.png",
  "description": "Elite Events is a premium event management company in Chennai offering wedding planning, corporate events, and birthday party services with elegance and perfection.",
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
  },
  "sameAs": [
    "https://www.instagram.com/eliteevents",
    "https://www.facebook.com/eliteevents"
  ]
};

injectSchema(organizationSchema);

// ─── 2. LOCAL BUSINESS SCHEMA (All Pages) ──────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EventPlanningService",
  "name": "Elite Events",
  "image": "https://www.eliteevents.com/images/logo1.png",
  "url": "https://www.eliteevents.com",
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
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
          "description": "Complete wedding planning services in Chennai including venue selection, decoration, catering, and photography.",
          "url": "https://www.eliteevents.com/wedding.html"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Management",
          "description": "Professional corporate event management including conferences, product launches, team building events, and galas in Chennai.",
          "url": "https://www.eliteevents.com/corporate.html"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Birthday Party Planning",
          "description": "Creative birthday party planning for kids and adults including themes, decorations, cake, and entertainment in Chennai.",
          "url": "https://www.eliteevents.com/birthday.html"
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
          "text": "Yes, we handle destination weddings across cities and international locations. Our team coordinates all logistics for you."
        }
      },
      {
        "@type": "Question",
        "name": "How early should we plan a corporate event?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plan 2–6 months in advance for large corporate events. Smaller events or meetings can often be arranged on shorter notice."
        }
      },
      {
        "@type": "Question",
        "name": "Does Elite Events handle international corporate events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we organize conferences, product launches, and exhibitions both within India and worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "How early should I book a birthday party with Elite Events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking 2–4 weeks in advance is ideal for proper planning and to secure your preferred theme and venue."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide custom themes and entertainment for birthday parties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer custom themes, cakes, DJs, games, and full entertainment packages for birthday parties of all sizes."
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
