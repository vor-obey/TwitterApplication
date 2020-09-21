import React, {Component} from "react";
import User from "../../components/User/User";
import {connect} from "react-redux";

class Home extends Component {

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

export default connect(mapStateToProps, null)(Home)