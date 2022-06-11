import React from "react";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { Route, Switch, HashRouter } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
   <HashRouter>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeDark} />
          <Route path="/home-light" component={HomeLight} />
          
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default Routes;
