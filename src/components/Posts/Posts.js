import React, {Component} from "react";
import "./Posts.sass";
import {Link} from "react-router-dom";

export class Posts extends Component {

  render() {

    const {posts, id, currentUserId, setCurrentUserId} = this.props;

    return (
      <div className="posts-container">
        {posts.length !== 0
          ? posts.map((elem) => {
            return <div key={elem.id} className="user-post">

              {currentUserId === Number(elem.creatorId)
                ? <Link to="/"><img src={elem.userImg} alt="ops"/></Link>

                : <Link to={`/user/${id === null ? +elem.creatorId : id}`}>

                  <img
                    onClick={() => setCurrentUserId(+elem.creatorId)}
                    src={elem.userImg}
                    alt="ops"/>
                </Link>
              }

              <div className="post-block">

                <span className="user-name">{elem.name}</span>

                <span className="user-email">{elem.email}</span>
                <span className="create-date">{elem.createdAt}</span>
                <p className="user-message">{elem.message}</p>
              </div>

            </div>
          })
          : <p className="warning-message">You haven’t Tweeted any posts yet.
            Follow <Link to="/feed">this link</Link> to create your first post
          </p>
        }

      </div>
    );
  }
}