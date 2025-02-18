import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import "@/styles/venda.css";

interface Carro {
  _id: string;
  modelo: string;
  marca: string;
  ano: number;
  foto: string;
  preco: number;
  descricao: string;
  quilometragem: string;
  cor: string;
  combustivel: string;
  placa: string;
  cambio: string;
  fotos: string[];
}

export default function Venda() {
  const router = useRouter();
  const { id } = router.query;
  const [carro, setCarro] = useState<Carro | null>(null);

  useEffect(() => {
    async function fetchCarro() {
      if (id) {
        const response = await fetch(`http://localhost:3001/api/carros/${id}`);
        const data: Carro = await response.json();
        setCarro(data);
      }
    }

    fetchCarro();
  }, [id]);

  if (!carro) {
    return <p>Carregando detalhes do carro...</p>;
  }

  const precoFormatado =
    carro.preco && !isNaN(carro.preco)
      ? `R$ ${carro.preco.toFixed(2)}`
      : "Preço indisponível";

  return (
    <div className="Layout">
      <Header />
      <main className="ContainerWrapper">
        <div className="Container">
          <div className="Titulo">
            <h1 className="Marca">{carro.marca}</h1>
            <h2 className="Modelo">{carro.modelo}</h2>
          </div>

          {/* Seção que alinha o carrossel de imagens e os detalhes */}
          <div className="CarroDetalhes">
            {/* Carrossel - Miniaturas à esquerda, Imagem Principal à direita */}
            <div className="Carrossel">
              <div className="Miniaturas">
                {carro.fotos &&
                  carro.fotos.map((foto, index) => (
                    <Image
                      key={index}
                      src={`http://localhost:3000/${foto}`}
                      alt={`Imagem ${index + 1}`}
                      width={115}
                      height={70}
                      className="MiniaturaImagem"
                    />
                  ))}
              </div>

              <div className="ImagemPrincipal">
                <Image
                  src={`http://localhost:3000/${carro.foto}`}
                  alt={carro.modelo}
                  width={720}
                  height={420}
                  className="ImagemPrincipal"
                />
              </div>
            </div>

            {/* Detalhes do carro à direita */}
            <div className="DetalhesContainer">
              <h3 className="Detalhes">Detalhes do Carro</h3>

              <div className="Descricao">
                <p>{carro.descricao}</p>
                <p><strong>Quilometragem:</strong> {carro.quilometragem} km</p>
                <p><strong>Cor:</strong> {carro.cor}</p>
                <p><strong>Combustível:</strong> {carro.combustivel}</p>
                <p><strong>Placa:</strong> {carro.placa}</p>
                <p><strong>Câmbio:</strong> {carro.cambio}</p>
              </div>

              <div className="Preco">
                <h2>{precoFormatado}</h2>
              </div>

              <div className="BotaoCompra">
                <button className="veiculos-destaque-button">Estou Interessado</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
