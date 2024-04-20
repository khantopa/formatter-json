import Head from "next/head";
import Prettier from "../components/Prettier";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageTitle from "@/components/PageTitle";
import TypescriptPageContent from "@/components/Contents/TypescriptPageContent";

export default function JsonToTypescript() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Online JSON to TypeScript Conversion: Effortless Transformation
        </title>
        <meta name="author" content="JsonFormatter" />
        <meta
          name="description"
          content="Convert JSON to TypeScript online effortlessly. Simplify your development process and seamlessly generate TypeScript interfaces and types from your JSON data."
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
          title="Convert JSON Object to Typescript Interface Online"
          description="Convert your JSON data to TypeScript interfaces with our online tool.
          Simply paste your JSON data and our tool will generate TypeScript
          interfaces for you."
        />

        <Prettier />
        <div className="content-ad"></div>
        <TypescriptPageContent />
        <div className="footer-ad"></div>
        <Footer />
      </main>
    </>
  );
}
