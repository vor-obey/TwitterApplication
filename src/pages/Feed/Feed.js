import React, {Component} from "react";
import "./Feed.sass";
import {Posts} from "../../components/Posts/Posts";
import {connect} from "react-redux";
import {createPost, getPosts} from "../../data/store/posts/postAction";
import CreatePost from "../../components/CreatePost/CreatePost";
import {getAllUsers, getCurrentUser} from "../../data/store/user/userActions";


class Feed extends Component {

  componentDidMount() {
    this.props.getPosts();
    this.props.getAllUsers();

   return this.props.currentUser !== null ? null : this.props.getCurrentUser()

  }


  render() {
    const {currentUser, createPost, getUserId, posts} = this.props;
    return (
      <div className="feed">

        <CreatePost
          currentUser={currentUser}
          createPost={createPost}
        />
        {posts.length !== 0
          ? <Posts getUserId={getUserId} posts={posts}/>
          : <p className="warning-message">No posts found...</p>
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  posts: state.posts.posts,
  users: state.users.users
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (text, id, userImg, name, email) => dispatch(createPost(text, id, userImg, name, email)),
  getPosts: () => dispatch(getPosts()),
  getCurrentUser: () => dispatch(getCurrentUser()),
  getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



