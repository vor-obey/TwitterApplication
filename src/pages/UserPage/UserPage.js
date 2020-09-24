import React, {Component} from "react";
import User from "../../components/User/User";
import {connect} from "react-redux";
import {getAllUsers} from "../../data/store/user/userActions";
import {getPosts} from "../../data/store/posts/postAction";

class UserPage extends Component {

  componentDidMount() {
    this.props.getAllUsers();
    this.props.getPosts();
  }

  render() {
    const path = window.location.href.split("/");
    const userId = Number(path[path.length-1]);

    const {users, posts, postsLoading, userLoading, currentUserId} = this.props;
    const user = users.filter(user => user.id === userId)[0];
    const userPosts = posts.filter(post => +post.creatorId === userId)
    return (
      <User
      user={user}
      posts={userPosts}
      postsLoading={postsLoading}
      userLoading={userLoading}
      currentUserId={currentUserId}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  posts: state.posts.posts,
  currentUserId: state.users.currentUserInfo.id,
  postsLoading: state.posts.loading,
  userLoading: state.users.loading,
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getPosts: () => dispatch(getPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

