import React, { useState } from "react";

import "../formStyles/reviewForm.css";

import WorkHistoryFormTemplate from "../formsTemplate/workHistoryFormTemplate"

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

function JobHistoryCard(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    jobTitle: "",
    companyName: "",
    startYear: "",
    endYear: "",
    jobDescription: "",
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
          <WorkHistoryFormTemplate info={info} onChange={onChange} />
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
      <CardContent className={`${classes.cardContent} JobForTesting`}>
        <p>
          Job Title: {props.job.title}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
        <p>Company Name: {props.job.company}</p>
        <p>Starting Date: {props.job.startDate}</p>
        <p>End Date: {props.job.endDate}</p>
        <p>Job Description: {props.job.description}</p>
      </CardContent>
    );
  }
}

export default JobHistoryCard;
