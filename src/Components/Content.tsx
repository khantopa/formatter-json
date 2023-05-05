import { Container, Link, ListItemText, Typography } from "@mui/material";

const jsonData = { name: "John Doe", age: 30 };

function Content() {
  return (
    <Container style={{ margin: "40px 0" }}>
      <Typography
        variant="h1"
        color="#1976d2"
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
      <Typography
        variant="h2"
        color="#1976d2"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON to TypeScript
      </Typography>
      <Typography>
        Convert your JSON data to TypeScript interfaces with our online tool.
        Simply paste your JSON data and our tool will generate TypeScript
        interfaces for you.
      </Typography>
      <pre>
        <code className="language-json">
          {`{"name":"something","age":30,"city":"New York"}`}
        </code>
      </pre>
      to
      <pre>
        <code className="language-typescript">
          {`
interface IRoot {
  name: string;
  age: number;
  city: string;
}
`}
        </code>
      </pre>
      <br />
      <Typography
        variant="h2"
        color="#1976d2"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON to PHP
      </Typography>
      <Typography>
        Convert your JSON data to PHP arrays with our online tool. Simply paste
        your JSON data and our tool will generate PHP code for you.
      </Typography>
      <pre>
        <code className="language-json">
          {`{"name":"something","age":30,"city":"New York"}`}
        </code>
      </pre>
      to
      <pre>
        <code className="language-php">
          {`
<?php 
$arrayVar = [
  "name" => "John",
  "age" => 30,
  "city" => "New York"
]`}
        </code>
      </pre>
      <br />
      <Typography
        variant="h2"
        color="#1976d2"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON to CSV
      </Typography>
      <Typography>
        Convert your JSON data to CSV format with our online tool. Simply paste
        your JSON data and our tool will generate a CSV file for you to
        download.
      </Typography>
      <pre>
        <code className="language-json">
          {`{"name":"something","age":30,"city":"New York"}`}
        </code>
      </pre>
      to
      <pre>
        <code className="language-csv">
          name,age,city <br />
          John,30,New York
        </code>
      </pre>
      <br />
      <Typography
        variant="h2"
        color="#1976d2"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON to YAML
      </Typography>
      <Typography>
        Convert your JSON data to YAML format with our online tool. Simply paste
        your JSON data and our tool will generate YAML code for you.
      </Typography>
      <pre>
        <code className="language-json">
          {`{"name":"something","age":30,"city":"New York"}`}
        </code>
      </pre>
      to
      <pre>
        <code className="language-yaml">
          name: "John"
          <br />
          age: 30
          <br />
          city: "New York"
        </code>
      </pre>
      <br />
      <Typography
        variant="h2"
        color="#1976d2"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON Minify
      </Typography>
      <Typography>
        Minify your JSON data with our online tool. Simply paste your JSON data
        and our tool will remove all unnecessary whitespace and comments to make
        your JSON code more compact.
      </Typography>
      <pre>
        <code className="language-json">
          {`
{
  "name": "John",
  "age": 30,
  "city": "New York"
}`}
        </code>
      </pre>
      to
      <pre>
        <code className="language-json">
          {`{"name":"John","age":30,"city":"New York"}`}
        </code>
      </pre>
      <br />
      <Typography
        variant="h2"
        color="#1976d2"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON Format
      </Typography>
      <Typography>
        Format your JSON data with our online tool. Simply paste your JSON data
        and our tool will apply indentation, line breaks and formatting to make
        your JSON code more readable.
      </Typography>
      <pre>
        <code className="language-json">
          {`{"name":"something","age":30,"city":"New York"}`}
        </code>
      </pre>
      to
      <pre>
        <code className="language-json">
          {`{
  "name": "John",
  "age": 30,
  "city": "New York"
}`}
        </code>
      </pre>
      <br />
    </Container>
  );
}

export default Content;
