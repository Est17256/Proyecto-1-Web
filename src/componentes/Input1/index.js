import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

class Input extends React.Component {
    render() {
      return (
        <input className="inside" required="" pattern="number" type="text" maxLength="30" placeholder="Código"></input>
      )
    }
  }
  export default Input