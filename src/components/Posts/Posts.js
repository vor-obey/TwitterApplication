import React, {Component} from "react";
import "./Posts.sass";
import {Link} from "react-router-dom";

export class Posts extends Component {

  render() {
    const {posts} = this.props;
    return (
      <div className="posts-container">
        {posts.map((elem) => {
          return <div key={elem.id} className="user-post">
            <Link to={`/user/${+elem.creatorId}`}>
              <img onClick={() => this.props.getUserId(+elem.creatorId)} src={elem.userImg} alt="ops"/>
            </Link>
            <div className="post-block">
              <span className="user-name">{elem.name}</span>
              <span className="user-email">{elem.email}</span>
              <span className="create-date">{elem.createdAt}</span>
              <p className="user-message">{elem.message}</p>
            </div>

          </div>
        })}
      </div>
    );
  }
}