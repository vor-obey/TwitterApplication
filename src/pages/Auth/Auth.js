import React, {Component} from "react";
import "./Auth.sass";
import {REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI} from "../../OAuthConst/OAuthConst";

export class Auth extends Component {
  render() {
    const url = `https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}`;
    return (
      <div className="auth-container">
        <div className="authorization">
          <h1>Sign in</h1>
          <button><a href={url}>Sign in with GitHub</a></button>
        </div>
      </div>
    );
  }
}