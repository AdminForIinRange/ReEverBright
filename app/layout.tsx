// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/chakra-snippets/ClientProvider";
import { StructuredData } from "@/components/seo/StructuredData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.everbrightpressurewashing.au/"),
  title: {
    default: "Adelaide Pressure Washing | EverBright Pressure Washing",
    template: "%s | EverBright Pressure Washing",
  },
  description:
    "Adelaide, South Australia exterior cleaning by EverBright Pressure Washing: house washing, driveway and concrete cleaning, roof and gutter cleaning, soft washing, and commercial pressure washing.",
  alternates: { canonical: "https://www.everbrightpressurewashing.au/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "EverBright Pressure Washing",
    description:
      "Top-rated pressure washing for homes and businesses across Adelaide, SA. Safe soft-wash, powerful deep clean, and spotless results.",
    url: "https://www.everbrightpressurewashing.au/",
    siteName: "EverBright Pressure Washing",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "EverBright Pressure Washing - Professional exterior cleaning in Adelaide, SA",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EverBright Pressure Washing",
    description:
      "Professional exterior cleaning across Adelaide, SA: house washing, concrete, roofs, gutters, and more.",
    images: "/images/og-image.png",
  },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.svg",
        color: "#0b62ff",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} antialiased`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZ295X3L');
            `,
          }}
        />
        <StructuredData />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ295X3L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}

