'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import AddCarro from '../../../components/AddCarro'

interface Carro {
  _id: string;
  modelo: string;
  descricao: string;
  preco: number;
  ano: number;
}

const EstoquePage = () => {
  const [carros, setCarros] = useState<Carro[]>([]);

  // Função para carregar carros da API
  const fetchCarros = async () => {
    try {
      const response = await axios.get('http://localhost:3001/carros');
      setCarros(response.data);
    } catch (err) {
      console.error('Erro ao carregar carros:', err);
    }
  };

  const handleEdit = (id: string) => {
    console.log(`Editar carro com ID: ${id}`);
    // Lógica para edição
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/carros/${id}`);
      fetchCarros(); // Recarregar lista após exclusão
    } catch (err) {
      console.error('Erro ao excluir carro:', err);
    }
  };

  useEffect(() => {
    fetchCarros();
  }, []);

  return (
    <div>
      <h2>Gerenciamento de Estoque de Carros</h2>

      <AddCarro /> {/* Componente para adicionar carros */}

      <h3>Lista de Carros</h3>
      <ul>
        {carros.map(carro => (
          <li key={carro._id}>
            <h4>{carro.modelo}</h4>
            <p>{carro.descricao}</p>
            <p>{carro.preco}</p>
            <p>{carro.ano}</p>
            {/* Botões de editar e excluir */}
            <button onClick={() => handleEdit(carro._id)}>Editar</button>
            <button onClick={() => handleDelete(carro._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EstoquePage;



