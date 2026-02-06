import { Fragment } from "react/jsx-runtime";
import "./App.css";
import FormularioCadastro from "./components/formulario_cadastro/formulario_cadastro";
import { Component } from "react";

class App extends Component{
  render() {
    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;
