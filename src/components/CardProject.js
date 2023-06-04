import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, ThemeProvider } from "@mui/material";
import theme from "../theme";

export default function CardProject(props) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345, margin: "4%" }}>
        <CardMedia
          component="img"
          height="200"
          image={`${props.image}`}
          alt={`${props.alt}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            {props.text}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" variant="contained" href={`${props.linkTest}`}>
            Teste
          </Button>
          {props.linkRepo ? (
            <Button size="small" variant="contained" href={`${props.linkRepo}`}>
              Repositório
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
