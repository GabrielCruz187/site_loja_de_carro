'use client'

import { useState } from "react"; // Importando o hook useState
import { useRouter } from "next/navigation"; // Para navegar depois de adicionar o carro
import '@/styles/adicionar.css';
import Header from '@/components/AdminHeader';

const AdicionarCarro = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [foto, setFoto] = useState<File | null>(null); // Alterado para armazenar um arquivo de imagem
  const router = useRouter();

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(); // Usando FormData para enviar o arquivo
    formData.append('marca', marca);
    formData.append('modelo', modelo);
    formData.append('ano', ano);
    if (foto) formData.append('foto', foto); // Adicionando a foto no formData

    // Enviando os dados para o servidor
    const res = await fetch('http://localhost:3001/api/carros', {
      method: "POST",
      body: formData, // Enviando o FormData no corpo da requisição
    });

    if (res.ok) {
      router.push("/admin/estoque");
    } else {
      alert("Erro ao adicionar carro.");
    }
  };

  return (
    <main className="main">
      <h1 className="Titulo1">Adicionar Carro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="Texto">Marca</label>
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Modelo</label>
          <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Ano</label>
          <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Foto</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setFoto(e.target.files ? e.target.files[0] : null)} // Alterado para aceitar arquivos
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </main>
  );
};

export default AdicionarCarro;
