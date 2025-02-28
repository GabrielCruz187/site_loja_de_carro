"use client"; // Marca como Client Component para usar hooks de cliente

import { usePathname } from 'next/navigation';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import VeiculosDestaque from '@/components/VeiculosDestaque';
import { Historia } from '@/components/Historia';
import { Feedback } from '@/components/Feedback';
import { Localizacao } from '@/components/Localizacao';
import { Redes } from '@/components/Redes';
import '../styles/globals.css';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? ''; // Garante que pathname nunca seja null
  const isAdminRoute = pathname.startsWith('/admin');

  // Se for uma rota admin, renderiza apenas o children (painel admin isolado)
  // Caso contrário, renderiza o layout do site com o conteúdo
  return (
    <>
      {isAdminRoute ? (
        children // Exibe apenas o painel admin
      ) : (
        <>
          {/* Layout do site */}
          <Header />
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
        </>
      )}
    </>
  );
}
