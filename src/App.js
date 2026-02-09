import { Fragment } from "react/jsx-runtime";
import "./App.css";
import FormularioCadastro from "./components/formulario_cadastro/formulario_cadastro";
import { Component } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
