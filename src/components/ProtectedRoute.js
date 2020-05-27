import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa.js";

function ProtectedRoute(props) {
  const { isAuthenticated } = useAuth0();

  return localStorage.getItem("token") !== null ? (
    <props.Component />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );

  //   const { component: Component, ...rest } = props;

  //   return (
  //     <Route
  //       {...rest}
  //       render={(renderProps) => {
  //         if (isAuthenticated) {
  //           return <Component {...renderProps} />;
  //         } else {
  //           return <Redirect to="/login" />;
  //         }
  //       }}
  //     />
  //   );
}

export default ProtectedRoute;
