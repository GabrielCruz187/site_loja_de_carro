import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const [descricaoVisivel, setDescricaoVisivel] = useState(false);
  const [imagemPrincipal, setImagemPrincipal] = useState<string | null>(null);
  const [agrupadasVisiveis, setAgrupadasVisiveis] = useState(false);
  const [indiceImagemCarrossel, setIndiceImagemCarrossel] = useState(0);

  useEffect(() => {
    async function fetchCarro() {
      if (id) {
        const response = await fetch(`https://site-loja-de-carro-backend.onrender.com/api/carros/${id}`);
        const data: Carro = await response.json();
        setCarro(data);
        setImagemPrincipal(data.foto); // Usando apenas o nome da imagem sem URL
      }
    }
    fetchCarro();
  }, [id]);

  useEffect(() => {
    if (carro?.fotos && carro.fotos[indiceImagemCarrossel]) {
      setImagemPrincipal(carro.fotos[indiceImagemCarrossel]); // Vai mudar para a imagem clicada no carrossel
    }
  }, [indiceImagemCarrossel, carro]);

  const toggleDescricao = () => {
    setDescricaoVisivel(!descricaoVisivel);
  };

  const toggleAgrupadas = () => {
    setAgrupadasVisiveis(!agrupadasVisiveis);
  };

  const irParaImagemAnterior = () => {
    if (carro?.fotos?.length) {
      setIndiceImagemCarrossel((prevIndex) =>
        prevIndex === 0 ? carro.fotos.length - 1 : prevIndex - 1
      );
    }
  };

  const irParaImagemProxima = () => {
    if (carro?.fotos?.length) {
      setIndiceImagemCarrossel((prevIndex) =>
        prevIndex === carro.fotos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    if (carro?.fotos && carro.fotos[indiceImagemCarrossel]) {
      setImagemPrincipal(carro.fotos[indiceImagemCarrossel]);
    }
  }, [indiceImagemCarrossel, carro]);

  if (!carro) {
    return <p>Carregando detalhes do carro...</p>;
  }

  const precoFormatado = carro.preco
  ? `R$ ${carro.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  : "Preço indisponível";

  return (
    <div>
      <Header />
      <div className="ContainerWrapper">
        <div className="Container">
          <div className="Titulo">
            <h1 className="Marca">{carro.marca}</h1>
            <h2 className="Modelo">{carro.modelo}</h2>
          </div>

          <div className="CarroDetalhes">
            <div className="Carrossel">
              <div className="Miniaturas">
                {carro.fotos &&
                  carro.fotos.slice(0, 4).map((foto, index) => (
                    <Image
                      key={index}
                      src={foto} // Usando o nome da imagem
                      alt={`Imagem ${index + 1}`}
                      width={115}
                      height={70}
                      className="MiniaturaImagem"
                      onClick={() => setImagemPrincipal(foto)} // Atualiza a imagem principal com o nome da imagem
                      style={{
                        cursor: "pointer",
                        border:
                          imagemPrincipal === foto
                            ? "2px solid #FC6700"
                            : "none",
                      }}
                    />
                  ))}

                {carro.fotos.length > 4 && (
                  <div
                    className="AgrupamentoMiniaturas"
                    onClick={toggleAgrupadas}
                  >
                    <span>+{carro.fotos.length - 4}</span>
                  </div>
                )}

                {agrupadasVisiveis &&
                  carro.fotos.slice(4).map((foto, index) => (
                    <Image
                      key={index + 4}
                      src={foto} // Usando o nome da imagem
                      alt={`Imagem ${index + 5}`}
                      width={115}
                      height={70}
                      className="MiniaturaImagem"
                      onClick={() => setImagemPrincipal(foto)} // Atualiza a imagem principal com o nome da imagem
                      style={{
                        cursor: "pointer",
                        border:
                          imagemPrincipal === foto
                            ? "2px solid #FC6700"
                            : "none",
                      }}
                    />
                  ))}
              </div>

              {/* Imagem Principal */}
              <div className="ImagemPrincipal">
                {imagemPrincipal && (
                  <Image
                    src={imagemPrincipal} // Usando o nome da imagem
                    alt={carro.modelo}
                    width={720}
                    height={420}
                    className="ImagemPrincipal"
                  />
                )}
              </div>
            </div>

            <div className="DetalhesContainer">
              <h3 className="Detalhes">Detalhes do Carro</h3>

              <div className="Descricao">
                <p><strong>Quilometragem:</strong> {carro.quilometragem} KM</p>
                <p><strong>Cor:</strong> {carro.cor}</p>
                <p><strong>Combustível:</strong> {carro.combustivel}</p>
                <p><strong>Placa:</strong> {carro.placa}</p>
                <p><strong>Câmbio:</strong> {carro.cambio}</p>
                <p><strong>Ano:</strong> {carro.ano}</p>
              </div>

              <div className="Preco">
                <h2>{precoFormatado}</h2>
              </div>

              <div className="BotaoCompra">
                <a href="https://wa.me/5554996357891" target="_blank" rel="noopener noreferrer">
                  <button className="botao">Estou Interessado</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="DescricaoTitulo" onClick={toggleDescricao}>
        <h2>Descrição do veículo</h2>
        {descricaoVisivel ? (
          <ChevronUp size={24} color="#FC6700" />
        ) : (
          <ChevronDown size={24} color="#FC6700" />
        )}
      </div>

      {descricaoVisivel && (
        <div className="DescricaoContainer">
          <p>{carro.descricao}</p>
        </div>
      )}

      <h1 className="redes-title">Acesse nossas redes sociais</h1>
      <div className="social-icons">
        <a href="https://www.instagram.com/ala.automoveis/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/ala.automoveis/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://wa.me/5554996357891" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.png" alt="WhatsApp" className="social-icon" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
