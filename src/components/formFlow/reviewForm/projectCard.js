import React, { useState } from "react";

import "../formStyles/reviewForm.css";
import ProjectsFormTemplate from "../formsTemplate/projectsFormTemplate"

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import { CardContent, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

function ProjectCard(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    projectName: "",
    projectStartDate: "",
    projectEndDate: "",
    // role: "",
    roleDescription: "",
    link: "",
  });

  const saveInfo = (event) => {
    event.preventDefault();
    props.updateProjectData(info);
    setEdit(false);
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const classes = useStyles();

  if (edit) {
    return (
      <CardContent>
        <form onSubmit={saveInfo}>
        <ProjectsFormTemplate info={info} onChange={onChange} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </CardContent>
    );
  } else {
    return (
      <CardContent className={`${classes.cardContent} ProjectsTesting`}>
        <p>
          Project Name: {props.projects.title}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
        <p>Project Start Date: {props.projects.startDate}</p>
        <p>Project End Date: {props.projects.endDate}</p>
        {/* <p>Role: {props.projects.role}</p> */}
        <p>Role Description: {props.projects.description}</p>
        <p>Link to Project: {props.projects.projectUrl}</p>
      </CardContent>
    );
  }
}

export default ProjectCard;
