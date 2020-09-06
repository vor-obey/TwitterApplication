import React, {Component} from "react";
import "./UserProfile.sass";
import CreatePost from "../CreatePost/CreatePost";
import {Posts} from "../Posts/Posts";
import {connect} from "react-redux";
import {getCurrentUser} from "../../data/store/user/userActions";
import {createPost, getPostsCurrentUser} from "../../data/store/posts/postAction";
import {Loader} from "../Loader/Loader";
import {Button} from "../../Button/Button";
import {getPosts} from "../../data/store/posts/postAction";


class UserProfile extends Component {

  state = ({
    allPosts: true
  })

  componentDidMount() {
    if (this.props.currentUser !== null) {
      return null
    } else {
      this.props.getCurrentUser()
      this.props.getPosts()
    }
  }

  getAllPosts = () => {
    this.setState({
      allPosts: true
    })
  }

  getUserPosts = () => {
   const currentUserId = this.props.currentUser.id;
   const posts = this.props.posts.filter(post => +post.creatorId === currentUserId);
   this.props.getPostsCurrentUser(posts);
   this.setState({
     allPosts: false
   })
  }

  dateRegistration = () => {
    const fullDate = this.props.currentUser.created_at;
    return fullDate.slice(0,10)
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
            <span className={this.state.allPosts ? "active" : ""} onClick={this.getAllPosts}>Tweets</span>
            <span className={!this.state.allPosts ? "active" : ""} onClick={this.getUserPosts}>My tweets</span>
          </p>


          <CreatePost
            currentUser={this.props.currentUser}
            createPost={this.props.createPost}
          />

          {this.props.loadingPosts
            ? <Loader/>
            : (this.state.allPosts ? <Posts posts={this.props.posts}/> : <Posts posts={this.props.postsCurrentUser}/>)
          }

        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  loading: state.users.loading,
  posts: state.posts.posts,
  loadingPosts: state.posts.loading,
  postsCurrentUser: state.posts.postsCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  getCurrentUser: () => dispatch(getCurrentUser()),
  createPost: (text, id, userImg, name, email) => dispatch(createPost(text, id, userImg, name, email)),
  getPostsCurrentUser: (posts) => dispatch(getPostsCurrentUser(posts))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
