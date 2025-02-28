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

const CardCarro: React.FC<CardCarroProps> = ({ _id, modelo, marca, ano, foto, preco }) => {
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
        <h4 className="preco">
  {preco !== undefined && preco !== null 
    ? `R$ ${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` 
    : "Preço a consultar"}
</h4>




      {/* Link para a página de venda com ID do carro */}
      <Link href={`/venda/${_id}`} passHref>
          <button className="detalhes-button">Ver Detalhes</button>
      </Link>
         
        
      </div>
    </div>
  );
};

export default CardCarro;

