import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Paper,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
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
let h2Style = createTheme();
h2Style = responsiveFontSizes(h2Style);
function Home(props) {
  return (
    <>
      <ThemeProvider theme={HomeTheme}>
        <Paper id="home">
          <ThemeProvider theme={h2Style}>
            <Typography
              variant="h2"
              sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {props.language === "ptbr"
                ? "Olá, eu sou Rafael Nepomuceno!"
                : "Hello, I am Rafael Nepomuceno!"}
            </Typography>
          </ThemeProvider>
          <Typography variant="h5" sx={{ paddingTop: "5%" }}>
            {props.language === "ptbr"
              ? "Um desenvolvedor web focado em Frontend construindo a parte visual e lógica de sites e aplicações web."
              : "A web developer focused on frontend builds the visual and logical aspects of websites and web applications."}
          </Typography>
          <br />
          <ThemeProvider theme={theme}>
            <Button
              sx={{ marginRight: "1%" }}
              variant="contained"
              href={props.language === "ptbr" ? "#projetos" : "#projects"}
            >
              {props.language === "ptbr" ? "Projetos" : "Projects"}
            </Button>
            <Button
              variant="contained"
              href={props.language === "ptbr" ? "#contato" : "#contact"}
            >
              {props.language === "ptbr" ? "Contato" : "Contact"}
            </Button>
          </ThemeProvider>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default Home;
