import React, {Component} from "react";
import "./Posts.sass";
import {Link} from "react-router-dom";

export class Posts extends Component {
  render() {
    const {posts, currentUserId} = this.props;
    return (
      <div className="posts-container">
        {posts.length !== 0
          ? posts.map((elem) => {
            return (
              <div key={elem.id} className="user-post">
                <Link to={currentUserId === Number(elem.creatorId) ? `/` : `/user/${elem.creatorId}`}>
                  <img
                    src={elem.userImg}
                    alt="ops"/>
                </Link>

                <div className="post-block">

                  <Link to={currentUserId === Number(elem.creatorId) ? `/` : `/user/${elem.creatorId}`}>
                    <span className="user-name">{elem.name}</span>
                  </Link>

                  <span className="create-date">{elem.createdAt}</span>

                  <p>{elem.message}</p>
                </div>

              </div>
            )
          })
          : <p className="warning-message">You haven’t Tweeted any posts yet.
            Follow <Link to="/feed">this link</Link> to create your first post
          </p>
        }

      </div>
    );
  }
}