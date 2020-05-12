import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateGeneralSkillsData } from "../../../actions/resumeFormActions.js";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

//Import Components
import GeneralSkillsCard from "./generalSkillsCard";

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
