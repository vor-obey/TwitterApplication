import React from "react";
import "./NavigationMenu.sass";
import {Link} from "react-router-dom";

const NavigationMenu = () => {

  return (
    <div className="navigation-menu">
      <div className="wrapper">
      <div className="twitter-logo"><i className="fab fa-twitter"/></div>
        <ul className="list-items">

          <Link to="/profile"><li><i className="fas fa-user-tie fas-logo"/>Profile</li></Link>

          <Link to="/users"><li><i className="fas fa-users fas-logo"/>All users</li></Link>

        </ul>
      </div>
    </div>
  )
}
export default NavigationMenu;