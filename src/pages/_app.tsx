import '../styles/global.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={`${inter.variable} font-sans`}>
    <GoogleAnalytics gaId="G-MQN3EXMBB9" />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
