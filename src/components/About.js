import { ThemeProvider } from "@emotion/react";
import { Button, Chip, Paper, Typography, createTheme } from "@mui/material";
import React from "react";
import theme from "../theme";

const AboutTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FEF5ED",
          textAlign: "center",
          margin: "5%",
          marginBottom: "1%",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          border: "1px solid",
          margin: "1%",
        },
      },
    },
  },
});
function About() {
  return (
    <>
      <ThemeProvider theme={AboutTheme}>
        <Paper
          id="sobre"
          sx={{
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">Sobre mim</Typography>
          <Typography variant="h6">
            Aqui você encontrará mais informações sobre mim, o que faço e minhas
            habilidades atuais, principalmente em termos de programação e
            tecnologia.
          </Typography>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: "2%",
                maxWidth: "310px",
                backgroundColor: "#D3E4CD",
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Me conheça!
              </Typography>
              <Typography
                variant="p"
                sx={{
                  textAlign: "justify",
                  paddingTop: "5%",
                  minHeight: "250px",
                }}
              >
                Sou um desenvolvedor front-end com uma capacidade excepcional de
                aprendizado rápido. Com quase 3 anos de experiência no mercado
                de programação em aplicações web, adquiri um sólido conhecimento
                em diversas linguagens e tecnologias relevantes para o
                desenvolvimento front-end. Minha paixão pela programação e minha
                sede de conhecimento me motivam constantemente a buscar novas
                habilidades e acompanhar as tendências mais recentes no campo da
                tecnologia. Estou sempre pronto para enfrentar desafios e
                entregar soluções criativas e eficientes para projetos web.
              </Typography>
              <br />
              <br />
              <ThemeProvider theme={theme}>
                <Button variant="contained" href="#contato">
                  Contato
                </Button>
              </ThemeProvider>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                minHeight: "250px",
                maxWidth: "340px",
                backgroundColor: "#D3E4CD",
              }}
            >
              <Typography sx={{ textAlign: "center" }} variant="h6">
                Minhas Skills
              </Typography>
              <br />
              <Chip label="HTML" variant="outlined" />{" "}
              <Chip label="CSS" variant="filled" />{" "}
              <Chip label="JavaScript" variant="outlined" />{" "}
              <Chip label="React" variant="filled" />{" "}
              <Chip label="Gatsby" variant="filled" />{" "}
              <Chip label="Vue" variant="outlined" />{" "}
              <Chip label="CI/CD" variant="filled" />{" "}
              <Chip label="Firebase" variant="outlined" />{" "}
              <Chip label="GIT" variant="outlined" />{" "}
              <Chip label="GitHub" variant="filled" />{" "}
              <Chip label="GitLab" variant="outlined" />{" "}
              <Chip label="Material UI" variant="filled" />{" "}
              <Chip label="Cypress" variant="filled" />{" "}
              <Chip label="Jest" variant="outlined" />{" "}
              <Chip label="Storybook" variant="filled" />{" "}
              <Chip label="Python" variant="outlined" />{" "}
            </Paper>
          </Paper>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default About;
