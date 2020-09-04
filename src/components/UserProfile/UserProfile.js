import React, {Component} from "react";
import "./UserProfile.sass";
import CreatePost from "../CreatePost/CreatePost";
import {Posts} from "../Posts/Posts";
import {connect} from "react-redux";
import {getCurrentUser} from "../../data/store/user/userActions";
import {Link} from "react-router-dom";
import {createPost} from "../../data/store/posts/postAction";
import {Loader} from "../Loader/Loader";
import {Button} from "../../Button/Button";


class UserProfile extends Component {



  componentDidMount() {
    if (this.props.currentUser !== null ) {
      return null
    } else {
      this.props.getCurrentUser()
    }
  }

  render() {
    if (this.props.loading) {
      return <Loader/>
    } else {
      const {name, avatar_url, email, login, created_at, public_repos} = this.props.currentUser;
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
            <p><i className="far fa-calendar-alt"/>{created_at}</p>
            <p>Repositories: {public_repos} </p>
          </div>

          <div className="users-tweets">
            <p>Tweets</p>
          </div>

          <CreatePost currentUser={this.props.currentUser} createPost={this.props.createPost}/>

          <Posts posts={this.props.posts}/>

        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  loading: state.users.loading,
  posts: state.posts.posts
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
  createPost: (text, id, userImg, name, email) => dispatch(createPost(text, id, userImg, name, email))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
