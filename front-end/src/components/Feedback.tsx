"use client";

import '../styles/Feedback.css';
import { useState, useEffect } from 'react';

export function Feedback() {
  const feedbacks = [
    {
      name: "João Silva",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      frase: "Excelente atendimento, recomendo para todos!",
      cidade: "Porto Alegre",
    },
    {
      name: "Maria Oliveira",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      frase: "Carros de qualidade e atendimento de primeira.",
      cidade: "Caxias do Sul",
    },
    {
      name: "Carlos Souza",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      frase: "Fui atendido com muita atenção, recomendo!",
      cidade: "Santa Maria",
    },
    {
      name: "Ana Lima",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      frase: "Equipe muito atenciosa, voltarei a comprar!",
      cidade: "Florianópolis",
    },
    {
      name: "Fernando Rocha",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      frase: "Serviço impecável, muito satisfeito!",
      cidade: "Curitiba",
    },
    {
      name: "Juliana Mendes",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      frase: "Ótima experiência, recomendo a todos!",
      cidade: "Belo Horizonte",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Use effect to auto-change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % feedbacks.length); // Módulo para garantir o loop contínuo
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Para garantir que sempre mostre 3 cards, mesmo quando chega ao final
  const getVisibleFeedbacks = () => {
    const startIndex = currentIndex;
    const feedbacksCopy = [...feedbacks];
    const visibleFeedbacks = [];

    for (let i = 0; i < 3; i++) {
      visibleFeedbacks.push(feedbacksCopy[(startIndex + i) % feedbacks.length]);
    }

    return visibleFeedbacks;
  };

  return (
    <section className="feedback">
      <h1 className="feedback-title">Depoimentos</h1>
      <div className="feedback-carousel">
        <div className="feedback-cards">
          {getVisibleFeedbacks().map((feedback, index) => (
            <div key={index} className="feedback-card">
              <img src={feedback.image} alt={feedback.name} className="feedback-image" />
              <h3 className="feedback-name">{feedback.name}</h3>
              <p className="feedback-text">{feedback.frase}</p>
              <p className="feedback-city">{feedback.cidade}</p>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(feedbacks.length / 3) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index * 3 ? 'active' : ''}`}
              onClick={() => goToSlide(index * 3)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}