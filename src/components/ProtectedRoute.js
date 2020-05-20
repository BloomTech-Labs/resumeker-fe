import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa.js";

function ProtectedRoute(props) {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <props.Component />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
}

export default ProtectedRoute;
