import React from 'react';
import '../styles/veiculos-destaque.css';

const VeiculosDestaque = () => {
  return (
    <section className="veiculos-destaque">
      {/* Título e Botão */}
      <div className="veiculos-destaque-header">
        <h1 className="veiculos-destaque-title">Explore os carros mais incríveis</h1>
        <button className="veiculos-destaque-button">Ver Estoque</button>
      </div>

      {/* Cards de Carros */}
      <div className="veiculos-destaque-cards">
        {/* Card 1 */}
        <div className="veiculo-card">
          <img src="s10.jpg" alt="Carro 1" />
          <div className="veiculo-card-hover">Ver Carro!</div>
          <div className="veiculo-card-content">
            <h3 className="veiculo-card-title">S10</h3>
            <p className="veiculo-card-text">R$ 35.000</p>
            <p className="veiculo-card-text">Ano: 2021</p>
          </div>
        </div>

     

        {/* Card 2 */}
        <div className="veiculo-card">
          <img src="jeep.jpg" alt="Carro 2" />
          <div className="veiculo-card-hover">Ver Carro!</div>
          <div className="veiculo-card-content">
            <h3 className="veiculo-card-title">Jeep</h3>
            <p className="veiculo-card-text">R$ 40.000</p>
            <p className="veiculo-card-text">Ano: 2020</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="veiculo-card">
          <img src="up.jpg" alt="Carro 3" />
          <div className="veiculo-card-hover">Ver Carro!</div>
          <div className="veiculo-card-content">
            <h3 className="veiculo-card-title">Up</h3>
            <p className="veiculo-card-text">R$ 45.000</p>
            <p className="veiculo-card-text">Ano: 2022</p>
          </div>
        </div>

        </div>
      

      

      {/* Bolinhas de Controle */}
      <div className="bolinhas-controle">
        <span className="bolinha"></span>
        <span className="bolinha"></span>
        <span className="bolinha"></span>
      </div>
    </section>
  );
};

export default VeiculosDestaque;
