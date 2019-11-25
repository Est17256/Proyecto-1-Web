import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

class CuadroCeleste2 extends React.Component {
    render() {
      return (
        <div className="cuadro2">
            {this.props.children}
        </div>
      )
    }
  }
  export default CuadroCeleste2