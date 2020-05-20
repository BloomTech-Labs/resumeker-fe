import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

function ProtectedRoute(props) {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated, "isAuth inside of ProtectedRoute")

// return isAuthenticated ? (
//   <props.Component />
// ) : (
//   <Redirect to={{ pathname: "/" }} />
// );

    const { component: Component, ...rest } = props;

    return (
      <Route
        {...rest}
        render={(renderProps) => {
          if (isAuthenticated) {
            console.log(isAuthenticated, "isAuth inside of ProtectedRoute2")
            return <Component {...renderProps} />;
          } else {
            console.log(isAuthenticated, "isAuth inside of ProtectedRoute3")
            return <Redirect to="/" />;
          }
        }}
      />
    );
}

export default ProtectedRoute;
