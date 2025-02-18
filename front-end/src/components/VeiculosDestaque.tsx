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

        // Se não está no começo, mostrar o botão "prev"
        setShowPrev(scrollLeft > 0);

        // Se não está no final, mostrar o botão "next"
        setShowNext(scrollLeft < scrollWidth - clientWidth);
      }
    };

    // Adicionar o listener de rolagem
    if (carrosselRef.current) {
      carrosselRef.current.addEventListener('scroll', handleScroll);
    }

    // Verificar inicialmente os botões
    handleScroll();

    // Limpar o listener quando o componente for desmontado
    return () => {
      if (carrosselRef.current) {
        carrosselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [carros]);

  // Função para navegar no carrossel
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
