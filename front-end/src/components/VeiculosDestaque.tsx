'use client'


import React, { useEffect, useState } from 'react';
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
  preco:number;
}


const VeiculosDestaque = () => {
  const [carros, setCarros] = useState<Carro[]>([]);

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

  return (
    <section className="veiculos-destaque">
      <div className="veiculos-destaque-header">
        <h1 className="veiculos-destaque-title">Carros em Destaque</h1>
        <Link href="/estoque" passHref>
          <button className="veiculos-destaque-button">Ver Estoque</button>
        </Link>
      </div>

      <div className="veiculos-destaque-cards">
      {carros.map((carro: Carro) => (
             <Card
             key={carro._id}
             _id={carro._id} // Aqui garantimos que _id seja passado
             modelo={carro.modelo}
             marca={carro.marca}
             ano={carro.ano}
             foto={`http://localhost:3000/${carro.foto}`} // Ajuste o caminho se necessário
             preco={carro.preco}
           />
          ))}
       
      </div>
    </section>
  );
};

export default VeiculosDestaque 