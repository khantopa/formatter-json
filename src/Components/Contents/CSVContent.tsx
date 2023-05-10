import { Box, Typography } from "@mui/material";

export default function CSVContent() {
  return (
    <>
      <Typography
        variant="h2"
        color="#e65100"
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
      <br />

      <pre>
        <code className="language-csv">
          name,age,city <br />
          John,30,New York
        </code>
      </pre>
    </>
  );
}
