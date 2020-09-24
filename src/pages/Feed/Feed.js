import React, {Component} from "react";
import "./Feed.sass";
import {Posts} from "../../components/Posts/Posts";
import {connect} from "react-redux";
import {createPost, getPosts} from "../../data/store/posts/postAction";
import CreatePost from "../../components/CreatePost/CreatePost";
import {getAllUsers} from "../../data/store/user/userActions";

class Feed extends Component {

  componentDidMount() {
    this.props.getAllUsers();
    this.props.getPosts();
  }

  render() {
    const {currentUserId, createPost, posts, users} = this.props;
    const user = users.filter(user => user.id === currentUserId)[0];

    return (
      <div className="feed">

        <h2 className="feed-title">Feed</h2>

        <CreatePost
          user={user}
          createPost={createPost}
        />

        <Posts
          posts={posts}
          currentUserId={currentUserId}
        />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  users: state.users.users,
  currentUserId: state.users.currentUserInfo.id,
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (text, id, userImg, name, email) => dispatch(createPost(text, id, userImg, name, email)),
  getAllUsers: () => dispatch(getAllUsers()),
  getPosts: () => dispatch(getPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)



