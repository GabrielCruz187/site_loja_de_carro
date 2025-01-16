

import type { AppProps } from 'next/app';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      
      <Component {...pageProps} /> {/* Conteúdo da página */}
    </div>
  );
}

export default MyApp;


