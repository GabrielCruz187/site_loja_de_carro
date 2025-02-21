import { useEffect } from 'react';
import Link from 'next/link';
import '../styles/historia.css';

export function Historia() {
  useEffect(() => {
    const elements = document.querySelectorAll('.historia-content, .historia-image, .historia-content h2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.tagName === 'H2') {
            entry.target.classList.add('title-visible');
          } else {
            entry.target.classList.add('content-visible');
          }
        }
      });
    }, { threshold: 0.07 });

    elements.forEach(element => observer.observe(element));

    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <div className="historia">
      <div className="historia-container">
        <img 
          src="/loja.jpg" 
          alt="Foto da Loja" 
          className="historia-image" 
        />
        <div className="historia-content">
          <strong><h2>Conheça nossa história</h2></strong>
          <h3>
            Um legado se constrói com uma história,
            <br />
            Conheça a nossa
          </h3>
          <Link href="/sobre" passHref>
            <button className="historia-button">Sobre Nós</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
