import '../styles/historia.css'

export function Historia() {
  return (
    <div className="historia">
  {/* Título */}
  <h1 className="historia-title">Nossa História</h1>

  {/* Retângulo com conteúdo */}
  <div className="historia-container">
    {/* Foto da loja */}
    <img 
      src="/loja.jpg" 
      alt="Foto da Loja" 
      className="historia-image" 
    />

    {/* Conteúdo à direita */}
    <div className="historia-content">
      <h2>Nome da Loja</h2>
      <h3>
        Desde 2020 realizando sonhos
        <br />
        Mais de 600 veículos vendidos
      </h3>
      <button className="historia-button">Sobre Nós</button>
    </div>
  </div>
</div>

  );
}
