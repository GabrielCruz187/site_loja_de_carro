"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import '@/styles/adicionar.css';
import ImageUploader from "@/components/ImageUploader";

const AdicionarCarro = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [foto, setFoto] = useState("");  // Foto principal
  const [fotos, setFotos] = useState<string[]>([]);  // Fotos adicionais
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quilometragem, setQuilometragem] = useState("");
  const [cor, setCor] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [placa, setPlaca] = useState("");
  const [cambio, setCambio] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dados = {
      marca,
      modelo,
      ano: parseInt(ano) || 0,
      foto,  // Foto principal
      fotos,  // Fotos adicionais
      preco: parseFloat(preco) || 0,
      descricao,
      quilometragem: parseInt(quilometragem) || 0,
      cor,
      combustivel,
      placa,
      cambio,
    };

    console.log("📸 Enviando os seguintes dados:", JSON.stringify(dados, null, 2));

    const res = await fetch('https://site-loja-de-carro-backend.onrender.com/api/carros', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (res.ok) {
      router.push("/admin/estoque");
    } else {
      alert("Erro ao adicionar carro.");
    }
  };

  // Função que lida com o upload da foto principal
  const handleMainImageUpload = (urls: string[]) => {
    if (urls.length > 0) {
      setFoto(urls[0]);
    }
  };

  // Função que lida com o upload das fotos adicionais
  const handleAdditionalImagesUpload = (urls: string[]) => {
    setFotos((prevFotos) => [...prevFotos, ...urls]);
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
          <label className="Texto">Foto Principal</label>
          <ImageUploader onUpload={handleMainImageUpload} multiple={false} />
        </div>

        <div>
          <label className="Texto">Fotos Adicionais</label>
          <ImageUploader onUpload={handleAdditionalImagesUpload} multiple />
         
        </div>

        <div>
          <label className="Texto">Preço</label>
          <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Descrição</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Quilometragem</label>
          <input type="text" value={quilometragem} onChange={(e) => setQuilometragem(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Cor</label>
          <input type="text" value={cor} onChange={(e) => setCor(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Combustível</label>
          <input type="text" value={combustivel} onChange={(e) => setCombustivel(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Placa</label>
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </div>
        <div>
          <label className="Texto">Câmbio</label>
          <input type="text" value={cambio} onChange={(e) => setCambio(e.target.value)} />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </main>
  );
};

export default AdicionarCarro;

