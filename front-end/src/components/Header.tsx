'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Header.css';
import { Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      if (searchTerm.length > 2) { // Só busca se tiver mais de 2 caracteres
        try {
          const response = await fetch(`http://localhost:3001/api/carros?search=${searchTerm}`);
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error('Erro ao buscar carros:', error);
        }
      } else {
        setSearchResults([]); // Limpa a busca se o usuário apagar
      }
    };

    // Delay para evitar requisições em excesso
    const timeout = setTimeout(fetchCars, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/"> 
            <Image src="/ala.jpg" alt="Logo" width={120} height={120} />
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Pesquisar"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" aria-label="Pesquisar">
            <span className="search-icon"><Search></Search></span>
          </button>
          {/* Resultados da pesquisa */}
          {searchTerm.length > 2 && searchResults.length > 0 && (
            <ul className="search-results">
              {searchResults.map((carro) => (
                <li key={carro._id}>
                  <Link href={`/estoque/${carro._id}`}>
                    <Image src={`http://localhost:3001/${carro.foto}`} alt={carro.modelo} width={50} height={50} />
                    <span>{carro.modelo} - {carro.marca} ({carro.ano})</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
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
    </header>
  );
}


