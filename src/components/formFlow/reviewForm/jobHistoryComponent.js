import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateWorkData } from "../../../actions/resumeFormActions.js";

//Import Components
import JobHistoryCard from "./jobHistoryCard.js";

import { Card } from "@material-ui/core";

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
