import React from "react";
import "./AllUsers.sass";
import {UsersList} from "../UsersList/UsersList";

export const AllUsers = () => {
  return (
    <div className="feed">
      <UsersList/>
      <UsersList/>
      <UsersList/>
    </div>
  )
}