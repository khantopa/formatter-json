import Head from "next/head";
import Prettier from "@components/Prettier";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import CSVContent from "@/components/Contents/CSVContent";
import { Container } from "@mui/material";
import PageTitle from "@/components/PageTitle";
import CSVPageContent from "@/components/Contents/CSVPageContent";

export default function JsonToCSV() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Convert JSON to CSV or Excel Online: Simple and Efficient</title>
        <meta name="author" content="JsonFormatter" />
        <meta
          name="description"
          content="Convert JSON to CSV or Excel online with our user-friendly tool. Streamline data transformation and analysis with this quick and efficient solution."
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
          title="Convert JSON Object to CSV Online"
          description="Convert your JSON data to CSV format with our online tool. Simply paste
          your JSON data and our tool will generate a CSV file for you to
          download."
        />

        <Prettier />
        <div className="content-ad"></div>
        <CSVPageContent />
        <div className="footer-ad"></div>
        <Footer />
      </main>
    </>
  );
}
