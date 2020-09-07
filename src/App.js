import React, {Component} from 'react';
import {createBrowserHistory} from "history";

import './App.css';
import {Auth} from "./pages/Auth/Auth";
import MainContainer from "./containers/MainContainer/MainContainer";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Route} from "react-router";
import {OauthCallback} from "./containers/OauthCallback/OauthCallback";
import {dateNow} from "./DateOfLastVisit/Date";

const history = createBrowserHistory();

class App extends Component {
  state = ({
    isLogin: null
  });

  componentDidMount() {
    this.checkLoginStatus();
    this.lastVisitInterval =  setInterval(this.dateLastVisit, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.lastVisitInterval);
  }

  dateLastVisit = async () => {
     const userId = +localStorage.getItem("user-id");
     await fetch(`http://localhost:3002/users/${userId}`,{
       method: "PATCH",
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body:  JSON.stringify({
         Test_date: dateNow()
       })
     });
  }


  checkLoginStatus = async () => {
    const isLogin = !!localStorage.getItem("token-data");
    this.setState({isLogin});

    if (!isLogin && !window.location.href.includes("/oauth-callback")) {
      history.replace("/login");
    }
  };

  onSuccessfullyAuth = () => {
    this.setState({isLogin: true}, () => {
      window.location.replace("/");
    });
  }

  handleLogout = (state) => {
    localStorage.clear();
    this.setState({
      isLogin: state
    })
  }

  render() {
    if (this.state.isLogin === null) {
      return null;
    }
    return (
      <Router history={history}>
        {!this.state.isLogin
          ? <Switch>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/oauth-callback" render={props => (
              <OauthCallback {...props} onSuccessfullyAuth={this.onSuccessfullyAuth}/>
            )}/>
          </Switch>
          : <MainContainer handleLogout={this.handleLogout}/>
        }
      </Router>
    );
  }
}

export default App;


