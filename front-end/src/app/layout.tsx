// layout.tsx
import LayoutWrapper from './LayoutWrapper';
import '../styles/globals.css';

export const metadata = {
  title: 'Alã Automóveis',
  description: 'Explore o melhor catálogo de carros da região',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta tag de verificação do Facebook */}
        <meta
          name="facebook-domain-verification"
          content="h00hev5t5isgq80pmkn2l4d5k5tssg"
        />

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

        {/* Kommo Button Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(a,m,o,c,r,m){
                a[m] = {
                  id:"1054153",
                  hash:"9b467ccd251e9232748b85c956ca474622c86ca48b6bee27a90018b4e9bce95f",
                  locale:"pt",
                  setMeta:function(p){this.params=(this.params||[]).concat([p])}
                };
                a[o] = a[o] || function(){(a[o].q=a[o].q||[]).push(arguments)};
                var d = a.document,
                    s = d.createElement('script');
                s.async = true;
                s.id = m + '_script';
                s.src = 'https://gso.kommo.com/js/button.js';
                d.head && d.head.appendChild(s)
              }(window,0,'crmPlugin',0,0,'crm_plugin'));
            `,
          }}
        />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

