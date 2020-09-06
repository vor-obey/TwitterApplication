import React, {Component} from "react";
import "./Posts.sass";

export class Posts extends Component  {
  render() {
    const {posts} = this.props
    return (
      <div className="posts-container">
        {posts.map((elem) => {
          return <div key={elem.id} className="user-post">
            <img src={elem.userImg} alt="ops"/>

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