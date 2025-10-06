// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import "animate.css";
import { StructuredData } from "@/components/seo/StructuredData";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.everbrightpressurewashing.au"),
  title: {
    default: "Adelaide Pressure Washing | EverBright Pressure Washing",
    template: "%s | EverBright Pressure Washing",
  },
  description:
    "Professional exterior cleaning by EverBright Pressure Washing. House washing, driveway & concrete cleaning, roof & gutter cleaning, soft wash, and commercial pressure washing.",
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
      "Top-rated pressure washing for homes and businesses. Safe soft-wash, powerful deep clean, and spotless results.",
    url: "https://www.everbrightpressurewashing.au/",
    siteName: "EverBright Pressure Washing",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "EverBright Pressure Washing – Professional exterior cleaning",
        type: "image/png",
      },
      {
        url: "/images/og-image-square.png", // optional file; remove if you don't have it
        width: 1200,
        height: 1200,
        alt: "EverBright Pressure Washing Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@everbright", // TODO: update to real handle or remove
    creator: "@everbright", // TODO: update to real handle or remove
    title: "EverBright Pressure Washing",
    description:
      "Professional exterior cleaning: house washing, concrete, roofs, gutters, and more.",
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

  viewport: { width: "device-width", initialScale: 1, maximumScale: 1 },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

const ClientProvider = dynamic(
  () => import("../components/chakra-snippets/ClientProvider"),
  {
    loading: () => <Loading />,
  }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
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
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
