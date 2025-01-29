'use client';
import Image from 'next/image';
import Link from 'next/link'; // Importe o Link
import '../styles/Footer.css'; // Importe o arquivo CSS do Footer

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <Link href="/"> 
          <Image src="/ala.jpg" alt="Logo" width={120} height={120} />
        </Link>
      </div>
      <div className="footer-text">© Todos os direitos reservados</div>
    </footer>
  );
}
