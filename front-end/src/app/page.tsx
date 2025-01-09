 
import Banner from '@/components/Banner';
import VeiculosDestaque from '@/components/VeiculosDestaque';
import {Historia} from '@/components/Historia';
import {Feedback} from '@/components/Feedback';
import {Localizacao} from '@/components/Localizacao';
import {Footer} from '@/components/Footer';
import '../styles/globals.css';




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
      </main>
      <Footer />
    </div>
  );
}



