import Head from "next/head";
import Prettier from "@components/Prettier";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

import PageTitle from "@/components/PageTitle";
import PrettierPageContent from "@/components/Contents/PrettierPageContent";

export default function JsonFormatter() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Improve Code Readability: JSON Prettier and Beautifier</title>
        <meta name="author" content="JsonFormatter" />
        <meta
          name="description"
          content="Online JSON beautifier tool to format, pretty print and organize your JSON data. Make it readable and visually appealing effortlessly."
        />
        <meta
          name="keywords"
          content="json formatter, formatter json, json validator, online json formatter, json formatter online, format json, json to typescript, json to csv, json to , TypeScript, PHP, YAML, CSV, format, convert, online, tool, minify, beautify"
        />
      </Head>
      <main>
        <NavBar />
        <div className="top-ad"></div>

        <PageTitle
          title="JSON Prettier and JSON Beautifier Online"
          description="Format your JSON data with our online tool. Simply paste your JSON data
          and our tool will apply indentation, line breaks and formatting to make
          your JSON code more readable."
        />

        <Prettier />
        <div className="content-ad"></div>
        <PrettierPageContent />
        <div className="footer-ad"></div>
        <Footer />
      </main>
    </>
  );
}
