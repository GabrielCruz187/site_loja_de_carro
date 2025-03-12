
import '@/styles/admin.css';


export default function EstoquePage() {
    return (
      <main className="p-4">
        <ul className="mt-4">
          <li><a href="/admin/estoque/adicionar" className="Gerenciamento">Adicionar Carro</a></li>
          <li><a href="/admin/estoque/editar" className="Gerenciamento">Editar Carro</a></li>
          <li><a href="/admin/estoque/deletar" className="Gerenciamento">Deletar Carro</a></li>
        </ul>
      </main>
    );
  }
  




