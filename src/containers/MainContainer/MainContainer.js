import React, {Component} from "react";
import "./MainContainer.sass";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import {Switch, Route,} from "react-router";
import AllUsers from "../../components/AllUsers/AllUsers";
import UserProfile from "../../components/UserProfile/UserProfile";

class MainContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <NavigationMenu/>

        <Switch>
          <Route exact path="/" render={props => (
            <UserProfile handleLogout={this.props.handleLogout}/>
          )}/>
          <Route exact path="/users" component={AllUsers}/>
        </Switch>

      </div>
    )
  }
}

export default MainContainer;