import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode; // Definindo que o layout espera um prop 'children' do tipo ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>Painel Administrativo</h1>
        {/* Adicione aqui links de navegação do painel */}
      </header>
      <div className="admin-main">
        <aside className="admin-sidebar">
          {/* Menu lateral de navegação */}
        </aside>
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;






  