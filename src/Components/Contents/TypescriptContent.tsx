import { Box, Typography } from "@mui/material";

export default function TypeScriptContent() {
  return (
    <>
      <Typography
        variant="h2"
        color="#e65100"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON to TypeScript Interface Generator Online
      </Typography>
      <Typography>
        Convert your JSON data to TypeScript interfaces with our online tool.
        Simply paste your JSON data and our tool will generate TypeScript
        interfaces for you.
      </Typography>
      <br />

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
    </>
  );
}
