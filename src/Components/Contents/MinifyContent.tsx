import { Box, Typography } from "@mui/material";

export default function MinifyContent() {
  return (
    <>
      <Typography
        variant="h2"
        color="#e65100"
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
      <br />

      <pre>
        <code className="language-json">
          {`{"name":"John","age":30,"city":"New York"}`}
        </code>
      </pre>
    </>
  );
}
