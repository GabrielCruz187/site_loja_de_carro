import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/Card.css";

interface CardCarroProps {
  _id: string;
  modelo: string;
  marca: string;
  ano: number;
  foto: string; // Caminho da imagem relativo à pasta 'public'
  preco:number;
}

const CardCarro: React.FC<CardCarroProps> = ({ modelo, marca, ano, foto }) => {
  // Verifique se o caminho da foto começa com uma barra ou já possui a URL completa
  const imageUrl = foto.startsWith('http') ? foto : `http://localhost:3001${foto}`;

  return (
    <div className="card-carro">
      {/* Imagem do carro */}
      <div className="card-imagem">
      <Image
  src={`http://localhost:3001${foto}`} // Foto do carro
  alt={modelo}
  width={500}
  height={300}
/>


      </div>

      {/* Detalhes do carro */}
      <div className="card-detalhes">
        <h3 className="titulo-carro">{modelo}</h3>
        <p className="descricao-carro">{marca} - {ano}</p>
        <h4 className="preco">{`R$ ${(preco ?? 0).toFixed(2)}`}</h4>

        {/* Link para mais detalhes do carro */}
        <Link href={`/estoque/${modelo.toLowerCase().replace(/\s/g, "-")}`} />
      </div>
    </div>
  );
};

export default CardCarro;
