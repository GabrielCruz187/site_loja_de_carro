"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Banner.css';

const Banner = () => {
  const images = [
    '/banner-loja.png', // Substitua com os caminhos das imagens
    
   
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
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Banner;
