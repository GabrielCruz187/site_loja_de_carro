// src/components/AddCarForm.tsx
import { useState } from 'react';

function AddCarForm() {
  const [carData, setCarData] = useState({ name: '', model: '', price: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você vai fazer uma chamada para sua API para enviar os dados para o backend
    // Exemplo de envio de dados com fetch ou axios
    const response = await fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

    if (response.ok) {
      alert('Carro adicionado com sucesso!');
    } else {
      alert('Erro ao adicionar carro.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome do Carro"
        value={carData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Modelo"
        value={carData.model}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Preço"
        value={carData.price}
        onChange={handleChange}
      />
      <button type="submit">Adicionar Carro</button>
    </form>
  );
}

export default AddCarForm;
