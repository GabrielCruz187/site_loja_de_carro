// src/app/admin/page.tsx
export default function AdminPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Painel Administrativo</h1>
      <p>Gerencie os carros da loja aqui.</p>
      <ul className="mt-4">
        <li>
          <Link href="/admin/estoque" className="text-blue-500">
            Gerenciar Estoque
          </Link>
        </li>
      </ul>
    </main>
  );
}

  