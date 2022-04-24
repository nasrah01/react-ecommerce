import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { departments } from "../../redux/reducers/items";
import { useDispatch } from "react-redux";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "14px",
  "@media (min-width:1400px)": {
    fontSize: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const pages = ["women's clothing", "men's clothing", "jewelery", "electronics"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
   const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu bar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link to="/department" style={{ textDecoration: "none" }} key={page} onClick={() => dispatch(departments(page))}><MenuItem onClick={handleCloseNavMenu}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h3" textAlign="center">
                        {page}
                      </Typography>
                    </ThemeProvider>
                  </MenuItem></Link>
                ))}
              </Menu> 
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                },
              }}
            >
              {pages.map((page) => (
                <Link to="/department" style={{ textDecoration: "none" }} key={page} onClick={() => dispatch(departments(page))}><Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mr: 2, ml: 2, color: "#fff", display: "block" }}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h3" textAlign="center">
                      {page}
                    </Typography>
                  </ThemeProvider>
                </Button></Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
