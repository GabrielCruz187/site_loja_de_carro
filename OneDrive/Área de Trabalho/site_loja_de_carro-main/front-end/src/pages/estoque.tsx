"use client";

import React, { useState } from "react";
import "../styles/Estoque.css";
import { Card } from "../components/Card";
import Header from "@/components/Header";

export default function Estoque() {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock de dados do estoque
  const carros = [
    { id: 1, titulo: "Carro 1", descricao: "Descrição do carro 1" },
    { id: 2, titulo: "Carro 2", descricao: "Descrição do carro 2" },
    { id: 3, titulo: "Carro 3", descricao: "Descrição do carro 3" },
    { id: 4, titulo: "Carro 4", descricao: "Descrição do carro 4" },
    { id: 5, titulo: "Carro 5", descricao: "Descrição do carro 5" },
    { id: 6, titulo: "Carro 6", descricao: "Descrição do carro 6" },
    { id: 7, titulo: "Carro 7", descricao: "Descrição do carro 7" },
    { id: 8, titulo: "Carro 8", descricao: "Descrição do carro 8" },
    { id: 9, titulo: "Carro 9", descricao: "Descrição do carro 9" },
  ];

  // Paginação (3 carros por página)
  const carrosPorPagina = 3;
  const indexFinal = currentPage * carrosPorPagina;
  const indexInicial = indexFinal - carrosPorPagina;
  const carrosExibidos = carros.slice(indexInicial, indexFinal);

  const totalPages = Math.ceil(carros.length / carrosPorPagina);

  return (
    <div className="estoque-page">
        <Header></Header>
      {/* Cabeçalho */}
      <header className="estoque-header">
       
      </header>

      {/* Filtros */}
      <div className="estoque-filters">
        <input type="text" placeholder="Ordenar por:" className="filtro-input" />
        <input
          type="text"
          placeholder="Filtrar veículos"
          className="filtro-input"
        />
        <div className="pagination-top">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`pagination-circle ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <span className="pagination-dots">...</span>
        </div>
      </div>

      {/* Cards */}
      <div className="estoque-cards">
        {carrosExibidos.map((carro) => (
          <Card
            key={carro.id}
            titulo={carro.titulo}
            descricao={carro.descricao}
          />
        ))}
      </div>

      {/* Paginação (Inferior) */}
      <div className="pagination-bottom">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-circle ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <span className="pagination-dots">...</span>
      </div>
    </div>
  );
}
