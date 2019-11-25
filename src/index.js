import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

import Barra from "./componentes/Barra"
import Logo from "./componentes/Logo"
import BotonAyuda from "./componentes/BotonAyuda"
import BotonHorario from "./componentes/BotonHorario"
import BotonInicio from "./componentes/BotonInicio"
import CuadroCeleste1 from "./componentes/CuadroCeleste1"
import CuadroCeleste2 from "./componentes/CuadroCeleste2"
import Input from "./componentes/Input1"
import Input2 from "./componentes/Input2"
import Input3 from "./componentes/Input3"
import Texto1 from "./componentes/Texto1"
import BotonIngreso from "./componentes/BotonIngreso"
import Texto2 from "./componentes/Texto2"
import Texto3 from "./componentes/Texto3"
import Texto4 from "./componentes/Texto4"
import Texto5 from "./componentes/Texto5"
import Icono1 from "./componentes/Icono1"
import Icono2 from "./componentes/Icono2"
import Icono3 from "./componentes/Icono3"
import Icono4 from "./componentes/Icono4"
import Icono5 from "./componentes/Icono5"



const App = () => {
  return(
    <div>
      <Barra>
        <div style={{display: "flex"}}>
          <Logo></Logo>
          <BotonInicio></BotonInicio>
          <BotonAyuda></BotonAyuda>
          <BotonHorario></BotonHorario>
        </div>
      </Barra>
      <div style={{marginTop: "10rem", color: "transparent"}}></div>
      <CuadroCeleste1>
        <Texto1>
          {"Código"}
        </Texto1>
        <Input></Input>
        <Texto1>
          {"Usuario"}
        </Texto1>
        <Input2></Input2>
        <Texto1>
          {"Contraseña"}
        </Texto1>
        <Input3></Input3>
        <BotonIngreso></BotonIngreso>
        <div style={{width: "10px", height: "25px"}}></div>
        <Texto2>
          {"Olvidé mi contraseña"}
        </Texto2>
      </CuadroCeleste1>
      <div style={{width: "10px", height: "20px"}}></div>
      <CuadroCeleste2>
        <Texto3>
          {"SEGURIDAD"}
        </Texto3>
        <Texto4>
        </Texto4>
        <Texto5></Texto5>
      </CuadroCeleste2>
      <Icono1></Icono1>
      <Icono2></Icono2>
      <Icono3></Icono3>
      <Icono4></Icono4>
      <Icono5></Icono5>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"))