'use client'

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import '../styles/veiculos-destaque.css';
import Card from '@/components/Card';

interface Carro {
  _id: string;
  modelo: string;
  marca: string;
  ano: number;
  foto: string;
  destaque: boolean;
  preco: number;
}

const VeiculosDestaque = () => {
  const [carros, setCarros] = useState<Carro[]>([]);
  const [showPrev, setShowPrev] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(false);
  const carrosselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchDestaques() {
      try {
        const response = await fetch('http://localhost:3001/api/carros');
        const data = await response.json();
        const destaqueCarros = data.filter((carro: Carro) => carro.destaque);
        setCarros(destaqueCarros);
      } catch (error) {
        console.error('Erro ao buscar carros em destaque:', error);
      }
    }
    fetchDestaques();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (carrosselRef.current) {
        const scrollLeft = carrosselRef.current.scrollLeft;
        const scrollWidth = carrosselRef.current.scrollWidth;
        const clientWidth = carrosselRef.current.clientWidth;

        setShowPrev(scrollLeft > 0);
        setShowNext(scrollLeft < scrollWidth - clientWidth);
      }
    };

    if (carrosselRef.current) {
      carrosselRef.current.addEventListener('scroll', handleScroll);
    }

    handleScroll();

    return () => {
      if (carrosselRef.current) {
        carrosselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [carros]);

  useEffect(() => {
    const elements = document.querySelectorAll('.veiculos-destaque-title, .carrossel-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('content-visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  const scrollLeft = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: -carrosselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: carrosselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="veiculos-destaque">
      <div className="veiculos-destaque-header">
        <h1 className="veiculos-destaque-title">Carros em Destaque</h1>
        <Link href="/estoque" passHref>
          <button className="veiculos-destaque-button">Ver Estoque</button>
        </Link>
      </div>

      <div className="carrossel-container">
        {showPrev && <button className="prev" onClick={scrollLeft}>&#10094;</button>}
        <div className="veiculos-destaque-cards" ref={carrosselRef}>
          {carros.map((carro) => (
            <Card
              key={carro._id}
              _id={carro._id}
              modelo={carro.modelo}
              marca={carro.marca}
              ano={carro.ano}
              foto={`http://localhost:3000/${carro.foto}`}
              preco={carro.preco}
            />
          ))}
        </div>
        {showNext && <button className="next" onClick={scrollRight}>&#10095;</button>}
      </div>
    </section>
  );
};

export default VeiculosDestaque;
