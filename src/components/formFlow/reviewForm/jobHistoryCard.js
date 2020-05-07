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

function JobHistoryCard(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    jobTitle: `${props.job.jobTitle}`,
    companyName: `${props.job.companyName}`,
    startYear: `${props.job.startYear}`,
    endYear: `${props.job.endYear}`,
    jobDescription: `${props.job.jobDescription}`,
    id: props.job.id,
  });

  const saveInfo = (event) => {
    event.preventDefault();
    props.updateWorkData(info);
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
            fullWidth
            name="jobTitle"
            label="Job Title"
            id="jobTitle"
            onChange={onChange}
            value={info.jobTitle}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="companyName"
            label="Name of the company"
            id="companyName"
            onChange={onChange}
            value={info.companyName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="date"
            name="startYear"
            label="Starting Date"
            id="startYear"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            value={info.startYear}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="endYear"
            label="End Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            id="endYear"
            onChange={onChange}
            value={info.endYear}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="jobDescription"
            label="Job Description"
            id="jobDescription"
            onChange={onChange}
            value={info.jobDescription}
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
          Job Title: {props.job.jobTitle}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
        <p>Company Name: {props.job.companyName}</p>
        <p>Starting Date: {props.job.startYear}</p>
        <p>End Date: {props.job.endYear}</p>
        <p>Job Description: {props.job.jobDescription}</p>
      </CardContent>
    );
  }
}

export default JobHistoryCard;
