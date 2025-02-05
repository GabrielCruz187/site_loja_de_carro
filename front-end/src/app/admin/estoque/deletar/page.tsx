
'use client'


import { useState, useEffect } from 'react';

interface Car {
  _id: string; // Identificador único do MongoDB
  modelo: string;
  marca: string;
  ano: number;
  foto: string; // URL da foto do carro (opcional)
}

export default function DeletarCarro() {
  const [carros, setCarros] = useState<Car[]>([]);
  const [carroSelecionado, setCarroSelecionado] = useState<string | null>(null);

  useEffect(() => {
    // Aqui você deve buscar os carros no backend
    const fetchCarros = async () => {
      const response = await fetch('http://localhost:3001/api/carros');
      const data = await response.json();
      setCarros(data);
    };

    fetchCarros();
  }, []);

  const handleDeletarCarro = async () => {
    if (!carroSelecionado) {
      alert('Por favor, selecione um carro para deletar.');
      return;
    }

    const response = await fetch(`http://localhost:3001/api/carros/${carroSelecionado}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Carro deletado com sucesso!');
      setCarros(carros.filter(carro => carro._id !== carroSelecionado));
      setCarroSelecionado(null);
    } else {
      alert('Erro ao deletar carro.');
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Deletar Carro</h1>
      <p>Selecione um carro para deletar.</p>

      <select
        className="mt-4 p-2 border border-gray-300 rounded"
        value={carroSelecionado ?? ''}
        onChange={e => setCarroSelecionado(e.target.value)}
      >
        <option value="">Selecione um carro</option>
        {carros.map(carro => (
          <option key={carro._id} value={carro._id}>
            {carro.modelo} - {carro.marca} ({carro.ano})
          </option>
        ))}
      </select>

      <button
        className="mt-4 p-2 bg-red-500 text-white rounded"
        onClick={handleDeletarCarro}
      >
        Deletar
      </button>
    </main>
  );
}
