import { Container, Typography } from "@mui/material";
import { FC } from "react";

interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, description }) => {
  return (
    <Container style={{ margin: "40px auto" }}>
      <Typography variant="h1" color="#e65100" fontSize={36} fontWeight="500">
        {title}
      </Typography>
      <Typography fontSize={12}>{description}</Typography>
    </Container>
  );
};

export default PageTitle;
