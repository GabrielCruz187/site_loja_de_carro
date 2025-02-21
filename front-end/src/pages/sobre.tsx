import { useEffect } from "react";
import "../styles/Sobre.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  useEffect(() => {
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
            Tudo começou em 2010, quando um grupo de empreendedores apaixonados por inovação decidiu transformar uma simples ideia em realidade. 
            <br></br>
            Com muita dedicação e foco, fundamos a [Nome da Empresa], com o propósito de oferecer soluções que realmente fazem a diferença. 
            <br></br>
            O caminho não foi fácil, mas cada desafio nos fortaleceu. Hoje, com anos de experiência e uma equipe altamente capacitada, 
            seguimos crescendo e impactando vidas.
          </p>
        </div>
      </div>

      <div className="historia-container2">
        <img src="/loja3.jpg" alt="Foto da Loja 2" className="historia-image2" />
        <div className="historia-content">
          <h2><strong>Nossos valores</strong></h2>
          <p>
            ✅ Compromisso com a qualidade - Garantimos sempre o melhor para nossos clientes.
            <br></br>
            ✅ Inovação contínua - Buscamos novas ideias para evoluir constantemente.
            <br></br>
            ✅ Transparência e ética - Atuamos com honestidade e respeito em todas as relações.
            <br></br>
            ✅ Foco no cliente - Cada decisão que tomamos visa a melhor experiência para quem confia em nós.
          </p>
        </div>
      </div>

      <div className="historia-container2">
        <img src="/loja4.jpg" alt="Foto da Loja 3" className="historia-image" />
        <div className="historia-content">
          <h2><strong>Missão e visão</strong></h2>
          <p>
            🔹 Missão: Transformar desafios em soluções inovadoras, criando produtos e serviços que melhorem a vida das pessoas.
            <br></br>
            🔹 Visão: Ser referência no mercado e impactar milhões de pessoas, tornando a tecnologia mais acessível e eficiente para todos.
            <br></br>
            Seguimos firmes nesse propósito, construindo um futuro onde cada inovação traga benefícios reais para nossos clientes e parceiros.
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
