import LayoutWrapper from './LayoutWrapper'; // Importa o wrapper
import '../styles/globals.css';

export const metadata = {
  title: 'Alã Automóveis',
  description: 'Explore o melhor catálogo de carros da região',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
