import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import {
  CardContent,
  Card,
  makeStyles,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
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
  selectorForm: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  selectorText: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginBottom: "100px",
  },
}));

function ProjectCard(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    projectName: `${props.projects.projectName}`,
    projectStartDate: `${props.projects.projectStartDate}`,
    projectEndDate: `${props.projects.projectEndDate}`,
    role: `${props.projects.role}`,
    roleDescription: `${props.projects.roleDescription}`,
    link: `${props.projects.link}`,
    id: props.projects.id,
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
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="projectName"
                label="Name of the Project"
                id="projectName"
                onChange={onChange}
                value = {info.projectName}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="projectStartDate"
                type="date"
                label="Starting Date (Optional)"
                id="projectStartDate"
                InputLabelProps={{
                shrink: true,
                }}
                onChange={onChange}
                value = {info.projectStartDate}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                type= "date"
                name="projectEndDate"
                label="End Date (Optional)"
                id="projectEndDate"
                InputLabelProps={{
                shrink: true,
                }}
                onChange={onChange}
                value = {info.projectEndDate}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="role"
                label="Role"
                id="role"
                onChange={onChange}
                value = {info.role}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="roleDescription"
                label="Role Description"
                id="roleDescription"
                onChange={onChange}
                value = {info.roleDescription}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="link"
                label="Link to Project"
                id="link"
                onChange={onChange}
                value = {info.link}
            />
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
      <CardContent className={classes.cardContent}>
        <p>
          Project Name: {info.projectName}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
        <p>Project Start Date: {info.projectStartDate}</p>
        <p>Project End Date: {info.projectEndDate}</p>
        <p>Role: {info.role}</p>
        <p>Role Description: {info.roleDescription}</p>
        <p>Link to Project: {info.link}</p>
      </CardContent>
    );
  }
}

export default ProjectCard;
