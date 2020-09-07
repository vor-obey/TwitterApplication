import React from "react";
import "./NavigationMenu.sass";
import {Link} from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="wrapper">
        <div className="twitter-logo"><i className="fab fa-twitter"/></div>
        <ul className="list-items">

          <li><Link to="/"><i className="fas fa-user-tie fas-logo"/>Profile</Link></li>

          <li><Link to="/users"><i className="fas fa-users fas-logo"/>All users</Link></li>

          <li><Link to="/feed"><i className="fas fa-paste fas-logo"/>Feed</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default NavigationMenu;