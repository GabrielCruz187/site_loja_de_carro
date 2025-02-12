import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],  // Permite imagens de localhost
  },
};

export default nextConfig;
