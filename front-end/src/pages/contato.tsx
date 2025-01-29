import React from "react";
import "../styles/Contato.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Mail, Phone } from "lucide-react";

const Contato = () => {
  return (
    <div>
      {/* Aqui está o Header */}
      <Header />

      <main>
        {/* Título principal da página */}
        <h1 className="pagina-title">Contato</h1>

        {/* Container principal para o mapa e informações de contato */}
        <div className="main-container">
          {/* Container para informações de contato */}
          <div className="info-contato">
            <h2 className="info-title">Informações de Contato</h2>
            <div className="info-item">
              <Phone size={24} />
              <p>(54) 99635-7891</p>
            </div>
            <div className="info-item">
              <Mail size={24} />
              <p>contato@empresa.com</p>
            </div>
            <div className="info-item">
              <MapPin size={24} />
              <p>R. Pedro Augustin, 464 - Centro, Não-Me-Toque - RS</p>
            </div>
            <div className="info-item">
              <Building size={24} />
              <p>Seg-Sex: 08h - 18h | Sáb: 08h - 12h</p>
            </div>
          </div>
          
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
        </div>

        {/* Redes sociais movidas para fora do container */}
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
      </main>

      {/* Aqui está o Footer */}
      <Footer />
    </div>
  );
};

export default Contato;
