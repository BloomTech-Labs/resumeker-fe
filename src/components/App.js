import React, { useEffect, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useAuth0 } from "../react-auth0-spa";

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

//Components import
import GeneralInfo from "./formFlow/generalInfo";
import Education from "./formFlow/education.js";
import WorkHistory from "./formFlow/workHistory";
import EndFormReview from "./formFlow/reviewForm/endFormReview";
import PersonalProjects from "./formFlow/PersonalProjects";
import TechSkills from "./formFlow/TechSkills.js";
import GeneralSkills from "./formFlow/GeneralSkills.js";
import Languages from "./formFlow/Languages.js";
import Hobbies from "./formFlow/Hobbies";

function App(props) {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    let Auth0Authenticated = !!"";
    useEffect(() => {
        const Auth0Authenticated = useRef(isAuthenticated);
    }, [isAuthenticated]);

    

    //ProtectedEducationRoute
    const ProtectedGeneralInfoRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <GeneralInfo {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedEducationRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <Education {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedWorkHistoryRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <WorkHistory {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedEndFormReviewRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <EndFormReview {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedPersonalProjectsRoute = ({
        component: Component,
        ...rest
    }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <PersonalProjects {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedTechSkillsRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <TechSkills {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedGeneralSkillsRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <GeneralSkills {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedLanguagesRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <Languages {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //ProtectedEducationRoute
    const ProtectedHobbiesRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                Auth0Authenticated ? (
                    <Hobbies {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    const { getUser } = props;

    const token = useGetToken();

    localStorage.setItem("token", token);

    // useEffect(() => {
    //   if (token) {
    //     getUser();
    //   }
    // }, [token]);

    console.log(isAuthenticated, "\n isAuthenitcated in APP.js");

    return (
        <div className="App">
            <Navbar />
            <h1>Resumeker</h1>
            <Switch>
                <Route path="/register" render={(props) => <Profile />} />

                <Route exact path="/" component={Home} />

                <ProtectedGeneralInfoRoute
                    path="/form/generalInfo"
                    component={GeneralInfo}
                />

                <ProtectedEducationRoute
                    path="/form/education"
                    component={Education}
                />

                <ProtectedWorkHistoryRoute
                    path="/form/work"
                    component={WorkHistory}
                />

                <ProtectedEndFormReviewRoute
                    path="/form/review"
                    component={EndFormReview}
                />

                <ProtectedPersonalProjectsRoute
                    path="/form/projects"
                    component={PersonalProjects}
                />

                <ProtectedTechSkillsRoute
                    path="/form/techskills"
                    component={TechSkills}
                />

                <ProtectedGeneralSkillsRoute
                    path="/form/generalskills"
                    component={GeneralSkills}
                />

                <ProtectedLanguagesRoute
                    path="/form/languages"
                    component={Languages}
                />

                <ProtectedHobbiesRoute
                    path="/form/hobbies"
                    component={Hobbies}
                />

                <Route path="/edit" component={FormEdit} />
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
