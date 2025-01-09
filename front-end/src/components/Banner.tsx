// src/components/Banner.tsx
import '../styles/Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      {/* Imagem do Banner */}
      <img
        src="/baner.webp" // Certifique-se de que o arquivo esteja em /public/baner.webp
        alt="Banner de carro"
        className="banner-img"
      />

      {/* Texto que aparece ao passar o mouse */}
      <div className="banner-text">
        <h2>Venha nos conhecer</h2>
      </div>
    </div>
  );
};

export default Banner;


