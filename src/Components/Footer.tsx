import { Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#424242",
        padding: "40px 20px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography>
        &copy; 2023 formatterJSON.com All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
