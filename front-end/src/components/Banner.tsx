import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        {/* Título chamativo */}
        <h1 className="banner-title">Venha nos conhecer!</h1>
      </div>

      {/* Imagem do Banner */}
      <div className="banner-image">
        <img
          src="/bannr.webp" // Coloque o caminho correto da sua imagem
          alt="Banner de Carro"
        />
      </div>
    </div>
  );
};

export default Banner;

