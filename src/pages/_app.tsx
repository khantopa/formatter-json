import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-XCMZ0BC59E'
      ></Script>
      <Script strategy='lazyOnload'>
        {`
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
 
   gtag('config', 'G-XCMZ0BC59E');
  `}
      </Script>
      <Component {...pageProps} />{' '}
    </>
  );
}
