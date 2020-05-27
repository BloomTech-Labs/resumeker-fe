import React from "react";
import { connect } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import "../formStyles/reviewForm.css";

//Actions
import { updateWorkData } from "../../../actions/resumeFormActions.js";
import { getDraftQuery as GET_DRAFT_QUERY } from "../../../queries/draft";
//Import Components
import JobHistoryCard from "./jobHistoryCard.js";

import { Card } from "@material-ui/core";

import mapStateToProps from "../../mappingState.js";

function JobHistoryComponent(props) {
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
        <h1>Job History</h1>
        {data.getDraft.work.map((job) => {
          return (
            <div key={job.id}>
              <JobHistoryCard job={job} updateWorkData={props.updateWorkData} />
            </div>
          );
        })}
      </Card>
    );
  }
}

export default connect(mapStateToProps, { updateWorkData })(
  JobHistoryComponent
);
