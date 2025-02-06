import React from "react";
import Image from "next/image";
import "../styles/Card.css";
import Link from 'next/link';

interface CardCarroProps {
  modelo: string;
  marca: string;
  ano: number;
  foto: string; // Caminho da imagem relativo à pasta 'public'
}

const CardCarro: React.FC<CardCarroProps> = ({ modelo, marca, ano, foto }) => {
  return (
    <div className="card-carro">
      {/* Imagem do carro */}
      <div className="card-imagem">
        <Image 
          src={foto} // Acessa imagens dentro de /public/uploads
          alt={modelo} 
          width={500} 
          height={300} 
          className="imagem-carro" 
          
        />
      </div>

      {/* Detalhes do carro */}
      <div className="card-detalhes">
        <h3 className="titulo-carro">{modelo}</h3>
        <p className="descricao-carro">{marca} - {ano}</p>
        <h4 className="preco">Preço: R$</h4>
      </div>
    <Link>
  );
};

export default CardCarro;
