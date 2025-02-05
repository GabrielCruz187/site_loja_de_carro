// src/app/admin/estoque/adicionar.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Corrigido: Importando de next/navigation
import AdminLayout from "../../layout"; // Importando o layout administrativo

const AdicionarCarro = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [foto, setFoto] = useState("");
  const router = useRouter(); // Agora 'useRouter' vem de next/navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar dados para o backend (exemplo de requisição POST)
    const res = await fetch('http://localhost:3001/api/carros', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ marca, modelo, ano, foto }),
    });

    if (res.ok) {
      router.push("/admin/estoque"); // Redireciona para a página de estoque após adicionar
    } else {
      alert("Erro ao adicionar carro.");
    }
  };

  return (
    <AdminLayout>
      <h1>Adicionar Carro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marca</label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div>
          <label>Modelo</label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div>
          <label>Ano</label>
          <input
            type="text"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>
        <div>
          <label>Foto</label>
          <input
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </AdminLayout>
  );
};

export default AdicionarCarro;

