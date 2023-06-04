import { ThemeProvider } from "@emotion/react";
import { Button, Paper, Typography, createTheme } from "@mui/material";
import React from "react";
import theme from "../theme";

const HomeTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FEF5ED",
          textAlign: "center",
          padding: "10%",
          margin: "5%",
          marginTop: "10%",
        },
      },
    },
  },
});
function Home() {
  return (
    <>
      <ThemeProvider theme={HomeTheme}>
        <Paper id="home">
          <Typography
            variant="h2"
            sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            Olá, eu sou Rafael Nepomuceno!
          </Typography>
          <Typography variant="h5" sx={{ paddingTop: "5%" }}>
            Um desenvolvedor web focado em Frontend construindo a parte visual e
            lógica de sites e aplicações web.
          </Typography>
          <br />
          <ThemeProvider theme={theme}>
            <Button
              sx={{ marginRight: "1%" }}
              variant="contained"
              href="#projetos"
            >
              Projetos
            </Button>
            <Button variant="contained" href="#contato">
              Contato
            </Button>
          </ThemeProvider>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default Home;
