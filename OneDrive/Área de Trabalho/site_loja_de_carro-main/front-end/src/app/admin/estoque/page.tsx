import { useEffect, useState } from 'react';

interface Car {
  name: string;
  model: string;
  price: string;
}

export default function EstoquePage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    // Fazendo uma chamada para a API (ou backend) para buscar todos os carros
    fetch('/api/cars')
      .then((response) => response.json())
      .then((data) => setCars(data.cars)); // Aqui você vai ter que adaptar de acordo com a sua API
  }, []);

  return (
    <div>
      <h1>Estoque de Carros</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.name} - {car.model} - R$ {car.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
