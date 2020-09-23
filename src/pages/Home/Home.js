import React, {Component} from "react";
import User from "../../components/User/User";
import {connect} from "react-redux";
import {clearError, getAllUsers} from "../../data/store/user/userActions";
import {getPosts} from "../../data/store/posts/postAction";

class Home extends Component {

  componentDidMount() {
    this.props.getAllUsers();
    this.props.getPosts();
    this.props.clearError();
  }

  render() {
    const {users, posts, currentUserId, postsLoading, userLoading} = this.props;
    const user = users.filter(user => user.id === currentUserId)[0];
    const userPosts = posts.filter(post => +post.creatorId === currentUserId)
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
  userLoading: state.users.loading
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getPosts: () => dispatch(getPosts()),
  clearError: () => dispatch(clearError())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)