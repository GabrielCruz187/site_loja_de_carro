// src/app/admin/page.tsx
import Link from 'next/link';

const AdminPage = () => {
  return (
    <div>
      <h1>Painel de Administração</h1>
      <nav>
        <ul>
          <li>
            <Link href="/admin/estoque">Gerenciar Estoque de Carros</Link>
          </li>
          <li>
            <Link href="/admin/usuarios">Gerenciar Usuários</Link>
          </li>
          {/* Outros links de administração */}
        </ul>
      </nav>
    </div>
  );
};

export default AdminPage;

  