import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // For GitHub Pages deployment (if needed)
  trailingSlash: true,
  images: {
    unoptimized: true, // For GitHub Pages images
  },
};

export default nextConfig;
