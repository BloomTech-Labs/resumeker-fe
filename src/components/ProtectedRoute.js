import React from "react";
import { Redirect, Route } from "react-router-dom";
<<<<<<< HEAD
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
        render={(renderProps) => (
          // if (isAuthenticated) {
          //   console.log(isAuthenticated, "isAuth inside of ProtectedRoute2")
          //   return <Component {...renderProps} />;
          // } else {
          //   console.log(isAuthenticated, "isAuth inside of ProtectedRoute3")
          //   return <Redirect to="/" />;
          // }
          isAuthenticated ?
          <Component {...renderProps} />
          : <Redirect to="/" />
        )}
      />
    );
}
=======

import { useAuth0 } from "../react-auth0-spa.js";

import Education from "./formFlow/education";

const ProtectedRoute = (props) => {
    const { isAuthenticated } = useAuth0();

    console.log(isAuthenticated, "\n Authentication w.in Protected Route");

    if (isAuthenticated) return <props.Component />;

    return <Redirect to={{ pathname: "/" }} />;

    // const { component: Component, ...rest } = props;

    // return (
    //   <Route
    //     {...rest}
    //     render={(renderProps) => {
    //       if (isAuthenticated) {
    //         return <Component {...renderProps} />;
    //       } else {
    //         return <Redirect to="/login" />;
    //       }
    //     }}
    //   />
    // );
};
>>>>>>> 88e93e630d548b1569458552a4b6196e1b839105

export default ProtectedRoute;
