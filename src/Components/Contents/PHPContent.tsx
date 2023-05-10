import { Box, Typography } from "@mui/material";

export default function PHPContent() {
  return (
    <>
      <Typography
        variant="h2"
        color="#e65100"
        fontSize={24}
        margin="16px 0 8px"
      >
        JSON to PHP
      </Typography>
      <Typography>
        Convert your JSON data to PHP arrays with our online tool. Simply paste
        your JSON data and our tool will generate PHP code for you.
      </Typography>
      <br />

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
    </>
  );
}
