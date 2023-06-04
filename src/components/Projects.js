import { ThemeProvider } from "@emotion/react";
import { Paper, Typography, createTheme } from "@mui/material";
import React from "react";
import CardProject from "./CardProject";
import WeatherAppImage from "../images/weatherapp.png";

const ProjectTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FEF5ED",
          textAlign: "center",
          padding: "2.5%",
          margin: "5%",
          marginTop:'1% '
        },
      },
    },
  },
});
function Project() {
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
          <Typography variant="h4" sx={{ paddingBottom: "0" }}>
            Projetos
          </Typography>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <CardProject
              image={WeatherAppImage}
              alt={"Weather App image"}
              title={"Weather App"}
              text={
                "Site para verificar o clima de uma localização específica, feito com o objetivo de estudar CI/CD e fazer deploy automatizado utilizando o github actions. Aplicação com CI/CD e consumindo api de clima."
              }
              linkTest={"https://rafaelnepomuceno00.github.io/weather-app/"}
              linkRepo={"https://github.com/rafaelnepomuceno00/weather-app"}
            />
            <CardProject
              image={WeatherAppImage}
              alt={"Edital Verifier image"}
              title={"Edital Verifier"}
              text={
                "Aplicação web em construção com o objetivo de verificar a página de editais de universidades públicas para saber se houve atulização. Aplicação com CI/CD, sistema de autenticação e sistema de pagamento"
              }
              linkTest={"https://editalverifier.web.app/"}
            />
            <CardProject
              image={WeatherAppImage}
              alt={"Landing Page image"}
              title={"Landing Page"}
              text={
                "Landing page construída a pedido de um cliente com o objetivo de converter e captar clientes. Aplicação com CI/CD e construída com design responsivo."
              }
              linkTest={"https://rafaelnepomuceno00.github.io/weather-app/"}
            />
          </Paper>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default Project;
