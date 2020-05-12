import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateLanguageData } from "../../../actions/resumeFormActions.js";

//Import Components
import LanguageCard from "./languageCard";

import {
  Card,
} from "@material-ui/core";


function LanguageComponent(props) {
  return (
    <Card>
      <h1>Languages</h1>
      {props.resumeData.languages.map((language) => {
        return (
          <div key={language.id}>
            <LanguageCard languages={language} updateLanguageData={props.updateLanguageData} />
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

export default connect(mapStateToProps, { updateLanguageData })(
    LanguageComponent
);
