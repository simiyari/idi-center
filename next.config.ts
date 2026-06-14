import type { NextConfig } from "next";

const repo = "idi-center";

// The GitHub Pages site is served from /idi-center, so the production build
// needs that basePath. In local dev we serve from the root instead, so
// http://localhost:3000/ shows the home page (no /idi-center prefix needed).
const basePath = process.env.NODE_ENV === "production" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
