import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateEducationData } from "../../../actions/resumeFormActions.js";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

//Import Components
import EducationCard from "./educationCard.js";

import {
  CardContent,
  Card,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    alignSelf: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textField: {
    textAlign: "center",
  },
}));

function EducationComponent(props) {
  return (
    <Card>
      <h1>Education</h1>
      {props.resumeData.education.map((education) => {
        return (
          <div key={education.id}>
            <EducationCard
              education={education}
              updateEducationData={props.updateEducationData}
            />
          </div>
        );
      })}
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    resumeData: state.resumeFormReducer.resumeData,
    resumeError: state.resumeFormReducer.error,
    resumeLoading: state.resumeFormReducer.loading,
  };
};

export default connect(mapStateToProps, { updateEducationData })(
  EducationComponent
);
