import React, { useState } from "react";
import "../styles/Estoque.css";
import CardCarro from "../components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Importação do Footer
import { ChevronDown, ChevronUp, Check } from "lucide-react";

export default function Estoque() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState<"filter" | "order" | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("Filtrar por:");
  const [selectedOrder, setSelectedOrder] = useState<string>("Ordenar por:");

  // Mock de dados do estoque com imagens
  const carros = [
    { id: 1, titulo: "Carro 1", descricao: "Descrição do carro 1", imagem: "/s10.jpg" },
    { id: 2, titulo: "Carro 2", descricao: "Descrição do carro 2", imagem: "/s10.jpg" },
    { id: 3, titulo: "Carro 3", descricao: "Descrição do carro 3", imagem: "/s10.jpg" },
    { id: 4, titulo: "Carro 4", descricao: "Descrição do carro 4", imagem: "/s10.jpg" },
    { id: 5, titulo: "Carro 5", descricao: "Descrição do carro 5", imagem: "/s10.jpg" },
    { id: 6, titulo: "Carro 6", descricao: "Descrição do carro 6", imagem: "/s10.jpg" },
    { id: 7, titulo: "Carro 7", descricao: "Descrição do carro 7", imagem: "/s10.jpg" },
    { id: 8, titulo: "Carro 8", descricao: "Descrição do carro 8", imagem: "/s10.jpg" },
    { id: 9, titulo: "Carro 9", descricao: "Descrição do carro 9", imagem: "/s10.jpg" },
    { id: 10, titulo: "Carro 10", descricao: "Descrição do carro 10", imagem: "/s10.jpg" },
    { id: 11, titulo: "Carro 11", descricao: "Descrição do carro 11", imagem: "/s10.jpg" },
    { id: 12, titulo: "Carro 12", descricao: "Descrição do carro 12", imagem: "/s10.jpg" },
    { id: 13, titulo: "Carro 13", descricao: "Descrição do carro 13", imagem: "/s10.jpg" },
    { id: 14, titulo: "Carro 14", descricao: "Descrição do carro 14", imagem: "/s10.jpg" },
    { id: 15, titulo: "Carro 15", descricao: "Descrição do carro 15", imagem: "/s10.jpg" },
    { id: 16, titulo: "Carro 16", descricao: "Descrição do carro 16", imagem: "/s10.jpg" },
    { id: 17, titulo: "Carro 17", descricao: "Descrição do carro 17", imagem: "/s10.jpg" },
    { id: 18, titulo: "Carro 18", descricao: "Descrição do carro 18", imagem: "/s10.jpg" },
  ];

  const carrosPorPagina = 12; // 5 linhas x 4 cards por linha
  const totalPages = Math.ceil(carros.length / carrosPorPagina);
  const carrosExibidos = carros.slice(
    (currentPage - 1) * carrosPorPagina,
    currentPage * carrosPorPagina
  );

  const toggleDropdown = (dropdown: "filter" | "order") => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const handleSelectOption = (type: "filter" | "order", option: string) => {
    if (type === "filter") {
      setSelectedFilter(option);
    } else {
      setSelectedOrder(option);
    }
    setDropdownOpen(null);
  };

  // Função para rolar até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="estoque-page">
      <Header />

      <div className="select">
        {/* Filtro */}
        <div id="category-select">
          <input
            type="checkbox"
            id="options-view-button"
            onChange={() => toggleDropdown("filter")}
            checked={dropdownOpen === "filter"}
          />
          <div id="select-button" onClick={() => toggleDropdown("filter")}>
            <div id="select-value">{selectedFilter}</div>
            <div id="chevrons">
              <ChevronDown size={20} style={{ display: dropdownOpen === "filter" ? "none" : "block" }} />
              <ChevronUp size={20} style={{ display: dropdownOpen === "filter" ? "block" : "none" }} />
            </div>
          </div>
          {dropdownOpen === "filter" && (
            <ul id="options">
              <li className="option" onClick={() => handleSelectOption("filter", "Mais Relevantes")}>
                <input type="radio" name="filter" value="Mais Relevantes" />
                <span className="label">Mais Relevantes</span>
                <Check size={20} />
              </li>
              <li className="option" onClick={() => handleSelectOption("filter", "Menor Preço")}>
                <input type="radio" name="filter" value="Menor Preço" />
                <span className="label">Menor Preço</span>
                <Check size={20} />
              </li>
              <li className="option" onClick={() => handleSelectOption("filter", "Maior Preço")}>
                <input type="radio" name="filter" value="Maior Preço" />
                <span className="label">Maior Preço</span>
                <Check size={20} />
              </li>
            </ul>
          )}
        </div>

        {/* Ordenação */}
        <div id="category-selecionar">
          <input
            type="checkbox"
            id="options-view-button2"
            onChange={() => toggleDropdown("order")}
            checked={dropdownOpen === "order"}
          />
          <div id="select-botão" onClick={() => toggleDropdown("order")}>
            <div id="selecionar-value">{selectedOrder}</div>
            <div id="chevrons2">
              <ChevronDown size={20} style={{ display: dropdownOpen === "order" ? "none" : "block" }} />
              <ChevronUp size={20} style={{ display: dropdownOpen === "order" ? "block" : "none" }} />
            </div>
          </div>
          {dropdownOpen === "order" && (
            <ul id="opcoes">
              <li className="opcao" onClick={() => handleSelectOption("order", "Marca")}>
                <input type="radio" name="order" value="Marca" />
                <span className="label">Marca</span>
                <Check size={20} />
              </li>
              <li className="opcao" onClick={() => handleSelectOption("order", "Carro")}>
                <input type="radio" name="order" value="Carro" />
                <span className="label">Carro</span>
                <Check size={20} />
              </li>
              <li className="opcao" onClick={() => handleSelectOption("order", "Moto")}>
                <input type="radio" name="order" value="Moto" />
                <span className="label">Moto</span>
                <Check size={20} />
              </li>
            </ul>
          )}
        </div>

        {/* Barra de paginação à direita */}
        <div className="pagination-right">
          <div className="pagination-bottom">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`pagination-circle ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage(index + 1);
                  scrollToTop(); // Chama a função para rolar até o topo
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="estoque-cards">
        {carrosExibidos.map((carro) => (
          <CardCarro
            key={carro.id}
            titulo={carro.titulo}
            descricao={carro.descricao}
            imagem={carro.imagem}
          />
        ))}
      </div>

      {/* Nova barra de paginação abaixo dos cards */}
      <div className="pagination-down">
        <div className="pagination-bottom">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`pagination-circle ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => {
                setCurrentPage(index + 1);
                scrollToTop(); // Chama a função para rolar até o topo
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer /> {/* Adicionando o Footer aqui */}
    </div>
  );
}
