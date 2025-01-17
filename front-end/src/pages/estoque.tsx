"use client";

import React, { useState } from "react";
import "../styles/Estoque.css";
import { Card } from "../components/Card";
import Header from "@/components/Header";

// Importando os ícones do Lucide
import { ChevronDown, ChevronUp, Check } from "lucide-react";

export default function Estoque() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isChecked, setIsChecked] = useState(false); // Estado para controlar o checkbox
  const [selectedOption, setSelectedOption] = useState<string>("Filtrar por:"); // Estado para a opção selecionada

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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Alterna o valor do checkbox
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); // Define a opção selecionada
    setIsChecked(false); // Fecha a lista de opções
  };

  return (
    <div className="estoque-page">
      <Header />

      {/* Filtros */}
      <div className="select">
        <div id="category-select">
          <input
            type="checkbox"
            id="options-view-button"
            onChange={handleCheckboxChange} // Chama a função ao mudar o estado
          />

          <div id="select-button">
            <div id="selected-value">{selectedOption}</div> {/* Exibe a opção selecionada */}
            <div id="chevrons">
              <ChevronDown size={20} style={{ display: isChecked ? "none" : "block" }} />
              <ChevronUp size={20} style={{ display: isChecked ? "block" : "none" }} />
            </div>
          </div>
        </div>

        {/* Lista de opções abaixo de "Filtrar por:" */}
        {isChecked && (
          <ul id="options">
            <li className="option" onClick={() => handleOptionSelect("Mais Relevantes")}>
              <input
                type="radio"
                name="category"
                value="Mais Relevante"
                data-label="Mais Relevantes"
              />
              <span className="label">Mais Relevantes</span>
              <Check size={20} />
            </li>

            <li className="option" onClick={() => handleOptionSelect("Menor Preço")}>
              <input
                type="radio"
                name="category"
                value="low Price"
                data-label="Menor Preço"
              />
              <span className="label">Menor Preço</span>
              <Check size={20} />
            </li>

            <li className="option" onClick={() => handleOptionSelect("Maior Preço")}>
              <input
                type="radio"
                name="category"
                value="High Price"
                data-label="Maior Preço"
              />
              <span className="label">Maior Preço</span>
              <Check size={20} />
            </li>
          </ul>
        )}
      </div>

      

      {/* Cards */}
      <div className="estoque-cards">
        {carrosExibidos.map((carro) => (
          <Card key={carro.id} titulo={carro.titulo} descricao={carro.descricao} />
        ))}
      </div>

      {/* Paginação (Inferior) */}
      <div className="pagination-bottom">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-circle ${currentPage === index + 1 ? "active" : ""}`}
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
