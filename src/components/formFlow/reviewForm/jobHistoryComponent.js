import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateWorkData } from "../../../actions/resumeFormActions.js";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

//Import Components
import JobHistoryCard from "./jobHistoryCard.js";

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

function JobHistoryComponent(props) {
  return (
    <Card>
      <h1>Job History</h1>
      {props.resumeData.jobs.map((job) => {
        return (
          <div key={job.id}>
            <JobHistoryCard job={job} updateWorkData={props.updateWorkData} />
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

export default connect(mapStateToProps, { updateWorkData })(
  JobHistoryComponent
);
