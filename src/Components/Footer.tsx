import { Container } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#424242",
        padding: "30px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <div className="container mx-auto">
        <p className="text-center">
          &copy; 2023 formatterJSON.com All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
