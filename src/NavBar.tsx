import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          disabled
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Formatter JSON
        </Typography>
        <Button color="inherit" disabled>
          Prettier
        </Button>
        <Button color="inherit" disabled>
          PHP
        </Button>
        <Button color="inherit" disabled>
          YAML
        </Button>
        <Button color="inherit" disabled>
          TYPESCRIPT
        </Button>
        <Button color="inherit" disabled>
          Minify
        </Button>
        <Button color="inherit" disabled>
          CSV
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
