import React, {Component} from "react";
import "./MainContainer.sass";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import {Switch, Route,} from "react-router";
import AllUsers from "../../pages/AllUsers/AllUsers";
import UserPage from "../../pages/UserPage/UserPage";
import Feed from "../../pages/Feed/Feed";
import Home from "../../pages/Home/Home";

class MainContainer extends Component {
  state = ({
    userId: null
  })

   getUserId = (id) => {
    this.setState({
      userId: id
    })
     console.log(this.state.userId)
  }

  render() {
    return (
      <div className="main-container">
        <NavigationMenu/>

        <Switch>
          <Route exact path="/" render={() => (
            <Home handleLogout={this.props.handleLogout}/>
          )}/>

          <Route exact path="/users" render={() => (
            <AllUsers getUserId={this.getUserId}/>
          )}/>

          <Route exact path={`/feed`} render={() => (
            <Feed getUserId={this.getUserId}/>
          )}/>

          <Route exact path={`/user/${this.state.userId}`} render={() => (
            <UserPage userId={this.state.userId}/>
          )}/>
        </Switch>

      </div>
    )
  }
}

export default MainContainer;