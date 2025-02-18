import React, { useEffect } from "react";
import "../styles/Contato.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Mail, Phone } from "lucide-react";

const Contato = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.info-contato, .map-container, .social-icons, .pagina-title, .info-title');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Se for um título, adiciona a classe .title-visible
          if (entry.target.classList.contains('pagina-title') || entry.target.classList.contains('info-title')) {
            entry.target.classList.add('title-visible');
          } else {
            // Para os outros elementos, adiciona a classe .content-visible
            entry.target.classList.add('content-visible');
          }
        }
      });
    }, {
      threshold: 0.1  // Aciona quando 50% do elemento estiver visível
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    // Limpeza do observer quando o componente for desmontado
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

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
            <div className="info-item2">
              <p><MapPin size={24} /> R. Pedro Augustin, 464 - Centro, Não-Me-Toque - RS</p>
            </div>
            <div className="info-item2">
              <Building size={24} />
              <p>Seg-Sex: 08h - 18h | Sáb: 08h - 12h</p>
            </div>
          </div>

          {/* Mapa da localização */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
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
            <a href="https://www.instagram.com/ala.automoveis/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/ala.automoveis/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://wa.me/5554996357891" target="_blank" rel="noopener noreferrer">
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
