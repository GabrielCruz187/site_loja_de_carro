import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const carData = await request.json();

  // Salve o carro no banco de dados (aqui só estamos simulando)
  // Você pode integrar isso com um banco de dados real, como o PostgreSQL
  console.log('Carro Adicionado:', carData);

  return NextResponse.json({ message: 'Carro adicionado com sucesso' }, { status: 201 });
}
