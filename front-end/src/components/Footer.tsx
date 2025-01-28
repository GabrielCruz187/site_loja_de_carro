import Image from 'next/image';
import '../styles/Footer.css'; // Importe o arquivo CSS do Footer

export default function Footer() {
  return (
    <footer>
      {/* Logo no canto esquerdo */}
      <div className="logo">
        <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
      </div>

      {/* Texto de direitos reservados no centro */}
      <div className="footer-text">© Todos os direitos reservados</div>
    </footer>
  );
}
