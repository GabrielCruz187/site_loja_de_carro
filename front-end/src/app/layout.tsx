import  Header  from '@/components/Header'; // Importe seu Header
import '../styles/globals.css'; // Estilos globais

export const metadata = {
  title: 'Catálogo de Carros',
  description: 'Explore o melhor catálogo de carros da região',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <Header /> {/* Usa o componente Header */}
        <main className="container mx-auto py-8 px-6">{children}</main>
        <footer className="bg-black text-white py-4 text-center">
          <p>© 2024 Catálogo de Carros - Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

  
  