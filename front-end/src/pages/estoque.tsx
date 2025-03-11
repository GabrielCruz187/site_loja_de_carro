import React, { useState, useEffect } from "react";
import "../styles/Estoque.css";
import CardCarro from "../components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import Image from 'next/image';

// Defina um tipo para os carros
interface Carro {
  _id: string;
  modelo: string;
  marca: string;
  ano: number;
  foto: string;
  preco: number;
}

export default function Estoque() {
  // Tipando o estado corretamente como array de Carro
  const [carros, setCarros] = useState<Carro[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState<"filter" | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("Filtrar por:");

  const [carrosPorPagina, setCarrosPorPagina] = useState(12); // Estado para carros por página
  
  // Hook para monitorar a largura da tela e alterar o número de carros por página
  useEffect(() => {
    document.title = "Estoque - Alã Automóveis";
    const updateCarrosPorPagina = () => {
      if (window.innerWidth <= 440) {
        setCarrosPorPagina(8); // 8 carros por página para telas <= 440px
      } else {
        setCarrosPorPagina(12); // Valor padrão para telas maiores
      }
    };

    updateCarrosPorPagina(); // Inicializa com a largura atual
    window.addEventListener("resize", updateCarrosPorPagina); // Adiciona evento para redimensionamento

    return () => {
      window.removeEventListener("resize", updateCarrosPorPagina); // Limpeza do evento
    };
  }, []); // O efeito roda apenas uma vez na montagem do componente

  const totalPages = Math.ceil(carros.length / carrosPorPagina);

  const carrosExibidos = carros.slice(
    (currentPage - 1) * carrosPorPagina,
    currentPage * carrosPorPagina
  );

  useEffect(() => {
    async function fetchCarros() {
      try {
        console.log("Buscando carros..."); // Adicione este log
        const response = await fetch("https://site-loja-de-carro-backend.onrender.com/api/carros");
        if (!response.ok) throw new Error("Erro ao buscar carros");

        const data: Carro[] = await response.json(); // Esperando um array de Carro

        // Aplicar a filtragem
        let filteredCars = [...data];

        // Filtro de "Menor Preço", "Maior Preço" etc. pode ser implementado aqui se necessário
        if (selectedFilter === "Menor Preço") {
          filteredCars = filteredCars.sort((a, b) => a.ano - b.ano);
        } else if (selectedFilter === "Maior Preço") {
          filteredCars = filteredCars.sort((a, b) => b.ano - a.ano);
        }

        setCarros(filteredCars); // Atualizando o estado com os dados filtrados
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCarros();
  }, [selectedFilter]); // Recarregar os carros sempre que o filtro mudar

  const toggleDropdown = (dropdown: "filter") => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const handleSelectOption = (option: string) => {
    setSelectedFilter(option);
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
              <ChevronDown size={40} style={{ display: dropdownOpen === "filter" ? "none" : "block" }} />
              <ChevronUp size={40} style={{ display: dropdownOpen === "filter" ? "block" : "none" }} />
            </div>
          </div>
          {dropdownOpen === "filter" && (
            <ul id="options">
              <li className="option" onClick={() => handleSelectOption("Mais Relevantes")}>
                <input type="radio" name="filter" value="Mais Relevantes" />
                <span className="label">Mais Relevantes</span>
                <Check size={20} />
              </li>
              <li className="option" onClick={() => handleSelectOption("Menor Preço")}>
                <input type="radio" name="filter" value="Menor Preço" />
                <span className="label">Menor Preço</span>
                <Check size={20} />
              </li>
              <li className="option" onClick={() => handleSelectOption("Maior Preço")}>
                <input type="radio" name="filter" value="Maior Preço" />
                <span className="label">Maior Preço</span>
                <Check size={20} />
              </li>
            </ul>
          )}
        </div>
        <div className="pagination-top">
          <div className="pagination-top-container">
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

      {/* Exibindo os carros */}
      {loading ? (
        <p>Carregando carros...</p>
      ) : (
        <div className="estoque-cards">
          {carrosExibidos.map((carro: Carro) => (
            <CardCarro
              key={carro._id}
              _id={carro._id} // Aqui garantimos que _id seja passado
              modelo={carro.modelo}
              marca={carro.marca}
              ano={carro.ano}
              foto={`http://localhost:3000${carro.foto}`}  // Usando URL absoluta  // Caminho relativo à pasta public
              preco={carro.preco}
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
