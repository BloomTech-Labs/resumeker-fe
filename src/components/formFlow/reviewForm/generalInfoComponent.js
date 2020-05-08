import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { addData } from "../../../actions/resumeFormActions.js";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import {
  CardContent,
  Card,
  makeStyles,
  TextField,
  Button,
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
}));

function GeneralInfoComponent(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    email: `${props.resumeData.email}`,
    firstName: `${props.resumeData.firstName}`,
    lastName: `${props.resumeData.lastName}`,
  });

  const saveInfo = (event) => {
    event.preventDefault();
    props.addData(info);
    setEdit(false);
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
    console.log(info);
  };

  const classes = useStyles();

  if (edit) {
    return (
      <Card>
        <h1>
          General Info{" "}
          <EditIcon color="primary" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </h1>
        <CardContent>
          <form onSubmit={saveInfo}>
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="normal"
              fullWidth
              required={true}
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
              onChange={onChange}
              value={info.firstName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="lastName"
              label="Last Name"
              id="lastName"
              onChange={onChange}
              value={info.lastName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              onChange={onChange}
              value={info.email}
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
      </Card>
    );
  } else {
    return (
      <Card>
        <h1>
          General Info{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </h1>
        <CardContent className={classes.cardContent}>
          <p>
            Your Name: {props.resumeData.firstName} {props.resumeData.lastName}
          </p>
          <p>Email Address: {props.resumeData.email}</p>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resumeData: state.resumeFormReducer.resumeData,
    resumeError: state.resumeFormReducer.error,
    resumeLoading: state.resumeFormReducer.loading,
  };
};

export default connect(mapStateToProps, { addData })(GeneralInfoComponent);
