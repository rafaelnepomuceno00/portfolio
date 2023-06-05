import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import profile from "../images/profile.png";
import { Slide, useScrollTrigger } from "@mui/material";
import ptbrImage from "../images/ptbr.png";
import enusImage from "../images/enus.png";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar(props) {
  const pages =
    props.language === "ptbr"
      ? ["home", "sobre", "projetos", "contato", "ptbr"]
      : ["home", "about", "projects", "contact", "enus"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar alt="Rafael Nepomuceno" src={profile} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                {pages.map((page) => {
                  if (page === "ptbr" || page === "enus") {
                    return (
                      <MenuItem
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                        key={page.toUpperCase()}
                        onClick={() => {
                          props.toggleLanguage();
                          handleCloseNavMenu();
                        }}
                      >
                        <Button
                          key={page.toUpperCase()}
                          onClick={() => {
                            props.toggleLanguage();
                            handleCloseNavMenu();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <img
                            style={{ width: "25px", height: "15px" }}
                            src={page === "ptbr" ? ptbrImage : enusImage}
                            alt={`${page}`}
                          />
                        </Button>
                      </MenuItem>
                    );
                  } else {
                    return (
                      <MenuItem
                        key={page.toUpperCase()}
                        onClick={handleCloseNavMenu}
                      >
                        <Button
                          key={page.toUpperCase()}
                          onClick={handleCloseNavMenu}
                          sx={{ display: "block" }}
                          href={`#${page}`}
                        >
                          {page}
                        </Button>
                      </MenuItem>
                    );
                  }
                })}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="span"
              href="#home"
              sx={{
                marginLeft: "5px",
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              Rafael Nepomuceno
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => {
                if (page === "ptbr" || page === "enus") {
                  return (
                    <Button
                      key={page.toUpperCase()}
                      onClick={props.toggleLanguage}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{ width: "25px", height: "15px" }}
                        src={page === "ptbr" ? ptbrImage : enusImage}
                        alt={`${page}`}
                      />
                    </Button>
                  );
                } else {
                  return (
                    <Button
                      key={page.toUpperCase()}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                      href={`#${page}`}
                    >
                      {page}
                    </Button>
                  );
                }
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
export default ResponsiveAppBar;
