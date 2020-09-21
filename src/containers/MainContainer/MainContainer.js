import React, {Component} from "react";
import "./MainContainer.sass";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import {Switch, Route, Redirect} from "react-router-dom";
import AllUsers from "../../pages/AllUsers/AllUsers";
import UserPage from "../../pages/UserPage/UserPage";
import Feed from "../../pages/Feed/Feed";
import Home from "../../pages/Home/Home";
import {connect} from "react-redux";
import {getPosts} from "../../data/store/posts/postAction";
import {getAllUsers} from "../../data/store/user/userActions";

class MainContainer extends Component {

  componentDidMount() {
    this.props.getAllUsers()
    this.props.getPosts()
  }

  render() {
    const {userId} = this.props;
    const path = window.location.href.split("/");
    const id = userId ? userId : path[path.length-1];
    return (
      <div className="main-container">

        <NavigationMenu/>

        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/users" component={AllUsers}/>

          <Route exact path={`/user/${id}`} component={UserPage}/>

          <Route exact path={`/feed`} component={Feed} />

          <Redirect to="/"/>

        </Switch>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.users.userId
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);