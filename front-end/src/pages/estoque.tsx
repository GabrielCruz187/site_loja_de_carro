import React, { useState, useEffect } from "react";
import "../styles/Estoque.css";
import CardCarro from "../components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

// Defina um tipo para os carros
interface Carro {
  _id: string;
  modelo: string;
  marca: string;
  ano: number;
  foto: string;
}

export default function Estoque() {
  // Tipando o estado corretamente como array de Carro
  const [carros, setCarros] = useState<Carro[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState<"filter" | "order" | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("Filtrar por:");
  const [selectedOrder, setSelectedOrder] = useState<string>("Ordenar por:");

  const carrosPorPagina = 12; 
  const totalPages = Math.ceil(carros.length / carrosPorPagina);

  const carrosExibidos = carros.slice(
    (currentPage - 1) * carrosPorPagina,
    currentPage * carrosPorPagina
  );

  useEffect(() => {
    async function fetchCarros() {
      try {
        console.log("Buscando carros..."); // Adicione este log
        const response = await fetch("http://localhost:3001/api/carros");
        if (!response.ok) throw new Error("Erro ao buscar carros");

        const data: Carro[] = await response.json(); // Esperando um array de Carro

        // Aplicar a filtragem e ordenação
        let filteredAndSortedCars = [...data];

        // Filtro de "Menor Preço", "Maior Preço" etc. pode ser implementado aqui se necessário
        if (selectedFilter === "Menor Preço") {
          filteredAndSortedCars = filteredAndSortedCars.sort((a, b) => a.ano - b.ano);
        } else if (selectedFilter === "Maior Preço") {
          filteredAndSortedCars = filteredAndSortedCars.sort((a, b) => b.ano - a.ano);
        }

        // Ordenação por "Marca", "Modelo", etc.
        if (selectedOrder === "Marca") {
          filteredAndSortedCars = filteredAndSortedCars.sort((a, b) => a.marca.localeCompare(b.marca));
        } else if (selectedOrder === "Carro") {
          filteredAndSortedCars = filteredAndSortedCars.sort((a, b) => a.modelo.localeCompare(b.modelo));
        }

        setCarros(filteredAndSortedCars); // Atualizando o estado com os dados filtrados e ordenados
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCarros();
  }, [selectedFilter, selectedOrder]); // Recarregar os carros sempre que o filtro ou ordem mudar

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

      {/* Filtro */}
      <div className="select">
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
              <li className="opcao" onClick={() => handleSelectOption("order", "Ano")}>
                <input type="radio" name="order" value="Ano" />
                <span className="label">Ano</span>
                <Check size={20} />
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Exibindo os carros */}
      {loading ? (
        <p>Carregando carros...</p>
      ) : (
        <div className="estoque-cards">
          {carrosExibidos.map((carro: Carro) => (
            <CardCarro
              key={carro._id}
              modelo={carro.modelo}
              marca={carro.marca}
              ano={carro.ano}
              foto={`http://localhost:3001/${carro.foto}`} // Ajuste o caminho se necessário
            />
          ))}
        </div>
      )}

      {/* Paginação */}
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

      <Footer />
    </div>
  );
}


