import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateGeneralSkillsData } from "../../../actions/resumeFormActions.js";

//Icon import

//Import Components
import GeneralSkillsCard from "./generalSkillsCard";

import {
  Card,
} from "@material-ui/core";


function GeneralSkillsComponent(props) {
  return (
    <Card>
      <h1>General Skills</h1>
      {props.resumeData.generalSkills.map((generalSkill) => {
        return (
          <div key={generalSkill.id}>
            <GeneralSkillsCard generalSkills={generalSkill} updateGeneralSkillsData={props.updateGeneralSkillsData} />
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

export default connect(mapStateToProps, { updateGeneralSkillsData })(
  GeneralSkillsComponent
);
