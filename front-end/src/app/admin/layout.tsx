// src/app/admin/layout.tsx (AdminLayout)
// src/app/admin/layout.tsx
import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <header>
        <h1>Painel Administrativo</h1>
        {/* Adicione aqui links de navegação do painel */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;




  