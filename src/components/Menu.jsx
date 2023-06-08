import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const pages = ["list", "achievements", "completed"];

function AppMenu() {
  const [isOpenNav, setIsOpenNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setIsOpenNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsOpenNav(null);
  };

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pl: 2,
          pr: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={logo} alt="logo" width={40} />

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to=""
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Not bored tasks
          </Typography>
        </Box>

        <Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={isOpenNav}
              open={Boolean(isOpenNav)}
              onClose={handleCloseNavMenu}
              sx={{
                "& ul": { p: 0 },
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <StyledLink to={page.toLowerCase()}>{page}</StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page.toLowerCase()}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default AppMenu;
