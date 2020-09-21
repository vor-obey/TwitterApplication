import React from "react";
import "./UsersListItem.sass";
import {Link} from "react-router-dom";

export const UsersListItem = (props) => {
  return (
    <Link to={`/user/${props.uniqueId}`} onClick={props.getId}>
      <div className="users-list">
        <div className="user-info">

          <img
            src={props.avatar}
            alt="ops"/>

          <div className="user-data">

            <span className="user-name">{props.name}</span>
            <span className="user-login">{props.login}</span>

            <div className="last-visited">
              {props.createDate}
            </div>

          </div>
        </div>
      </div>
    </Link>
  )
}