import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginContainer from "../containers/Login/Login";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/landingPage" />
        <ToastContainer />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Routes;
