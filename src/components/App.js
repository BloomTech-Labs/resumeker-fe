import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

// styles
import "./App.css";

// components
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./user/Profile";
import MasterForm from "./formFlow/masterform.js";
import Resume from "./formFlow/Resume";
import ProtectedRoute from "./ProtectedRoute.js";

//Used for Token Authentication
import { useGetToken } from "./getToken.js";

//Statemanagement actions

function App(props) {
    const { user } = useAuth0();

    const token = useGetToken();

    localStorage.setItem("token", token);

    console.log(user, "\n User at App.js");

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
                <Route
                    path="/form"
                    component={() => <ProtectedRoute Component={MasterForm} />}
                />
            </Switch>
        </div>
    );
}

export default App;
