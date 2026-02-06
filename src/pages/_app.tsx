import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={`${inter.variable} font-sans`}>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-EJST3J8J6X"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EJST3J8J6X');
      `}
    </Script>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
