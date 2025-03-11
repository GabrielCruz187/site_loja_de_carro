import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://site-loja-de-carro-backend.onrender.com/api/carros"); // Ajuste a URL conforme necessário
    if (!response.ok) throw new Error("Erro ao buscar carros");
    const data = await response.json();
    return NextResponse.json(data);
  } 
  catch (error) {
    let errorMessage = "Erro desconhecido";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
