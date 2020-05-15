import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

import GeneralInfoFormTemplate from "../formsTemplate/generalInfoFormTemplate"

//Actions
import { addData } from "../../../actions/resumeFormActions.js";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import {
  CardContent,
  Card,
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
            <GeneralInfoFormTemplate  onChange={onChange} info={info} />
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
