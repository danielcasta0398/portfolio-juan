import React from "react";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { Route, Switch, HashRouter } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Preview from "../views/Preview";

const Routes = () => {
  return (
    <>
    <HashRouter>      
        <ScrollTopBehaviour />
        <Switch> 
          <Route exact path="/" component={Preview} />
          <Route path="/home-light" component={HomeLight} />
          <Route path="/home-dark" component={HomeDark} />                 
          <Route component={NotFound} />
        </Switch>
     
      </HashRouter>
    </>
  );
};

export default Routes;
