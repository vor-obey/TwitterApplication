import React, {Component} from "react";
import "./Home.sass";
import {connect} from "react-redux";

import {Posts} from "../../components/Posts/Posts";
import {Loader} from "../../components/Loader/Loader";
import {Button} from "../../Button/Button";

import {getCurrentUser} from "../../data/store/user/userActions";
import {getPosts} from "../../data/store/posts/postAction";
import {Link} from "react-router-dom";

class Home extends Component {

  componentDidMount() {
    this.props.getPosts();

    if (this.props.currentUser !== null) {
      return null;
    } else {
      this.props.getCurrentUser();
    }
  }

  dateRegistration = () => {
    const dateRegistration = this.props.currentUser.created_at;
    return dateRegistration.slice(0,10)
  }

  render() {
    if (this.props.loading) {
      return <Loader/>
    } else {
      const {name, avatar_url, email, login, public_repos} = this.props.currentUser;
      return (
        <div className="user-profile">
          <h2>{name}</h2>

          <Button
            styleBtn={"log-out"}
            link={"/login"}
            onClick={() => this.props.handleLogout(false)}
            text={"Log out"}/>

          <div className="background-user-logo">
            <img className="user-logotype"
                 src={avatar_url}
                 alt="Url not found"/>
          </div>

          <div className="user-profile-data">
            <h2 className="user-profile-data-name">{name}</h2>
            <p>{email ? email : login}</p>
            <p><i className="far fa-calendar-alt"/>On GitHub since {this.dateRegistration()}</p>
            <p>{ name} is a developer with {public_repos} public repositories  </p>
          </div>

          <p className="users-tweets">
            <span>Tweets</span>
          </p>

          {this.props.loadingPosts
            ? <Loader/>
            : this.props.postsCurrentUser.length !==0
             ? <Posts posts={this.props.postsCurrentUser}/>
             : <p className="warning-message">You haven’t Tweeted any posts yet.
                Follow <Link to="/feed">this link</Link> to create your first post</p>
          }

        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  loading: state.users.loading,
  loadingPosts: state.posts.loading,
  postsCurrentUser: state.posts.postsCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  getCurrentUser: () => dispatch(getCurrentUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
