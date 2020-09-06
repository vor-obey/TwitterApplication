import React, {Component} from "react";
import "./UserPage.sass";

import {connect} from "react-redux";

class UserPage extends Component {
  render() {

    const {userId, users, posts} = this.props;

    return (
      users.map(user => (
          user.id === userId
          && <div key={user.id} className="user-profile">
            <h2>{user.name}</h2>

            <div className="background-user-logo">
              <img className="user-logotype"
                   src={user.avatar_url}
                   alt="Url not found"/>
            </div>

            <div className="user-profile-data">
              <h2 className="user-profile-data-name">{user.name}</h2>
              <p>{user.email ? user.email : user.login}</p>
              <p><i className="far fa-calendar-alt"/>{user.created_at}</p>
              <p>Repositories: {user.public_repos} </p>
            </div>

            <p className="user-tweets">Tweets</p>

            {posts.map(post => +post.creatorId === userId &&
              <div key={post.id} className="posts-container">
                <div  className="user-post">
                  <img src={post.userImg} alt="ops"/>

                  <div className="post-block">
                    <span className="user-name">{post.name}</span>
                    <span className="user-email">{post.email}</span>
                    <span className="create-date">{post.createdAt}</span>
                    <p className="user-message">{post.message}</p>
                  </div>

                </div>
              </div>
            )}

          </div>
        )
      )
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  posts: state.posts.posts

})

export default connect(mapStateToProps, null)(UserPage);