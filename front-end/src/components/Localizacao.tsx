import React from 'react';
import '../styles/Localizacao.css';

export function Localizacao() {
  return (
    <section className="localizacao">
      <h1 className="localizacao-title">Nossa Localização</h1>
      
      {/* Mapa da localização */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28251.215027237173!2d-52.99783368564579!3d-27.735747945328974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd491f6609f0d7%3A0x4fde85b25179a4ab!2zQWzDoyBBdXRvbcOzdmVpcw!5e0!3m2!1spt-BR!2sbr!4v1739843629130!5m2!1spt-BR!2sbr" 
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Endereço da loja */}
      <div className="localizacao-address">
        <p><strong>Alã Automóveis</strong></p>
        <p>R. Pedro Augustin, 464 - Centro</p>
        <p>Não-Me-Toque - RS, 99680-000</p>
      </div>
    </section>
  );
}