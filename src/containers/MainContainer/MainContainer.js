import React, {Component} from "react";
import "./MainContainer.sass";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import {Switch, Route, Redirect, useLocation} from "react-router-dom";
import AllUsers from "../../pages/AllUsers/AllUsers";
import UserPage from "../../pages/UserPage/UserPage";
import Feed from "../../pages/Feed/Feed";
import Home from "../../pages/Home/Home";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export const MainContainer = () => {
  const location = useLocation();

    return (
      <div className="main-container">

        <NavigationMenu/>

        <ErrorBoundary key={location.pathname}>

          <Switch>

            <Route exact path="/" component={Home}/>

            <Route exact path="/users" component={AllUsers}/>

            <Route exact path={`/user/:id`} component={UserPage}/>

            <Route exact path={`/feed`} component={Feed}/>

            <Redirect to="/"/>

          </Switch>

        </ErrorBoundary>

      </div>
    )
}

export default MainContainer;