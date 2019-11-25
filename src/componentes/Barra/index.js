import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

class Barra extends React.Component {
    render() {
      return (
        <div className="barra">
            {this.props.children}
        </div>
      )
    }
  }
  export default Barra