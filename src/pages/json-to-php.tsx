import Head from "next/head";
import Prettier from "../components/Prettier";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Typography from "@mui/material/Typography";
import PHPContent from "@/components/Contents/PHPContent";
import { Container } from "@mui/material";
import PageTitle from "@/components/PageTitle";

export default function JsonToPHP() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JSON to PHP Online | formatterjson.com</title>
        <meta name="author" content="JsonFormatter" />
        <meta
          name="description"
          content="Online JSON Formatter / Beautifier and JSON Validator will format JSON data, and helps to validate, convert JSON to PHP, JSON to PHP, JSON to YAML, JSON to CSV."
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
          title="Convert JSON Object to PHP Array Online"
          description="Convert your JSON data to PHP arrays with our online tool. Simply paste
          your JSON data and our tool will generate PHP code for you."
        />

        <Prettier />
        <div className="content-ad"></div>
        <Container style={{ marginTop: 40, marginBottom: 40 }}>
          <PHPContent />
        </Container>
        <div className="footer-ad"></div>
        <Footer />
      </main>
    </>
  );
}
