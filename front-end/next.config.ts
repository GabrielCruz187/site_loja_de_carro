import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],  // Permite imagens de localhost
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros do ESLint no build
  },

};

export default nextConfig;
