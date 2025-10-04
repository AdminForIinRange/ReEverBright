import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import Script from "next/script";
import "animate.css";
import { StructuredData } from "@/components/seo/StructuredData"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adelaide Pressure Washing | EverBright Pressure Washing ",
    template: "%s | EverBright Pressure Washing",
  },
  description:
    "Professional exterior cleaning by EverBright Pressure Washing. House washing, driveway & concrete cleaning, roof & gutter cleaning, soft wash, and commercial pressure washing.",
  metadataBase: new URL("https://www.everbrightpressurewashing.au"), // ← change to your real domain
  keywords: [
    "Pressure Washing",
    "Power Washing",
    "House Washing",
    "Soft Wash",
    "Roof Cleaning",
    "Driveway Cleaning",
    "Concrete Cleaning",
    "Gutter Cleaning",
    "Commercial Pressure Washing",
    "Exterior Cleaning",
  ],
  publisher: "EverBright Pressure Washing",
  creator: "EverBright Pressure Washing",
  applicationName: "EverBright Pressure Washing",
  category: "Home Services",
  classification: "Business",

  authors: [
    {
      name: "EverBright Pressure Washing",
      url: "https://www.everbrightpressurewashing.au",
    },
  ],

  alternates: {
    canonical: "https://www.everbrightpressurewashing.au",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "EverBright Pressure Washing",
    description:
      "Top-rated pressure washing for homes and businesses. Safe soft-wash, powerful deep clean, and spotless results.",
    url: "https://www.everbrightpressurewashing.au",
    siteName: "EverBright Pressure Washing",
    locale: "en",
    type: "website",
    images: [
      {
        url: "https://www.everbrightpressurewashing.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EverBright Pressure Washing – Professional exterior cleaning",
        type: "image/jpeg",
      },
      {
        url: "https://www.everbrightpressurewashing.au/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "EverBright Pressure Washing Logo",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@everbright", // ← update to your handle
    creator: "@everbright", // ← update to your handle
    title: "EverBright Pressure Washing",
    description:
      "Professional exterior cleaning: house washing, concrete, roofs, gutters, and more.",
    images: {
      url: "https://www.everbrightpressurewashing.au/og-image.jpg",
      alt: "EverBright Pressure Washing – Exterior cleaning pros",
    },
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0b62ff",
      },
    ],
  },

  manifest: "/site.webmanifest",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],

  other: {
    "msapplication-TileColor": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

const ClientProvider = dynamic(
  () => import("../components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> },
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
                <StructuredData />
        {/* Fonts & libs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Raleway:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        {/* JSON-LD structured data (edit business details!) */}
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EverBright Pressure Washing",
            url: "https://www.everbrightpressurewashing.au",
            image: "https://www.everbrightpressurewashing.au/og-image.jpg",
            telephone: "+61 4 0000 0000", // ← update
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Your City",
              addressRegion: "Your State",
              postalCode: "0000",
              addressCountry: "AU",
            },
            sameAs: [
              "https://www.facebook.com/everbright", // ← update/remove
              "https://www.instagram.com/everbright",
            ],
            openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00",
            areaServed: "Local Region",
            description:
              "Professional pressure washing for residential and commercial properties. House washing, driveways, roofs, gutters, and more.",
          })}
        </Script>
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
