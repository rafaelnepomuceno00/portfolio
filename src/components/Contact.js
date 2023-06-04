import { ThemeProvider } from "@emotion/react";
import { Avatar, Paper, Typography, createTheme } from "@mui/material";
import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import whatsapp from "../images/whatsapp.png";

const ContactTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FEF5ED",
          textAlign: "center",
          padding: "5%",
          margin: "5%",
        },
      },
    },
  },
});
function Contact() {
  return (
    <>
      <ThemeProvider theme={ContactTheme}>
        <Paper id="contato">
          <Typography
            variant="h4"
            sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            Entre em contato:
          </Typography>
          <Paper
            elevation={0}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="https://www.linkedin.com/in/rafael-nepomuceno/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar alt="Linkedin" src={linkedin} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="https://github.com/rafaelnepomuceno00"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar alt="Github" src={github} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="mailto:rafaelnepomuce00@gmail.com"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar alt="email" src={email} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="https://web.whatsapp.com/send?phone=5538991624199"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar alt="whatsapp" src={whatsapp} />
            </Typography>
          </Paper>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default Contact;
