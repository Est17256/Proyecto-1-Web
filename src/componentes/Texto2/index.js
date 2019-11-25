import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

  class Texto2 extends React.Component {
    render() {
      return (
        <div className="texto2">
          {this.props.children}
        </div>
      )
    }
  }
  export default Texto2