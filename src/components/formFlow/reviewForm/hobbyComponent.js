import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateHobbyData } from "../../../actions/resumeFormActions.js";

//Import Components
import HobbyCard from "./hobbyCard";

import {
  Card,
} from "@material-ui/core";


function HobbyComponent(props) {
  return (
    <Card>
      <h1>Hobbies</h1>
      {props.resumeData.hobbies.map((hobby) => {
        return (
          <div key={hobby.id}>
            <HobbyCard hobbies={hobby} updateHobbyData={props.updateHobbyData} />
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

export default connect(mapStateToProps, { updateHobbyData })(
    HobbyComponent
);
