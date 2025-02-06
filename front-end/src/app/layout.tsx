import Header from '@/components/Header'; 
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import VeiculosDestaque from '@/components/VeiculosDestaque';
import { Historia } from '@/components/Historia';
import { Feedback } from '@/components/Feedback';
import { Localizacao } from '@/components/Localizacao';
import { Redes } from '@/components/Redes';
import '../styles/globals.css';

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
        <main>
        <Banner />
        <VeiculosDestaque />
        <Historia />
        <Feedback />
        <Localizacao />
        <Redes />
      </main>
        <Footer />
      </body>
    </html>
  );
}
