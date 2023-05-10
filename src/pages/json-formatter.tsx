import Head from "next/head";
import { Inter } from "next/font/google";
import Prettier from "../components/Prettier";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Typography from "@mui/material/Typography";

export default function JsonFormatter() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          JSON Formatter - Convert JSON to TypeScript, PHP, YAML, CSV and more |
          formatterjson.com
        </title>
        <meta name="author" content="JsonFormatter" />
        <meta
          name="description"
          content="Online JSON Formatter / Beautifier and JSON Validator will format JSON data, and helps to validate, convert JSON to Typescript, JSON to PHP, JSON to YAML, JSON to CSV."
        />
        <meta
          name="keywords"
          content="json formatter, formatter json, json validator, online json formatter, json formatter online, format json, json to typescript, json to csv, json to , TypeScript, PHP, YAML, CSV, format, convert, online, tool, minify, beautify"
        />
      </Head>
      <main>
        <NavBar />
        <div className="top-ad"></div>
        <Typography
          variant="h1"
          color="#e65100"
          fontSize={36}
          fontWeight="500"
          margin="16px"
        >
          JSON Formatter
        </Typography>
        <Prettier />
        <div className="footer-ad"></div>
        <Footer />
      </main>
    </>
  );
}
