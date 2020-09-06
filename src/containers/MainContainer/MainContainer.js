import React, {Component} from "react";
import "./MainContainer.sass";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import {Switch, Route,} from "react-router";
import AllUsers from "../../components/AllUsers/AllUsers";
import UserProfile from "../../components/UserProfile/UserProfile";
import UserPage from "../../pages/UserPage/UserPage";

class MainContainer extends Component {
  state = ({
    userId: null
  })

   getUserId = (id) => {
    this.setState({
      userId: id
    })
  }

  render() {
    return (
      <div className="main-container">
        <NavigationMenu/>

        <Switch>
          <Route exact path="/" render={() => (
            <UserProfile handleLogout={this.props.handleLogout}/>
          )}/>

          <Route exact path="/users" render={() => (
            <AllUsers getUserId={this.getUserId}/>
          )}/>

          <Route exact path={`/user`} render={() => (
            <UserPage userId={this.state.userId}/>
            )}/>
        </Switch>

      </div>
    )
  }
}

export default MainContainer;