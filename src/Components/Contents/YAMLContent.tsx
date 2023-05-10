import { Box, Typography } from "@mui/material";

export default function YAMLContent() {
  return (
    <>
      <Typography
        variant="h2"
        color="#e65100"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON to YAML
      </Typography>
      <Typography>
        Convert your JSON data to YAML format with our online tool. Simply paste
        your JSON data and our tool will generate YAML code for you.
      </Typography>
      <br />

      <pre>
        <code className="language-yaml">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          name: "John"
          <br />
          age: 30
          <br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          city: "New York"
        </code>
      </pre>
    </>
  );
}
