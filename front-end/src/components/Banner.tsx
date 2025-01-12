"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Banner.css';

const Banner = () => {
  const images = [
    '/baner.webp', // Substitua com os caminhos das imagens
    '/baner2.png',
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Alterna para a próxima imagem automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Troca de imagem a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [images.length]);

  return (

    <div className="banner-wrapper">
      {/* Título na esquerda */}
      <div className="banner-text">
        <h1 className="banner-title">Realizando Sonhos em Quatro Rodas</h1>
        <p className="banner-subtitle">Descubra o carro dos seus sonhos conosco!</p>
      </div>

      {/* Imagens animadas na direita */}
      <div className="banner-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex} // Identifica a imagem atual
            src={images[currentIndex]}
            alt={`Banner ${currentIndex + 1}`}
            className="banner-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Banner;
