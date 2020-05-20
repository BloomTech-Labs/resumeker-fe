import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// styles
import "./App.css";

// components
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./user/Profile";
import FormEdit from "./FormEdit";
import MasterForm from "./formFlow/masterform.js";
import ProtectedRoute from "./ProtectedRoute.js";

//Used for Token Authentication
import { useGetToken } from "./getToken.js";
import { getUser, updateUser } from "../actions/actions.js";

//Statemanagement actions

function App(props) {
  const { getUser } = props;

  const token = useGetToken();

  localStorage.setItem("token", token);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <div className="App">
      <Navbar />
      <h1>Resumeker</h1>
      <Switch>
        <Route path="/register" render={(props) => <Profile />} />
        <Route exact path="/" component={Home} />
        <Route
          path="/profile"
          component={() => <ProtectedRoute Component={Profile} />}
        />
        <Route path="/edit" component={FormEdit} />
        <Route
          path="/form"
          component={() => <ProtectedRoute Component={MasterForm} />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    error: state.userReducer.error,
    loading: state.userReducer.loading,
  };
};

export default connect(mapStateToProps, { getUser, updateUser })(App);
