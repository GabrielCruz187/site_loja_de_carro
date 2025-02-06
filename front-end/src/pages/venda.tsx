import React, { useState } from "react";
import "../styles/venda.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import Card from '@/components/Card';
import Link from 'next/link';

export default function Venda() {
    const [mainImage, setMainImage] = useState("Camaro.jpg"); // A imagem principal do carrossel
    const [isOpen, setIsOpen] = useState(false); // Estado para a aba

    // Lista de imagens pequenas
    const images = ["Camaro.jpg", "Camaro1.jpg", "Camaro2.jpg", "Camaro3.jpg", "Camaro4.jpg", "Camaro5.jpg"];

    return (
        <div>
            <Header />
            <main>
                <div className="Layout">
                <div className="Carrossel">
                    <div className="ImagemPrincipal">
                        <img src={`/${mainImage}`} alt="Imagem principal" />
                    </div>

                    <div className="Miniaturas">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={`/${image}`} 
                                alt={`Miniatura ${index + 1}`}
                                onClick={() => setMainImage(image)} 
                                className="MiniaturaImagem"
                            />
                        ))}
                    </div>

                    <div className="Container">
                        <div className="Titulo">
                            <h2 className="Marca">Chevrolet</h2><h2 className="Modelo">Camaro SS</h2>
                        </div>
                            <h3 className="Detalhes">SS 6.2 V8 2011</h3>
                        <div>
                            <a className="Descricao">Ano do Modelo: 2011</a>
                        </div>
                        <div>
                            <a className="Descricao">Câmbio: Automático</a>
                        </div>
                        <div>
                            <a className="Descricao">Quilometragem: 39.800</a>
                        </div>
                        <div>
                            <a className="Descricao">Cor: Vermelho</a>
                        </div>
                        <div>
                            <a className="Descricao">Combustível: Gasolina</a>
                        </div>
                        <div>
                            <a className="Descricao">Placa: J*****7</a>
                        </div>
                        <div>
                            <a className="Descricao">Condição: Seminovo</a>
                        </div>

                        <div><h2 className="Preco">Preço: R$</h2></div>

                        <Link href="https://wa.me/5554996357891" passHref>
                            <button className="veiculos-destaque-button">Estou Interessado</button>
                        </Link>
                    </div>
                </div>
                </div>
                <div>
                    <h2 className="Titulo2" onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
                        Informações sobre o veículo {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </h2>
                </div> 
                {isOpen && (
    <>
                <div className="Container2">
                    <div>
                        <a className="Descricao">Ano do Modelo: 2011</a>
                    </div>
                    <div>
                        <a className="Descricao">Câmbio: Automático</a>
                    </div>
                    <div>
                        <a className="Descricao">Quilometragem: 39.800</a>
                    </div>
                    <div>
                        <a className="Descricao">Cor: Vermelho</a>
                    </div>
                    <div>
                        <a className="Descricao">Combustível: Gasolina</a>
                    </div>
                    <div>
                        <a className="Descricao">Placa: J*****7</a>
                    </div>
                    <div>
                        <a className="Descricao">Condição: Seminovo</a>
                    </div>
                    <div>
                        <a className="Descricao">Bancos: Couro</a>
                    </div>
                </div>
                </>
            )}       

                <div> 
                    <h2 className="Titulo3">Outras Sugestões</h2> 
                </div>

                <div className="veiculos-destaque-cards">
                    {/* Card 1 */}
                    <Card
                    titulo="S10"
                    descricao="R$ 35.000 | Ano: 2021"
                    imagem="s10.jpg"
                    />
                    {/* Card 2 */}
                    <Card
                    titulo="Jeep"
                    descricao="R$ 40.000 | Ano: 2020"
                    imagem="jeep.jpg"
                    />
                    {/* Card 3 */}
                    <Card
                    titulo="Up"
                    descricao="R$ 45.000 | Ano: 2022"
                    imagem="up.jpg"
                    />
                    <Card
                    titulo="Up"
                    descricao="R$ 45.000 | Ano: 2022"
                    imagem="up.jpg"
                    />
                </div>

                <div className="redes-contato-externo">
          <h2 className="redes-title">Acesse nossas redes sociais</h2>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ala.automoveis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/ala.automoveis/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://wa.me/5554996357891"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>
        
            </main>
            <Footer />
        </div>
    );
}
