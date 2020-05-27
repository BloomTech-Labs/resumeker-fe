import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";
import { useQuery } from "@apollo/react-hooks";

import { getDraftQuery as GET_DRAFT_QUERY } from "../../../queries/draft";

//Actions
import { updateEducationData } from "../../../actions/resumeFormActions.js";

//Import Components
import EducationCard from "./educationCard.js";

import { Card } from "@material-ui/core";

import mapStateToProps from "../../mappingState.js";

function EducationComponent(props) {
  const id = localStorage.getItem("draftID");
  const { loading, error, data } = useQuery(GET_DRAFT_QUERY, {
    variables: { id },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  if (data) {
    return (
      <Card>
        <h1>Education</h1>
        {data.getDraft.education.map((education) => {
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
}

export default connect(mapStateToProps, { updateEducationData })(
  EducationComponent
);
