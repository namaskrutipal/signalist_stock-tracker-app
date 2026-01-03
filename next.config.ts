import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'standalone',
};

export default nextConfig;