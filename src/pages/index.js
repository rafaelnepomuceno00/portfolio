import * as React from "react";
import theme from "../theme";
import ResponsiveAppBar from "../components/AppBar";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import useLanguage from "../language";
import "./style.css";

const IndexPage = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar language={language} toggleLanguage={toggleLanguage} />
        <Container maxWidth="xl">
          <Home language={language} />
          <About language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
