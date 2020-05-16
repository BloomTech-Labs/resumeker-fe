import React from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateProjectData } from "../../../actions/resumeFormActions.js";

//Import Components
import ProjectCard from "./projectCard";

import { Card } from "@material-ui/core";

function ProjectsComponent(props) {
  return (
    <Card>
      <h1>Projects</h1>
      {props.resumeData.projects.map((project) => {
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

const mapStateToProps = (state) => {
  return {
    resumeData: state.resumeFormReducer.resumeData,
    resumeError: state.resumeFormReducer.error,
    resumeLoading: state.resumeFormReducer.loading,
  };
};

export default connect(mapStateToProps, { updateProjectData })(
  ProjectsComponent
);
