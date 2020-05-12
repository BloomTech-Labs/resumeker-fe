import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateTechSkillsData } from "../../../actions/resumeFormActions.js";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

//Import Components
import TechSkillsCard from "./techSkillsCard";

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

function TechSkillsComponent(props) {
  return (
    <Card>
      <h1>Tech Skills</h1>
      {props.resumeData.techSkills.map((techSkill) => {
        return (
          <div key={techSkill.id}>
            <TechSkillsCard techSkills={techSkill} updateTechSkillsData={props.updateTechSkillsData} />
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

export default connect(mapStateToProps, { updateTechSkillsData })(
  TechSkillsComponent
);
