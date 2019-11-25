import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

class Input3 extends React.Component {
  render() {
    return (
      <input className="inside" required="" pattern="number" type="text" maxLength="30" placeholder="Contraseña"></input>
    )
  }
}
export default Input3