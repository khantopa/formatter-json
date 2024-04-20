import Head from "next/head";
import Prettier from "../components/Prettier";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageTitle from "@/components/PageTitle";
import YAMLPageContent from "@/components/Contents/YAMLPageContent";

export default function JsonToYAML() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Convert JSON to YAML Online: Easy and Efficient</title>
        <meta name="author" content="JsonFormatter" />
        <meta
          name="description"
          content="Simplify the conversion of JSON to YAML with our user-friendly online tool. Transform your JSON data into YAML format effortlessly, enabling easier configuration management and data interchange."
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
          title="Convert JSON Object to YAML Online"
          description="Convert your JSON data to YAML format with our online tool. Simply paste
          your JSON data and our tool will generate YAML code for you."
        />

        <Prettier />
        <div className="content-ad"></div>
        <YAMLPageContent />
        <div className="footer-ad"></div>
        <Footer />
      </main>
    </>
  );
}
