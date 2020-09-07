import React, {Component} from "react";
import "./Feed.sass";
import {Posts} from "../../components/Posts/Posts";
import {connect} from "react-redux";
import {createPost, getPosts} from "../../data/store/posts/postAction";
import CreatePost from "../../components/CreatePost/CreatePost";
import {getCurrentUser} from "../../data/store/user/userActions";


class Feed extends Component {

  componentDidMount() {
    this.props.getPosts();

    if (this.props.currentUser !== null) {
      return null;
    } else {
      this.props.getCurrentUser();
    }
  }

  render() {
    const {currentUser, createPost, getUserId, posts } = this.props;
    return (
      <div className="feed">

        <CreatePost
          currentUser={currentUser}
          createPost={createPost}
        />

        <Posts getUserId={getUserId} posts={posts}/>

      </div>
    )
  }
}

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
    posts: state.posts.posts,
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (text, id, userImg, name, email) => dispatch(createPost(text, id, userImg, name, email)),
  getPosts: () => dispatch(getPosts()),
  getCurrentUser: () => dispatch(getCurrentUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



