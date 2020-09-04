import React, {Component} from "react";
import "./Posts.sass";

export class Posts extends Component  {
  render() {
    const {posts} = this.props
    return (
      <div>
        {posts.map((elem) => {
          return <div key={elem.id} className="user-post">
            <img src={elem.userImg} alt="ops"/>

            <div>
              <span>{elem.name}</span>
              <span>{elem.email}</span>
              <p>{elem.message}</p>

            </div>

          </div>
        })}
      </div>
    );
  }
}