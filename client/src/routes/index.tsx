import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginContainer from "../containers/Login/Login";

const Routes = () => (
  <BrowserRouter>
    <div>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/landingPage" />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Routes;
