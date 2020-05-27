import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";
import { useQuery } from "@apollo/react-hooks";

import { getDraftQuery as GET_DRAFT_QUERY } from "../../../queries/draft";

//Actions
import { updateProjectData } from "../../../actions/resumeFormActions.js";

//Import Components
import ProjectCard from "./projectCard";

import { Card } from "@material-ui/core";

import mapStateToProps from "../../mappingState.js";

function ProjectsComponent(props) {
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
        <h1>Projects</h1>
        {data.getDraft.project.map((project) => {
          return (
            <div key={project.id}>
              <ProjectCard
                projects={project}
                updateProjectData={props.updateProjectData}
              />
            </div>
          );
        })}
      </Card>
    );
  }
}

export default connect(mapStateToProps, { updateProjectData })(
  ProjectsComponent
);
