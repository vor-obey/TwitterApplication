import React from "react";
import "./NavigationMenu.sass";
import {Link} from "react-router-dom";
import LogOutBtn from "../LogOut/LogOut";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="wrapper">

        <i className="fab fa-twitter"/>

        <ul className="list-items">

          <li><Link to="/"><i className="fas fa-user-tie fas-logo"/><span>Profile</span></Link></li>

          <li><Link to="/users"><i className="fas fa-users fas-logo"/><span>All users</span></Link></li>

          <li><Link to="/feed"><i className="fas fa-paste fas-logo"/><span>Feed</span></Link></li>

          <div className="log-out-container">
            <LogOutBtn/>
          </div>

        </ul>

      </div>
    </div>
  )
}

export default NavigationMenu;