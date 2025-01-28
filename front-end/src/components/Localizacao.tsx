import React from 'react';
import '../styles/Localizacao.css';

export function Localizacao() {
  return (
    <section className="localizacao">
      <h1 className="localizacao-title">Nossa Localização</h1>
      
      {/* Mapa da localização */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6466974407077!2d-49.46786858513275!3d-28.494404657118315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951adcb98f79ad09%3A0x6e10b450ccf8da31!2sNão%20Me%20Toque%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1672898532284!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

  