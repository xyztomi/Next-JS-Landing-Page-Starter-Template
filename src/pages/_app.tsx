import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={`${inter.variable} font-sans`}>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
