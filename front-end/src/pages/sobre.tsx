import React, { useState } from "react";
import "../styles/Sobre.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div>
      <Header />
      
      <h1 className="titulo">Sobre Nós</h1>
      <div className="historia-container">
        {/* Foto da loja */}
        <img 
          src="/loja2.png" 
          alt="Foto da Loja" 
          className="historia-image" 
        />

        {/* Conteúdo à direita */}
        <div className="historia-content">
          <h2><strong>Conheça nossa história</strong></h2>
          <h3>
            Um legado se constrói com uma história,
            <br />
            Conheça a nossa
          </h3>
        </div>
      </div>

        {/* container 2 */}

      <div className="historia-container2">
        {/* Foto da loja */}
        <img 
          src="/loja3.png" 
          alt="Foto da Loja 2" 
          className="historia-image2" 
        />

        {/* Conteúdo à direita */}
        <div className="historia-content">
          <h2><strong>Conheça nossa história</strong></h2>
          <h3>
            Um legado se constrói com uma história,
            <br />
            Conheça a nossa
          </h3>
        </div>
      </div>

              {/* container 3*/}

              <div className="historia-container2">
        {/* Foto da loja */}
        <img 
          src="/loja4.png" 
          alt="Foto da Loja 3" 
          className="historia-image" 
        />

        {/* Conteúdo à direita */}
        <div className="historia-content">
          <h2><strong>Conheça nossa história</strong></h2>
          <h3>
            Um legado se constrói com uma história,
            <br />
            Conheça a nossa
          </h3>
        </div>
      </div>

      <div className="redes-contato-externo">
          <h2 className="redes-title">Acesse nossas redes sociais</h2>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ala.automoveis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/ala.automoveis/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://wa.me/5554996357891"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="social-icon" />
            </a>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sobre;
