import { Box, Typography } from "@mui/material";

export default function PrettierContent() {
  return (
    <>
      <Typography
        variant="h2"
        color="#e65100"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON Prettier and Beautifier Online
      </Typography>
      <Typography>
        Format your JSON data with our online tool. Simply paste your JSON data
        and our tool will apply indentation, line breaks and formatting to make
        your JSON code more readable.
      </Typography>
      <br />

      <pre>
        <code className="language-json">
          {`{
  "name": "John",
  "age": 30,
  "city": "New York"
}`}
        </code>
      </pre>
    </>
  );
}
