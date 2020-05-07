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
          <FormControl className={classes.selectorForm}>
            <InputLabel className={classes.selectorText} id="type">
              Education
            </InputLabel>
            <Select
              className={classes.textField}
              variant="outlined"
              fullWidth
              id="type"
              label="Education"
              name="type"
              autoFocus
              onChange={onChange}
              value={info.type}
            >
              <MenuItem value={"College"}>College</MenuItem>
              <MenuItem value={"University"}>University</MenuItem>
              <MenuItem value={"Certification"}>Certification</MenuItem>
              <MenuItem value={"Course"}>Course</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="schoolName"
            label="Name of the school"
            id="schoolName"
            onChange={onChange}
            value={info.schoolName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="yearIn"
            type="date"
            label="School Starting Date"
            id="yearIn"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            value={info.yearIn}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="date"
            name="yearOut"
            label="Finishing School"
            id="yearOut"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            value={info.yearOut}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="certificateName"
            label="Name of the certificate"
            id="certificateName"
            onChange={onChange}
            value={info.certificateName}
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
          Type of Education: {props.education.type}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
        <p>Name of School: {props.education.schoolName}</p>
        <p>Starting Date: {props.education.yearIn}</p>
        <p>End Date: {props.education.yearOut}</p>
        <p>Type of Certificate: {props.education.certificateName}</p>
      </CardContent>
    );
  }
}

export default EducationCard;
