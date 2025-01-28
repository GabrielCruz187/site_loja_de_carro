import React from 'react';
import Link from 'next/link'; // Importação correta do Link
import '../styles/veiculos-destaque.css'; // Estilos para o componente
import Card from '@/components/Card'; // Importa o componente Card

const VeiculosDestaque = () => {
  return (
    <section className="veiculos-destaque">
      {/* Título e Botão */}
      <div className="veiculos-destaque-header">
        <h1 className="veiculos-destaque-title">Carros em Destaque</h1>
        <Link href="/estoque" passHref>
          <button className="veiculos-destaque-button">Ver Estoque</button>
        </Link>
      </div>

      {/* Cards de Carros */}
      <div className="veiculos-destaque-cards">
        {/* Card 1 */}
        <Card
          titulo="S10"
          descricao="R$ 35.000 | Ano: 2021"
          imagem="s10.jpg"
        />
        {/* Card 2 */}
        <Card
          titulo="Jeep"
          descricao="R$ 40.000 | Ano: 2020"
          imagem="jeep.jpg"
        />
        {/* Card 3 */}
        <Card
          titulo="Up"
          descricao="R$ 45.000 | Ano: 2022"
          imagem="up.jpg"
        />
        {/* Card 4 */}
        <Card
          titulo="Up"
          descricao="R$ 45.000 | Ano: 2022"
          imagem="up.jpg"
        />
      </div>
    </section>
  );
};

export default VeiculosDestaque;
