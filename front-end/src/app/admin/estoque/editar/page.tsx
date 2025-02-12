"use client";

import { useState, useEffect } from "react";

interface Car {
  _id: string;
  modelo: string;
  marca: string;
  ano: number;
  foto: string;
  destaque: boolean;
  preco: number | string; // Garantir que o preço possa ser número ou string
}

export default function EditarCarro() {
  const [carros, setCarros] = useState<Car[]>([]);
  const [carroSelecionado, setCarroSelecionado] = useState<Car | null>(null);

  useEffect(() => {
    async function fetchCarros() {
      const response = await fetch("http://localhost:3001/api/carros");
      const data = await response.json();
      setCarros(data);
    }
    fetchCarros();
  }, []);

  const handleEditClick = (carro: Car) => {
    setCarroSelecionado(carro);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (carroSelecionado) {
      const { name, type, value, checked } = e.target;
      setCarroSelecionado({
        ...carroSelecionado,
        [name]: type === "checkbox" ? checked : type === "number" ? parseFloat(value) : value,
      });
    }
  };

  const handleSave = async () => {
    if (!carroSelecionado) return;

    const response = await fetch(`http://localhost:3001/api/carros/${carroSelecionado._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carroSelecionado),
    });

    if (response.ok) {
      const updatedCarro = await response.json(); // Aguarda a resposta da API
      setCarros((prevCarros) =>
        prevCarros.map((carro) =>
          carro._id === updatedCarro._id ? updatedCarro : carro
        )
      );
    }

    setCarroSelecionado(null);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Editar Carros</h1>
      <p>Selecione um carro para editar.</p>
      <ul>
        {carros.map((carro) => (
          <li
            key={carro._id}
            className="flex justify-between items-center p-2 border-b cursor-pointer"
            onClick={() => handleEditClick(carro)}
          >
            <span>
              {carro.modelo} - {carro.marca} ({carro.ano})
            </span>
          </li>
        ))}
      </ul>

      {/* Formulário de edição */}
      {carroSelecionado && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold mb-2">
            Editar {carroSelecionado.modelo}
          </h2>
          <input
            type="text"
            name="modelo"
            value={carroSelecionado.modelo}
            onChange={handleChange}
            className="block w-full p-2 border mb-2"
          />
          <input
            type="text"
            name="marca"
            value={carroSelecionado.marca}
            onChange={handleChange}
            className="block w-full p-2 border mb-2"
          />
          <input
            type="number"
            name="ano"
            value={carroSelecionado.ano}
            onChange={handleChange}
            className="block w-full p-2 border mb-2"
          />
          <input
            type="number"
            name="preco"
            value={carroSelecionado.preco || ""} // Garantir que o valor seja uma string ou número
            onChange={handleChange}
            className="block w-full p-2 border mb-2"
            step="0.01" // Permite preços decimais
          />

          {/* Checkbox para destacar carro */}
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="destaque"
              checked={carroSelecionado.destaque}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Destacar na página principal</label>
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
          <button
            onClick={() => setCarroSelecionado(null)}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancelar
          </button>
        </div>
      )}
    </main>
  );
}
