import '../styles/Redes.css'

export function Redes () {
  return (
    <section className='redes'>
      <h1 className="redes-title">Acesse nossas redes sociais</h1> {/* Adicionando a classe aqui */}
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
  );
}
