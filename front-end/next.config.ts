import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost', 
      'site-loja-de-carro-backend.onrender.com',  // Permite imagens do seu backend
      'res.cloudinary.com'  // Adiciona o domínio do Cloudinary
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros do ESLint no build
  },
};

export default nextConfig;


