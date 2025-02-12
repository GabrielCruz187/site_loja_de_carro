import Image from 'next/image';
import Link from 'next/link';
import '@/styles/AdminHeader.css';

export default function Header() {
return (
    <header className="header">
      <div className="container">
      <h1 className='Titulo'>Painel Administrativo</h1>
        <div className='Voltar'>
        <Link href="/admin/estoque" className="header-nav-item">Voltar</Link>
        </div>
        <div className="logo">
          <Link href="/"> 
            <Image src="/ala.jpg" alt="Logo" width={120} height={120} />
          </Link>
        </div>
      </div>
    </header>
)}