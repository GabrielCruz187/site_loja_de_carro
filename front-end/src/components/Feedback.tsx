"use client";

import { useEffect } from 'react';
import '../styles/Feedback.css';

export function Feedback() {
  useEffect(() => {
    const elements = document.querySelectorAll('.feedback-title, .feedback-title-text, .feedback-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('feedback-title')) {
            entry.target.classList.add('title-visible');
          } else {
            entry.target.classList.add('content-visible');
          }
        }
      });
    }, { threshold: 0.05 });

    elements.forEach(element => observer.observe(element));

    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <section className="feedback">
      <h1 className="feedback-title">Depoimento</h1>
      <p className="feedback-title-text">
        Este é um FeedBack sobre nossa loja. Nosso amigo cliente
        têm elogiado muito nosso serviço em um depoimento incrível
      </p>
      <div className="feedback-content">
        <div className="feedback-container">
          <div className="feedback-video-container">
            <video className="feedback-video" controls>
              <source src="/depoimento.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
          <div className="feedback-text-container">
            <div className="titulo-text">
              <h2>Givago Borghetti</h2>
            </div>
            <div className="feedback-photo">
              <img src="/cliente.jpeg" alt="Foto do depoente" />
            </div>
            <div className="feedback-text">
              <p>
                "A Alã Automóveis é uma loja a qual eu confio,
                não apenas pelos ótimos carros, mas pelo atendimento e tratamento ao cliente.
                Com certeza uma experiência satisfatória, recomendo!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
