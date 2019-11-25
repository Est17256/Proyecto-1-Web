import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

class CuadroCeleste1 extends React.Component {
    render() {
      return (
        <div className="cuadro">
            {this.props.children}
        </div>
      )
    }
  }
  export default CuadroCeleste1