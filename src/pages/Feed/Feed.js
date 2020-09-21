import React, {Component} from "react";
import "./Feed.sass";
import {Posts} from "../../components/Posts/Posts";
import {connect} from "react-redux";
import {createPost} from "../../data/store/posts/postAction";
import CreatePost from "../../components/CreatePost/CreatePost";
import {setCurrentUserId} from "../../data/store/user/userActions";

class Feed extends Component {

  render() {

    const {currentUserId, createPost, posts, userId, setCurrentUserId, users} = this.props;
    const user = users.filter(user => user.id === currentUserId)[0];

    return (
      <div className="feed">

        <CreatePost
          user={user}
          createPost={createPost}
        />

        <Posts
          posts={posts}
          currentUserId={currentUserId}
          id={userId}
          setCurrentUserId={setCurrentUserId}
        />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  users: state.users.users,
  currentUserId: state.users.currentUserInfo.id,
  userId: state.users.userId
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (text, id, userImg, name, email) => dispatch(createPost(text, id, userImg, name, email)),
  setCurrentUserId: (id) => dispatch(setCurrentUserId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



