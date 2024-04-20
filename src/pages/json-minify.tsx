import Head from 'next/head';
import Prettier from '@components/Prettier';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import Typography from '@mui/material/Typography';
import MinifyPageContent from '@/components/Contents/MinifyPageContent';
import { Container } from '@mui/material';
import PageTitle from '@/components/PageTitle';

export default function JsonMinifier() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>JSON Minify: Reduce File Size & Optimize Performance</title>
        <meta name='author' content='JsonFormatter' />
        <meta
          name='description'
          content='Learn how to minify JSON files effortlessly for improved performance and reduced file size. Explore efficient techniques and tools.'
        />
        <meta
          name='keywords'
          content='json formatter, formatter json, json validator, online json formatter, json formatter online, format json, json to typescript, json to csv, json to , TypeScript, PHP, YAML, CSV, format, convert, online, tool, minify, beautify'
        />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3118792387110409'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <main>
        <NavBar />
        <div className='top-ad'></div>
        <PageTitle
          title='JSON Minify Online'
          description='Minify your JSON data with our online tool. Simply paste your JSON
            data and our tool will remove all unnecessary whitespace and
            comments to make your JSON code more compact.'
        />
        <Prettier />
        <div className='content-ad'></div>
        <MinifyPageContent />
        <div className='footer-ad'></div>
        <Footer />
      </main>
    </>
  );
}
