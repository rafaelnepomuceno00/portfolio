import * as React from "react";
import theme from "../theme";
import ResponsiveAppBar from "../components/AppBar";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import "./style.css";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container maxWidth="xl">
          <Home />
          <About />
          <Projects />
          <Contact />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
