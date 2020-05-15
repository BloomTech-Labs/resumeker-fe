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
import TipsLayout from "../formUtils/tipsLayout"

import { Paper, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
}));

function EndFormReview(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container componet="main" className={classes.root}>
        {/* <CssBaseline/> */}
        <TipsLayout />
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

const mapStateToProps = (state) => {
  return {
    resumeData: state.resumeFormReducer.resumeData,
    resumeError: state.resumeFormReducer.error,
    resumeLoading: state.resumeFormReducer.loading,
  };
};

export default connect(mapStateToProps)(EndFormReview);
