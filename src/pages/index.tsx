import Head from 'next/head';

import Content from '@components/Contents';
import Prettier from '@components/Prettier';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import PageTitle from '@/components/PageTitle';

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>
          Format JSON - Online Converter for JSON to TypeScript, PHP, YAML, CSV
          and more | formatterjson.com
        </title>
        <meta name='author' content='JsonFormatter' />
        <meta
          name='description'
          content='Online JSON Formatter / Beautifier and JSON Validator will format JSON data, and helps to validate, convert JSON to Typescript, JSON to PHP, JSON to YAML, JSON to CSV.'
        />
        <meta
          name='keywords'
          content='json formatter, formatter json, json validator, online json formatter, json formatter online, format json, json to typescript, json to csv, json to , TypeScript, PHP, YAML, CSV, format, convert, online, tool, minify, beautify'
        />
      </Head>
      <main>
        <div>
          <NavBar />
          <div className='top-ad'></div>

          <PageTitle
            title='Online JSON Converter and Formatter'
            description='Simplify your JSON data with our online converter and formatter. With just a few clicks, you can transform your JSON data into a more organized and easy-to-read format.'
          />

          <Prettier />
          <div className='ad-before-content'></div>
          <Content />
          <div className='footer-ad'></div>
          <Footer />
        </div>
      </main>
    </>
  );
}
