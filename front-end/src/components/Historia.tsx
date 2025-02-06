import Link from 'next/link';
import '../styles/historia.css';

export function Historia() {
  return (
    <div className="historia">
      {/* Retângulo com conteúdo */}
      <div className="historia-container">
        {/* Foto da loja */}
        <img 
          src="/loja.jpg" 
          alt="Foto da Loja" 
          className="historia-image" 
        />

        {/* Conteúdo à direita */}
        <div className="historia-content">
          <strong><h2>Conheça nossa história</h2></strong>
          <h3>
            Um legado se constrói com uma história,
            <br />
            Conheça a nossa
          </h3>
          <Link href="/sobre" passHref>
            <button className="historia-button">Sobre Nós</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
