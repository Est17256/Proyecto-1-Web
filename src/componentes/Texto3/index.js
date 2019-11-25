import React from "react"
import ReactDOM from "react-dom"
import css from "./style.scss"

  class Texto3 extends React.Component {
    render() {
      return (
        <div className="texto3">
          {this.props.children}
        </div>
      )
    }
  }
  export default Texto3