// layout.tsx
import LayoutWrapper from './LayoutWrapper';
import '../styles/globals.css';

export const metadata = {
  title: 'Alã Automóveis',
  description: 'Explore o melhor catálogo de carros da região',
  // Meta tag de verificação do Facebook
  other: [
    { name: 'facebook-domain-verification', content: 'h00hev5t5isgq80pmkn2l4d5k5tssg' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq) return;
                n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
                if(!f._fbq) f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '914176006941909');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=914176006941909&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
