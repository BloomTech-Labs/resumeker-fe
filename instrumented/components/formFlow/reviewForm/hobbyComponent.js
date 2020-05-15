import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateHobbyData, removeHobbyData, addHobby } from "../../../actions/resumeFormActions.js";

import SingleFieldFormTemplate from "../formsTemplate/singleFieldFormTemplate"

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import {
  Card,
  makeStyles,
  CardContent,
  Paper,
  Grid,
  Chip,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  skillContainer: {
    display: "flex",
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(1.2),
  },
}));

function HobbyComponent(props) {

  const classes = useStyles();

  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState({
    hobby: props.resumeData.hobbies.hobby,
    id: props.resumeData.hobbies.id,
  });

  const handleDelete = (hobbyToDelete) => (event) => {
    event.preventDefault();
    props.removeHobbyData(hobbyToDelete);
    setInfo({ ...info });
  };

  const anotherHobby = (event) => {
    event.preventDefault();
    if (info.hobby.length > 0) {
      props.addHobby(info);
    }
    setInfo({
      id: Date.now(),
      hobby: "",
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const saveInfo = (event) => {
    event.preventDefault();
    // props.addHobby(info);
    setEdit(false);
  };
  
  if(edit) {
  return (
    <Card>
      <h1>
        Hobbies{" "}
        <EditIcon color="primary" onClick={() => setEdit(!edit)}>
          Edit
        </EditIcon>
      </h1>

      <form className={classes.form} onSubmit={saveInfo} >
      <SingleFieldFormTemplate onChange={onChange} info={info.hobby} anotherOne={anotherHobby} name="hobby" label="Your Hobbies" />

      <CardContent className={classes.cardContent}>
        <Grid className={classes.skillContainer}>
                <Paper
                  component="ul"
                  square="true"
                  className={classes.chipContainer}
                >
                  <Chip
                    label="Your hobbies:"
                    className={classes.chip}
                    color="primary"
                  />
                  {props.resumeData.hobbies.map((data) => {
                    return (
                      <li key={data.id}>
                        <Chip
                          label={data.hobby}
                          onDelete={handleDelete(data)}
                          className={classes.chip}
                        />
                      </li>
                    );
                  })}
                </Paper>
          </Grid>
      </CardContent>
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
      </Card>
  )
    }else{
      return (
        <Card>
          <h1>
            Hobbies{" "}
            <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
              Edit
            </EditIcon>
          </h1>
          <Grid className={classes.skillContainer}>
                <Paper
                  component="ul"
                  square="true"
                  className={classes.chipContainer}
                >
                  {props.resumeData.hobbies.map((data) => {
                    return (
                      <li key={data.id}>
                        <Chip
                          label={data.hobby}
                          className={classes.chip}
                        />
                      </li>
                    );
                  })}
                </Paper>
              </Grid>
      
    </Card>
  );
}}

const mapStateToProps = (state) => {
  return {
    resumeData: state.resumeFormReducer.resumeData,
    resumeError: state.resumeFormReducer.error,
    resumeLoading: state.resumeFormReducer.loading,
  };
};

export default connect(mapStateToProps, { updateHobbyData, removeHobbyData, addHobby })(
  HobbyComponent
)
