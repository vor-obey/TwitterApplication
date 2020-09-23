import React, {Component} from "react";
import "./User.sass";

import {Posts} from "../Posts/Posts";
import {Loader} from "../Loader/Loader";
import {UserInfo} from "../UserInfo/UserInfo";

class User extends Component {
  render() {
    if (this.props.userLoading) {
      return <Loader/>
    }

    const {user, posts, postsLoading, currentUserId, setCurrentUserId} = this.props;

    return (
      <div className="user-profile">
        <h2>{user.name || user.login}</h2>

        <div className="background-user-logo">
          <img className="user-logotype"
               src={user.avatar_url}
               alt="Url not found"/>
        </div>

        <UserInfo
          name={user.name || user.login}
          login={user.login}
          email={user.email}
          created_at={user.created_at}
          public_repos={user.public_repos}/>

        <p className="users-tweets">Tweets</p>

        {postsLoading
          ? <Loader/>
          : <Posts
            posts={posts}
            id={user.id}
            currentUserId={currentUserId}
            setCurrentUserId={setCurrentUserId}
          />
        }

      </div>
    )
  }
}

export default User;
