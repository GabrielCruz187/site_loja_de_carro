
import Image from 'next/image';
import '../styles/Header.css'; // Importe o arquivo CSS

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Image src="/logo.jpg" alt="Logo" width={100} height={40} />
        </div>

        {/* Navegação */}
        <nav className="nav">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Estoque</a>
          <a href="#" className="nav-item">Sobre Nós</a>
          <a href="#" className="nav-item">Contato</a>
        </nav>

        {/* Pesquisa */}
        <div className="search">
          <input
            type="text"
            placeholder="Pesquisar"
            className="search-input"
          />
          <button className="search-button">
            <span className="search-icon">🔍</span>
          </button>
        </div>
        
      </div>

      <div className="white"></div>
      <div className="orange"></div>
      </header>
     

      
      
  );
  
}






    
