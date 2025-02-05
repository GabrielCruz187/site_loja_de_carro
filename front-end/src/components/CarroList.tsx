import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Carro {
    _id: string;
    modelo: string;
    marca: string;
    ano: number;
    foto?: string;
}

const CarroList = () => {
    const [carros, setCarros] = useState<Carro[]>([]);

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                const response = await axios.get('/api/carros');
                setCarros(response.data);
            } catch (error) {
                console.error('Erro ao carregar os carros:', error);
            }
        };
        fetchCarros();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/api/carros/${id}`);
            setCarros(carros.filter((carro) => carro._id !== id));
        } catch (error) {
            console.error('Erro ao excluir o carro:', error);
        }
    };

    return (
        <div>
            <h2>Carros no Estoque</h2>
            <table>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map((carro) => (
                        <tr key={carro._id}>
                            <td>{carro.modelo}</td>
                            <td>{carro.marca}</td>
                            <td>{carro.ano}</td>
                            <td>
                                <Link href={`/admin/estoque/editar/${carro._id}`}>Editar</Link>
                                <button onClick={() => handleDelete(carro._id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarroList;
