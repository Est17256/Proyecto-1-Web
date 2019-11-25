import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

class Input2 extends React.Component {
    render() {
      return (
        <input className="inside" required="" pattern="number" type="text" maxLength="30" placeholder="Usuario"></input>
      )
    }
  }
  export default Input2