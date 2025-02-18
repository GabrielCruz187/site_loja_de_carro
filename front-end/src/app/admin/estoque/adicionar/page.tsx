"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import '@/styles/adicionar.css';

const AdicionarCarro = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [foto, setFoto] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState(""); // Novo campo para descrição
  const [quilometragem, setQuilometragem] = useState(""); // Novo campo para quilometragem
  const [cor, setCor] = useState(""); // Novo campo para cor
  const [combustivel, setCombustivel] = useState(""); // Novo campo para combustível
  const [placa, setPlaca] = useState(""); // Novo campo para placa
  const [cambio, setCambio] = useState(""); // Novo campo para câmbio
  const [fotos, setFotos] = useState(""); // Novo campo para mais fotos
  const router = useRouter(); // Hook para navegação

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar dados para o backend com os novos campos
    const res = await fetch('http://localhost:3001/api/carros', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marca,
        modelo,
        ano,
        foto: `/${foto}`,
        preco,
        descricao, // Enviando descrição
        quilometragem, // Enviando quilometragem
        cor, // Enviando cor
        combustivel, // Enviando combustível
        placa, // Enviando placa
        cambio, // Enviando câmbio
        fotos: fotos.split(",") // Supondo que o dono da loja informe as fotos separadas por vírgula
      }),
    });

    if (res.ok) {
      router.push("/admin/estoque"); // Redireciona para a página de estoque
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
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Modelo</label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Ano</label>
          <input
            type="text"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Foto</label>
          <input
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Preço</label>
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descricao" className="Texto">Descrição</label>
          <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Quilometragem</label> {/* Novo campo para quilometragem */}
          <input
            type="text"
            value={quilometragem}
            onChange={(e) => setQuilometragem(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Cor</label> {/* Novo campo para cor */}
          <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Combustível</label> {/* Novo campo para combustível */}
          <input
            type="text"
            value={combustivel}
            onChange={(e) => setCombustivel(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Placa</label> {/* Novo campo para placa */}
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Câmbio</label> {/* Novo campo para câmbio */}
          <input
            type="text"
            value={cambio}
            onChange={(e) => setCambio(e.target.value)}
          />
        </div>
        <div>
          <label className="Texto">Fotos (Separe as URLs por vírgula)</label> {/* Novo campo para mais fotos */}
          <input
            type="text"
            value={fotos}
            onChange={(e) => setFotos(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </main>
  );
};

export default AdicionarCarro;