import React from "react";
import "./UserInfo.sass";

export const UserInfo = ({name, email, login, created_at, public_repos}) => {
  const dateRegistration = created_at.slice(0, 10);
  return(
    <div className="user-profile-data">
      <h2 className="user-profile-data-name">{name}</h2>
      <p>{email || login}</p>
      <p><i className="far fa-calendar-alt"/>On GitHub since {dateRegistration}</p>
      <p>{name} is a developer with {public_repos} public repositories </p>
    </div>
    )
}

