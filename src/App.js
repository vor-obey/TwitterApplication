import React, {Component} from 'react';
import {createBrowserHistory} from "history";

import {Auth} from "./pages/Auth/Auth";
import MainContainer from "./containers/MainContainer/MainContainer";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Route} from "react-router";
import OauthCallback from "./containers/OauthCallback/OauthCallback";
import {dateLastVisit} from "./api/userApi/dateLastVisit";
import {connect} from "react-redux";
import {isLogin} from "./data/store/user/userActions";

const history = createBrowserHistory();

class App extends Component {

  componentDidMount() {
    this.checkLoginStatus();
    this.lastVisitInterval = setInterval(() => dateLastVisit(this.props.currentUserId), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.lastVisitInterval);
  }

  checkLoginStatus = async () => {
    const userToken = !!this.props.token;
    this.props.isLogin(userToken);
    if (!userToken && !window.location.href.includes("/oauth-callback")) {
      history.replace("/login");
    }
  };

  render() {
    return (
      <Router>
        {this.props.loginStatus
          ? <MainContainer/>
          : <Switch>

            <Route exact path="/login" component={Auth}/>

            <Route exact path="/oauth-callback" component={OauthCallback}/>

          </Switch>
        }
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  token: state.users.currentUserInfo.token,
  loginStatus: state.users.loginStatus,
  currentUserId: state.users.currentUserInfo.id,
})

const mapDispatchToProps = dispatch => ({
  isLogin: (value) => dispatch(isLogin(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


