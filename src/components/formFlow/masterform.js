import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//Components import
import GeneralInfo from "./generalInfo.js";
import Education from "./education.js";
import WorkHistory from "./workHistory";
import EndFormReview from "./reviewForm/endFormReview";
import PersonalProjects from "./PersonalProjects";
import TechSkills from "./TechSkills.js";
import GeneralSkills from "./GeneralSkills.js";
import Languages from "./Languages.js";
import Hobbies from "./Hobbies";

import ProtectedRoute from "../ProtectedRoute"

function MasterForm() {
  const { url } = useRouteMatch();

  return (
    <div>
      <h1>Resume Form</h1>
      <Switch>
        <ProtectedRoute path={`${url}/generalInfo`} component={GeneralInfo} />
        <ProtectedRoute path={`${url}/education`} component={Education} />
        <ProtectedRoute path={`${url}/work`} component={WorkHistory} />
        <ProtectedRoute path={`${url}/review`} component={EndFormReview} />
        <ProtectedRoute path={`${url}/projects`} component={PersonalProjects} />
        <ProtectedRoute path={`${url}/techskills`} component={TechSkills} />
        <ProtectedRoute path={`${url}/generalskills`} component={GeneralSkills} />
        <ProtectedRoute path={`${url}/languages`} component={Languages} />
        <ProtectedRoute path={`${url}/hobbies`} component={Hobbies} />
      </Switch>
    </div>
  );
}

export default MasterForm;
