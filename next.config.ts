import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['nrn.news', 'api.nrn.news', 'picsum.photos'],
  },
};

export default nextConfig;
