import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//Components import
import GeneralInfo from "./generalInfo.js";
import Education from "./education.js";
import WorkHistory from "./workHistory";
import EndFormReview from "./reviewForm/endFormReview";
import PersonalProjects from "./PersonalProjects";
import TechSkills from "./TechSkills.js";
import GeneralSkills from "./GeneralSkills.js";

//State import
// import

function MasterForm() {
  const { path, url } = useRouteMatch();

  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Resume Form</h1>
      <Switch>
        <Route path={`${url}/generalInfo`} component={GeneralInfo} />
        <Route path={`${url}/education`} component={Education} />
        <Route path={`${url}/work`} component={WorkHistory} />
        <Route path={`${url}/review`} component={EndFormReview} />
        <Route path={`${url}/projects`} component={PersonalProjects} />
        <Route path={`${url}/techskills`} component={TechSkills} />
        <Route path={`${url}/generalskills`} component={GeneralSkills} />
      </Switch>
    </div>
  );
}

export default MasterForm;
