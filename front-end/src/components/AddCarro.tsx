import { useState } from 'react';
import axios from 'axios';

const AddCarro = () => {
  const [modelo, setModelo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [ano, setAno] = useState('');
  

  // Função para enviar os dados do formulário para a API
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const novoCarro = {
      modelo,
      descricao,
      preco,
      ano,
      
    };

    try {
      await axios.post('https://site-loja-de-carro-backend.onrender.com/carros', novoCarro);
      alert('Carro adicionado com sucesso!');
      // Resetar os campos do formulário
      setModelo('');
      setDescricao('');
      setPreco('');
      setAno('');
      
    } catch (err) {
      alert('Erro ao adicionar carro.');
    }
  };

  return (
    <div>
      <h3>Adicionar Carro</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="modelo">Modelo</label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ano">Ano</label>
          <input
            type="number"
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Adicionar Carro</button>
      </form>
    </div>
  );
};

export default AddCarro;

