'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Pesquisar"
            className="search-input"
          />
          <button className="search-button" aria-label="Pesquisar">
            <span className="search-icon">🔍</span>
          </button>
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
