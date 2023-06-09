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
function About(props) {
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
          <Typography id="about" variant="h4">
            {props.language === "ptbr" ? "Sobre mim" : "About Me  "}
          </Typography>
          <Typography variant="h6">
            {props.language === "ptbr"
              ? "Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, principalmente em termos de programação e tecnologia."
              : "Here you will find more information about me, what I do, and my current skills, primarily in terms of programming and technology."}
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
                {props.language === "ptbr" ? "Me conheça!" : "Know me!"}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  textAlign: "justify",
                  paddingTop: "5%",
                  minHeight: "250px",
                }}
              >
                {props.language === "ptbr"
                  ? "Sou um desenvolvedor front-end com uma capacidade de aprendizado rápido. Com quase 3 anos de experiência no mercado de programação em aplicações web, adquiri um sólido conhecimento em diversas linguagens e tecnologias relevantes para o desenvolvimento front-end. Minha paixão pela programação e minha sede de conhecimento me motivam constantemente a buscar novas habilidades e acompanhar as tendências mais recentes no campo da tecnologia. Estou sempre pronto para enfrentar desafios e entregar soluções criativas e eficientes para projetos web."
                  : "I am a front-end developer with ability to learn quickly. With nearly 3 years of experience in the web application programming market, I have gained solid knowledge in various languages and technologies relevant to front-end development. My passion for programming and thirst for knowledge constantly motivate me to acquire new skills and keep up with the latest trends in the field of technology. I am always ready to take on challenges and deliver creative and efficient solutions for web projects."}
              </Typography>
              <br />
              <br />
              <ThemeProvider theme={theme}>
                <Button variant="contained" href="#contato">
                  {props.language === "ptbr" ? "Contato" : "Contact"}
                </Button>
              </ThemeProvider>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                padding: "2%",
                minHeight: "250px",
                maxWidth: "340px",
                backgroundColor: "#D3E4CD",
              }}
            >
              <Typography sx={{ textAlign: "center" }} variant="h6">
                {props.language === "ptbr" ? "Minhas Skills" : "My skills"}
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
