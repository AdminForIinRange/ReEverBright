// components/seo/StructuredData.tsx
import Script from "next/script";

export function StructuredData() {
  const base = "https://www.everbrightpressurewashing.au/";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "EverBright Pressure Washing",
    url: base,
    logo: {
      "@type": "ImageObject",
      url: `${base}/images/logo.png`,
      width: 300,
      height: 100,
    },
    image: `${base}/images/og-image.png`,
    description:
      "Professional exterior cleaning and pressure washing in Adelaide, South Australia. Driveways, roofs, gutters, solar panels, and more.",
    foundingDate: "2024",
    founders: [{ "@type": "Person", name: "Shayal" }],
    sameAs: [
      "https://www.facebook.com/everbrightpressurewashing",
      "https://www.instagram.com/everbrightpressurewashing",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "120",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61 411 017 366",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "Adelaide, South Australia",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#localbusiness`,
    name: "EverBright Pressure Washing",
    image: `${base}/images/og-image.png`,
    url: base,
    telephone: "+61 411 017 366",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      postalCode: "5000",
      addressCountry: "AU",
    },
    geo: { "@type": "GeoCoordinates", latitude: -34.9285, longitude: 138.6007 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "120",
    },
    parentOrganization: { "@id": `${base}/#organization` },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Exterior Cleaning & Pressure Washing",
    provider: { "@id": `${base}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
      containedInPlace: { "@type": "State", name: "South Australia" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pressure Washing",
            description:
              "Deep-clean driveways, concrete, pavers, patios, and walls to remove dirt, stains, and algae.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Cleaning",
            description:
              "Safe roof washing to remove moss, lichen, and streaks, restoring curb appeal.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gutter Cleaning",
            description:
              "Thorough gutter clearing to prevent overflow, leaks, and property damage.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solar Panel Cleaning",
            description:
              "Eco-friendly cleaning to maximize solar panel efficiency and energy output.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: "EverBright Pressure Washing",
    description:
      "Adelaide pressure washing and exterior cleaning specialists. Driveways, roofs, gutters, solar panels and more.",
    publisher: { "@id": `${base}/#organization` },
    potentialAction: [
      {
        "@type": "ContactAction",
        target: "tel:+61411017366",
        name: "Call EverBright Pressure Washing",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I book a service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book by phone or SMS and we will confirm a time that suits you.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We service all of Greater Adelaide and surrounding suburbs in South Australia.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer roof and gutter cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We clean roofs, gutters, solar panels, driveways, concrete, and more with the right method for each surface.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. EverBright Pressure Washing is fully insured for residential and commercial work across Adelaide, SA.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to be home during the job?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. If we have safe access and a working outdoor tap, we can complete the job while you are away.",
        },
      },
    ],
  };

  return (
    <>
      <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="services-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
