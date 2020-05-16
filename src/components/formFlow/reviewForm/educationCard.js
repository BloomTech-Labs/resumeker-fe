import React, { useState } from "react";

import "../formStyles/reviewForm.css";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import EducationFormTemplate from "../formsTemplate/educationFormTemplate"

import {
  CardContent,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function EducationCard(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    type: `${props.education.type}`,
    schoolName: `${props.education.schoolName}`,
    yearIn: `${props.education.yearIn}`,
    yearOut: `${props.education.yearOut}`,
    certificateName: `${props.education.certificateName}`,
    id: props.education.id,
  });

  const classes = useStyles();

  const saveInfo = (event) => {
    event.preventDefault();
    props.updateEducationData(info);
    setEdit(false);
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  if (edit) {
    return (
      <CardContent>
        <form onSubmit={saveInfo}>
          <EducationFormTemplate info={info} onChange={onChange} />
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
      <CardContent className={classes.cardContent} id={info.schoolName}>
        <p>
          Type of Education: {info.type}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
        <p>Name of School: {info.schoolName}</p>
        <p>Starting Date: {info.yearIn}</p>
        <p>End Date: {info.yearOut}</p>
        <p>Type of Certificate: {info.certificateName}</p>
      </CardContent>
    );
  }
}

export default EducationCard;
