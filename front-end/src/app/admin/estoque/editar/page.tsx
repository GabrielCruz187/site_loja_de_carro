'use client'

import { useState, useEffect } from "react";
import '@/styles/editar.css';

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
      const response = await fetch("https://site-loja-de-carro-backend.onrender.com/api/carros");
      const data = await response.json();
      setCarros(data);
    }
    fetchCarros();

    document.body.style.background = ""; // Clear background style
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

    const response = await fetch(`https://site-loja-de-carro-backend.onrender.com/api/carros/${carroSelecionado._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carroSelecionado),
    });

    setCarros((prevCarros) =>
      prevCarros.map((carro) =>
        carro._id === carroSelecionado._id ? carroSelecionado : carro
      )
    );

    setCarroSelecionado(null);
  };

  return (
    <main className="main">
      <h1 className="Titulo1">Editar Carros</h1>
      <p className="Texto">Selecione um carro para editar.</p>
      <ul>
        {carros.map((carro) => (
          <li
            key={carro._id}
            className="Selecionar"
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
        <div className="Formulario">
          <h2 className="Editar">
            Editar {carroSelecionado.modelo}
          </h2>
          <input
            type="text"
            name="modelo"
            value={carroSelecionado.modelo}
            onChange={handleChange}
            className="Modelo"
          />
          <input
            type="text"
            name="marca"
            value={carroSelecionado.marca}
            onChange={handleChange}
            className="Marca"
          />
          <input
            type="number"
            name="ano"
            value={carroSelecionado.ano}
            onChange={handleChange}
            className="Numero"
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
          <div className="Checkbox">
            <input
              type="checkbox"
              name="destaque"
              checked={carroSelecionado.destaque}
              onChange={handleChange}
              className="Destaque"
            />
            <label>Destacar na página principal</label>
          </div>

          <button
            onClick={handleSave}
            className="Salvar"
          >
            Salvar
          </button>
          <button
            onClick={() => setCarroSelecionado(null)}
            className="Cancelar"
          >
            Cancelar
          </button>
        </div>
      )}
    </main>
  );
}
