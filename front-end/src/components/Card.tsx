import React from "react";
import "../styles/Card.css";

interface CardCarroProps {
  modelo: string;
  marca: string;
  ano: number;
  foto: string; // Caminho da imagem
}

const CardCarro: React.FC<CardCarroProps> = ({ modelo, marca, ano, foto }) => {
  return (
    <div className="card-carro">
      {/* Imagem do carro */}
      <div className="card-imagem">
        <img src={foto} alt={modelo} className="imagem-carro" />
      </div>

      {/* Detalhes do carro */}
      <div className="card-detalhes">
        <h3 className="titulo-carro">{modelo}</h3>
        <p className="descricao-carro">{marca} - {ano}</p>
        <h4 className="preco">Preço: R$</h4>
      </div>
    </div>
  );
};

export default CardCarro;
