import React from "react";
import "./UsersList.sass";
import {Link} from "react-router-dom";

export const UsersList = (props) => {
  return (
    <div className="users-list">
      <div className="user-info">

        <Link to={`/user/${props.uniqueId}`}><img onClick={props.getId} src={props.avatar} alt="ops"/></Link>

        <div className="user-data">

          <span className="user-name">{props.name}</span>
          <span className="user-login">{props.login}</span>

          <div className="last-visited">
            {props.createDate}
          </div>

        </div>
      </div>
    </div>
  )
}