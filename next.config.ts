// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    serverActions: { bodySizeLimit: "100MB" },
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cloud.appwrite.io" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
      // If you ever use absolute URLs to your own images with <Image />
      { protocol: "https", hostname: "www.everbrightpressurewashing.au" },
    ],
  },

  // Force a single canonical host
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "everbrightpressurewashing.au" }], // non-www
        destination: "https://www.everbrightpressurewashing.au/:path*",
        permanent: true,
      },
    ];
  },

  // Strong caching for static assets
  async headers() {
    return [
      {
        source:
          "/(favicon.ico|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|safari-pinned-tab.svg|site.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
