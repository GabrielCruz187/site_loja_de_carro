 
import Banner from '@/components/Banner';
import VeiculosDestaque from '@/components/VeiculosDestaque';
import {Historia} from '@/components/Historia';
import {Feedback} from '@/components/Feedback';
import {Localizacao} from '@/components/Localizacao';
import {Footer} from '@/components/Footer';
import '../styles/globals.css';
import Link from 'next/link';




export default function Home() {
  return (
    <div>
      
      <Banner>

      </Banner>
     
      
      <main>
      <VeiculosDestaque />
        <Historia />
        <Feedback />
        <Localizacao />
        <nav>
          <ul>
            <li>
              <Link href="/admin">Painel Administrativo</Link>
            </li>
          </ul>
        </nav>
      </main>
      
    </div>
  );
}



