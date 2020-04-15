import React from "react";
import { Route, Redirect } from "react-router-dom";

const hasToken = localStorage.getItem("token") !== "null";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;