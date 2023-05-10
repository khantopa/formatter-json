import { Container, Link, ListItemText, Typography } from "@mui/material";
import PHPContent from "./PHPContent";
import CSVContent from "./CSVContent";
import YAMLContent from "./YAMLContent";
import MinifyContent from "./MinifyContent";
import PrettierContent from "./PrettierContent";
import TypeScriptContent from "./TypescriptContent";

function Content() {
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Typography
        variant="h1"
        color="#e65100"
        fontSize={36}
        fontWeight="500"
        margin="16px 0 8px"
      >
        Format and Convert JSON Online
      </Typography>
      <Typography>
        Use{" "}
        <Link href="https://formatterjson.com" hrefLang="english">
          formatterjson.com
        </Link>{" "}
        to easily format and convert JSON data to various formats. Our tool
        supports the following features:
      </Typography>
      <ul>
        <ListItemText>JSON to TypeScript interface conversion</ListItemText>
        <ListItemText>JSON to PHP code conversion</ListItemText>
        <ListItemText>JSON to CSV conversion</ListItemText>
        <ListItemText>JSON to YAML conversion</ListItemText>
        <ListItemText>JSON minification</ListItemText>
        <ListItemText>JSON formatting</ListItemText>
      </ul>
      <br />
      <TypeScriptContent />
      <br />
      <PHPContent />
      <br />
      <CSVContent />
      <br />
      <YAMLContent />
      <br />
      <MinifyContent />
      <br />
      <PrettierContent />
      <br />
    </Container>
  );
}

export default Content;
