import React, {Component} from "react";
import "./Feed.sass";
import {Posts} from "../../components/Posts/Posts";
import {connect} from "react-redux";
import {createPost} from "../../data/store/posts/postAction";
import CreatePost from "../../components/CreatePost/CreatePost";


class Feed extends Component {
  render() {
    return (
      <div className="feed">

        <CreatePost
          currentUser={this.props.currentUser}
          createPost={this.props.createPost}
        />

        <Posts getUserId={this.props.getUserId} posts={this.props.posts}/>

      </div>
    )
  }
}

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
    posts: state.posts.posts
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (text, id, userImg, name, email) => dispatch(createPost(text, id, userImg, name, email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



