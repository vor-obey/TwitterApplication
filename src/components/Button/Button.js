import React, {Component} from "react";
import "./Button.sass";
import {Link} from "react-router-dom";

export class Button extends Component {
  render() {

    const {link, onClick, text, styleBtn} = this.props;

    return (
      <div className={`main-button ${styleBtn}`}>
        <Link to={link} onClick={onClick}>{text}</Link>
      </div>
    )
  }
}
