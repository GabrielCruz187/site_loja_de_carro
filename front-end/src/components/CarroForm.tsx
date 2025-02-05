import { useState } from 'react';
import axios from 'axios';

interface CarroFormProps {
    carro?: { modelo: string, marca: string, ano: number, foto?: string };
    onSubmit: () => void;
}

const CarroForm = ({ carro, onSubmit }: CarroFormProps) => {
    const [modelo, setModelo] = useState(carro?.modelo || '');
    const [marca, setMarca] = useState(carro?.marca || '');
    const [ano, setAno] = useState(carro?.ano || 2020);
    const [foto, setFoto] = useState(carro?.foto || '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (carro) {
                await axios.put(`/api/carros/${carro._id}`, { modelo, marca, ano, foto });
            } else {
                await axios.post('/api/carros', { modelo, marca, ano, foto });
            }
            onSubmit();
        } catch (error) {
            console.error('Erro ao salvar o carro:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Modelo</label>
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
            </div>
            <div>
                <label>Marca</label>
                <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} required />
            </div>
            <div>
                <label>Ano</label>
                <input type="number" value={ano} onChange={(e) => setAno(Number(e.target.value))} required />
            </div>
            <div>
                <label>Foto (URL)</label>
                <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} />
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default CarroForm;
