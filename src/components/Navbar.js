import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth0 } from "../react-auth0-spa";

const Navbar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="section">
        <NavLink to="/">
          <button className="styled-button">Home</button>
        </NavLink>
        <NavLink to="/about">
          <button className="styled-button">About</button>
        </NavLink>
        <NavLink to="/">
          <button className="styled-button">Plans</button>
        </NavLink>
      </div>

      <div className="section">
        {!isAuthenticated && (
          <button
            className="styled-button"
            onClick={() => loginWithRedirect({})}
          >
            Login
          </button>
        )}

        {!isAuthenticated && (
          <button
            className="styled-button"
            onClick={() => loginWithRedirect({})}
          >
            Register
          </button>
        )}

        {/* {isAuthenticated && ( */}
          <NavLink to="/profile">
            <button className="styled-button">Profile</button>
          </NavLink>
        {/* )} */}

        {isAuthenticated && (
          <button className="styled-button" onClick={() => logout()}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
