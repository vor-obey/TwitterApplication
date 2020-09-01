import React, {Component} from 'react';
import {createBrowserHistory} from "history";

import './App.css';
import {Auth} from "./containers/Auth/Auth";
import MainContainer from "./containers/MainContainer/MainContainer";
import {BrowserRouter} from "react-router-dom";
import {getUserData} from "./getUserData";

const history = createBrowserHistory();

class App extends Component {
  state = ({
    isLogin: null
  });

  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus = async () => {
    const isLogin = !!localStorage.getItem("token-data");
    this.setState({isLogin});

    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

    if (!isLogin && !code) {
      history.push("/");
      return;
    }

    // TODO: Check url
    if (!isLogin && code) {
      const user = getUserData(code);

      if (user) {
        this.setState({isLogin}, () => {
          // TODO: Set user in the redux store
          history.push("/profile");
        });
      } else {
        // TODO display error to a user
      }
    }
  };

  handleLogout = () => {
    this.setState({
      isLogin: false
    })
  }

  render() {
    console.log(this.state.isLogin)
    if (this.state.isLogin === null) {
      return null;
    }

    return (
      <BrowserRouter history={history}>
        {!this.state.isLogin
          ? <Auth/>
          : <MainContainer handleLogout={this.handleLogout}/>}
      </BrowserRouter>
    );
  }
}

export default App;
