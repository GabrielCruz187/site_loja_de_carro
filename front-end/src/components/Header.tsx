'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Header.css';
import { Search } from "lucide-react";

interface Car {
  _id: string;
  modelo: string;
  marca: string;
  ano: number;
  foto: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const searchRef = useRef<HTMLDivElement>(null); // Ref para a área de pesquisa

  // Função para lidar com o clique fora da área de pesquisa
  const handleOutsideClick = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setSearchResults([]); // Fecha os resultados
    }
  };

  useEffect(() => {
    const fetchCars = async () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]); // Se o campo estiver vazio, limpa a busca
        return;
      }

      try {
        const response = await fetch(`https://site-loja-de-carro-backend.onrender.com/api/carros?search=${searchTerm}`);
        if (!response.ok) throw new Error('Erro ao buscar carros');
        const data: Car[] = await response.json(); // Definindo o tipo explicitamente
        setSearchResults(data);
      } catch (error) {
        console.error(error);
        setSearchResults([]); // Garante que os resultados não fiquem travados se houver erro
      }
    };

    const timeout = setTimeout(fetchCars, 500); // Debounce de 500ms

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // Adiciona o listener de clique fora da área de pesquisa
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        {/* Botão do menu hamburguer */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </button>

        <div className="logo">
          <Link href="/"> 
            <Image src="/ala.jpg" alt="Logo" width={120} height={120} />
          </Link>
        </div>
        {/* Menu de navegação - aparece quando o menu hamburguer é clicado */}
        <nav className={`header-nav ${isMenuOpen ? 'show' : ''}`}>
          <Link href="/" className="header-nav-item">Home</Link>
          <Link href="/estoque" className="header-nav-item">Estoque</Link>
          <Link href="/sobre" className="header-nav-item">Sobre Nós</Link>
          <Link href="/contato" className="header-nav-item">Contato</Link>
        </nav>
        <div className="header-lines">
          <div className="white-line"></div>
          <div className="orange-line"></div>
        </div>
      </div>
      <div className="search" ref={searchRef}>
          <input
            type="text"
            placeholder="Pesquisar"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" aria-label="Pesquisar">
            <span className="search-icon"><Search /></span>
          </button>

          {/* Resultados da pesquisa */}
          {searchResults.length > 0 && (
            <ul className="search-results">
              {searchResults.map((carro) => (
                <li key={carro._id}>
                  <Link href={`/venda/${carro._id}`}>
                    <Image src={carro.foto} alt={carro.modelo} width={50} height={50} />
                    <span>{carro.modelo} - {carro.marca} ({carro.ano})</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
    </header>
  );
}
