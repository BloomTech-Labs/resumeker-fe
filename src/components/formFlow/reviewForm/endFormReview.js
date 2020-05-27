import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Components
import GeneralInfoComponent from "./generalInfoComponent";
import EducationComponent from "./educationComponent";
import JobHistoryComponent from "./jobHistoryComponent";
import ProjectsComponent from "./projectComponent";
import TechSkillsComponent from "./techSkillsComponent";
import GeneralSkillsComponent from "./generalSkillsComponent";
import LanguageComponent from "./languageComponent";
import HobbyComponent from "./hobbyComponent";
import TipsLayout from "../formUtils/tipsLayout";

import { Paper, Grid, makeStyles } from "@material-ui/core";

import mapStateToProps from "../../mappingState.js";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  tipTextLarge: {
    fontSize: "1.1rem",
  },
  tipTextSmall: {
    fontSize: "0.8rem",
  },
}));

function EndFormReview(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container componet="main" className={classes.root}>
        {/* <CssBaseline/> */}
        <TipsLayout tips={Tip()} />
        <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
          <div>
            <Paper>
              <GeneralInfoComponent />
              <EducationComponent />
              <JobHistoryComponent />
              <ProjectsComponent />
              <TechSkillsComponent />
              <GeneralSkillsComponent />
              <LanguageComponent />
              <HobbyComponent />
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function Tip() {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.tipTextLarge}>
        Phew! We made it through the hard part!
      </p>
      <p className={classes.tipTextLarge}>
        Take a few minutes to refine or edit any information that may be
        incorrect or been forgotten.
      </p>
      <p className={classes.tipTextSmall}>
        Use this time to validate your spelling and grammar as well!
      </p>
    </div>
  );
}

export default connect(mapStateToProps)(EndFormReview);
