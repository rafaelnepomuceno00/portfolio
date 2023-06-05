import { ThemeProvider } from "@emotion/react";
import { Paper, Typography, createTheme } from "@mui/material";
import React from "react";
import CardProject from "./CardProject";
import WeatherAppImage from "../images/weatherapp.png";
import HarvardAppImage from "../images/hmuseum.png";
import MemoryGameImage from "../images/memorygame.png";

const ProjectTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FEF5ED",
          textAlign: "center",
          padding: "1%",
          margin: "5%",
        },
      },
    },
  },
});
function Project(props) {
  return (
    <>
      <ThemeProvider theme={ProjectTheme}>
        <Paper
          id="projetos"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            id="projects"
            variant="h4"
            sx={{ paddingBottom: "0", margin: "0px" }}
          >
            {props.language === "ptbr" ? "Projetos" : "Projects"}
          </Typography>
          <Paper
            elevation={0}
            sx={{
              margin: "0",
              paddingTop: "1px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <CardProject
              language={props.language}
              image={WeatherAppImage}
              alt={"Weather App image"}
              title={"Weather App"}
              text={
                props.language === "ptbr"
                  ? "Site para verificar o clima de uma localização específica, feito com o objetivo de estudar CI/CD e fazer deploy automatizado utilizando o github actions. Aplicação com CI/CD e consumindo api de clima."
                  : "Website to check the weather of a specific location, made with the purpose of studying CI/CD and performing automated deployment using GitHub Actions. An application with CI/CD and consuming a weather API."
              }
              linkTest={"https://rafaelnepomuceno00.github.io/weather-app/"}
              linkRepo={"https://github.com/rafaelnepomuceno00/weather-app"}
            />

            <CardProject
              language={props.language}
              image={MemoryGameImage}
              alt={"Memory Game image"}
              title={"Memory Game"}
              text={
                props.language === "ptbr"
                  ? "Jogo da memória criado com o intuito de ensinar termos do idioma inglês para crianças, trabalho desenvolvido para minha monografia utilizando HTML, CSS e JavaScript."
                  : "Memory game created with the intention of teaching English terms to children, a project developed for my thesis using HTML, CSS, and JavaScript."
              }
              linkTest={"https://jogodamemoria-5ccd1.web.app/"}
              linkRepo={"https://github.com/rafaelnepomuceno00/memoryGame"}
            />
            <CardProject
              language={props.language}
              image={HarvardAppImage}
              alt={"Harvard Museum image"}
              title={"Harvard Museum"}
              text={
                props.language === "ptbr"
                  ? "Site que consome a API do museu de Harvard, nele é possível explorar as artes presentes no museu. Site feito utilizando javaScript puro, para entender a complexidade de se fazer componentes reativos manualmente."
                  : "Website that consumes the Harvard Museum API, where you can explore the artworks present in the museum. The site is built using pure JavaScript to understand the complexity of creating reactive components manually."
              }
              linkTest={"https://harvardmuseum-e5355.web.app/"}
              linkRepo={"https://github.com/rafaelnepomuceno00/Harvard-Museum"}
            />
          </Paper>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default Project;
