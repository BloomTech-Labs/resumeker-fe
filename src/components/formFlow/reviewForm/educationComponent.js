import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateEducationData } from "../../../actions/resumeFormActions.js";

//Import Components
import EducationCard from "./educationCard.js";

import { Card } from "@material-ui/core";

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
