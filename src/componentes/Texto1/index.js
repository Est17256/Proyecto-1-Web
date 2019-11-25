import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

  class Texto1 extends React.Component {
    render() {
      return (
        <div className="texto1">
          {this.props.children}
        </div>
      )
    }
  }
  export default Texto1