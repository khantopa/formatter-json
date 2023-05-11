import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "./Logo";
import { ButtonGroup, styled } from "@mui/material";
import Link from "next/link";

const StyledNavBar = styled(AppBar)({
  width: "100%",
  overflow: "hidden",
  "@media (max-width: 600px)": {
    display: "flex",
    justifyContent: "center",
  },
});

const StyledButtonGroup = styled(ButtonGroup)({
  "@media (max-width: 600px)": {
    display: "none",
  },
});

function NavBar() {
  return (
    <StyledNavBar position="static" color="transparent">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Link href="/">
            <Logo style={{ width: 36, height: 50 }} />
          </Link>
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">Formatter JSON</Link>
        </Typography>

        <StyledButtonGroup variant="text" color="inherit">
          <Link href="/json-prettier">
            <Button color="inherit">Prettier</Button>
          </Link>
          <Link href="/json-to-php">
            <Button color="inherit">PHP</Button>
          </Link>
          <Link href="/json-to-yaml">
            <Button color="inherit">YAML</Button>
          </Link>
          <Link href="/json-to-typescript">
            <Button color="inherit">TYPESCRIPT</Button>
          </Link>
          <Link href="/json-minify">
            <Button color="inherit">Minify</Button>
          </Link>
          <Link href="/json-to-csv">
            <Button color="inherit">CSV</Button>
          </Link>
        </StyledButtonGroup>
      </Toolbar>
    </StyledNavBar>
  );
}

export default NavBar;
