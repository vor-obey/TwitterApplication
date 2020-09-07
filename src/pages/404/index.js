import React, {Component} from "react";
import "./ErrorPage.sass";

export class Index extends Component {
  render() {
    return (
      <div className="error-page">
        <p>404</p>
        <p>This page does not exist</p>
      </div>
    );
  }
}