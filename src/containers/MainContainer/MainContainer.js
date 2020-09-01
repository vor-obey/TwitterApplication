import React, {Component} from "react";
import "./MainContainer.sass";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import {AllUsers} from "../../components/AllUsers/AllUsers";
import {UserProfile} from "../../components/UserProfile/UserProfile";
import {Switch, Route, Link} from "react-router-dom";
import Tweets from "../../components/Tweets/Tweets";

class MainContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <NavigationMenu />

        <Switch>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/users" component={AllUsers}/>
        </Switch>

        <div className="log-out-btn">
          <Link to="/" onClick={this.props.handleLogout}>Log out</Link>
        </div>

      </div>
    )
  }
}

export default MainContainer;