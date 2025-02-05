export default function EstoquePage() {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold">Gerenciamento de Estoque</h1>
        <ul className="mt-4">
          <li><a href="/admin/estoque/adicionar" className="text-blue-500">Adicionar Carro</a></li>
          <li><a href="/admin/estoque/editar" className="text-blue-500">Editar Carro</a></li>
          <li><a href="/admin/estoque/deletar" className="text-blue-500">Deletar Carro</a></li>
        </ul>
      </main>
    );
  }
  




