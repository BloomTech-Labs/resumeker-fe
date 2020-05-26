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
import Languages from "./Languages.js";
import Hobbies from "./Hobbies";
import Resume from "./Resume";

function MasterForm() {
    const { url } = useRouteMatch();

    const [activeStep, setActiveStep] = useState(0);

    return (
        <div>
            <h1>Resume Form</h1>
            <Switch>
                <Route
                    path={`${url}/generalInfo`}
                    render={(props) => (
                        <GeneralInfo
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
                <Route
                    path={`${url}/education`}
                    render={(props) => (
                        <Education
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
                <Route
                    path={`${url}/work`}
                    render={(props) => (
                        <WorkHistory
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
                <Route path={`${url}/review`} component={EndFormReview} />
                <Route
                    path={`${url}/projects`}
                    render={(props) => (
                        <PersonalProjects
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
                <Route
                    path={`${url}/techskills`}
                    render={(props) => (
                        <TechSkills
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
                <Route
                    path={`${url}/generalskills`}
                    render={(props) => (
                        <GeneralSkills
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
                <Route
                    path={`${url}/languages`}
                    render={(props) => (
                        <Languages
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
                <Route
                    path={`${url}/hobbies`}
                    render={(props) => (
                        <Hobbies
                            {...props}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}

export default MasterForm;
