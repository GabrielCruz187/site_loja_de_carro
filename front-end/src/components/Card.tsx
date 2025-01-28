import React from "react";
import "../styles/Card.css";

interface CardCarroProps {
  titulo: string;
  descricao: string;
  imagem: string; // Caminho da imagem
}

const CardCarro: React.FC<CardCarroProps> = ({ titulo, descricao, imagem }) => {
  return (
    <div className="card-carro">
      {/* Imagem do carro */}
      <div className="card-imagem">
        <img src={imagem} alt={titulo} className="imagem-carro" />
      </div>

      {/* Detalhes do carro */}
      <div className="card-detalhes">
        <h3 className="titulo-carro">{titulo}</h3>
        <p className="descricao-carro">{descricao}</p>
        <h4 className="preco">Preço: R$</h4>
      </div>
    </div>
  );
};

export default CardCarro;