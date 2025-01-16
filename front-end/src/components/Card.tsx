import React from "react";
import "../styles/Card.css";

interface CardProps {
  titulo: string;
  descricao: string;
}

export const Card: React.FC<CardProps> = ({ titulo, descricao }) => {
  return (
    <div className="card">
    <h2>{titulo}</h2>
    <p>{descricao}</p>
  </div>
  );
};
