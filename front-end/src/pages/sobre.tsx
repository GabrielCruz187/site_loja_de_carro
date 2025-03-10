import { useEffect } from "react";
import "../styles/Sobre.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  useEffect(() => {
    document.title = "Sobre Nós - Alã Automóveis";
    const elements = document.querySelectorAll('.titulo, .historia-container, .historia-container2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('titulo')) {
            entry.target.classList.add('title-visible');
          } else {
            entry.target.classList.add('content-visible');
          }
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <div>
      <Header />

      <h1 className="titulo">Sobre Nós</h1>

      <div className="historia-container">
        <img src="/loja.jpg" alt="Foto da Loja" className="historia-image" />
        <div className="historia-content">
          <h2><strong>Nossa história</strong></h2>
          <p>
            A paixão por automóveis nasce junto com o sócio proprietário e fundador Alã mari menegazzo, aos 11 anos de idade após a perda prematura de seu pai. 
            <br></br>
            Iniciou o primeiro emprego como lavador, manobrista e ajudante geral em uma revenda de veiculos em sua cidade natal constantina-rs. Com o passar dos anos, sua paixão pelo setor automobilístico o levou a crescer dentro do ramo, adquirindo experiência e consolidando seu nome no mercado. 
            <br></br>
            Assim, a loja se estabeleceu na cidade de Não-Me-Toque, onde segue atendendo com excelência e compromisso.
          </p>
        </div>
      </div>

      <div className="historia-container2">
        <img src="/loja3.jpg" alt="Foto da Loja 2" className="historia-image2" />
        <div className="historia-content">
          <h2><strong>Nossos valores</strong></h2>
          <p>
            ✅ Qualidade: Trabalhamos com rigor na seleção de veículos e na prestação de serviços, garantindo a confiança dos nossos clientes.
            <br></br>
            ✅ Transparência: Nosso compromisso é com a honestidade e transparência em todas as etapas da negociação.
            <br></br>
            ✅ Satisfação do Cliente: Nosso maior objetivo é garantir que cada cliente saia satisfeito e confiante com sua escolha de veículo.
            
          </p>
        </div>
      </div>

      <div className="historia-container2">
        <img src="/loja4.jpg" alt="Foto da Loja 3" className="historia-image" />
        <div className="historia-content">
          <h2><strong>Missão e visão</strong></h2>
          <p>
            🔹 Missão: Nossa missão é proporcionar aos nossos clientes a melhor experiência de compra, com veículos que atendam às suas necessidades, orçamento e estilo de vida. Acreditamos na confiança e em um relacionamento duradouro com nossos clientes.
            <br></br>
            🔹 Visão: Ser referência no mercado de veículos, destacando-se pela excelência no atendimento, pela qualidade dos produtos e pelo compromisso com a satisfação total de nossos clientes.
            
          </p>
        </div>
      </div>

      <section className="redes">
        <h1 className="redes-title">Acesse nossas redes sociais</h1>
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
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
