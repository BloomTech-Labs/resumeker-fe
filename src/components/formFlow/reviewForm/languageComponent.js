import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateLanguageData, removeLanguageData, addLanguage } from "../../../actions/resumeFormActions.js";
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

function LanguageComponent(props) {

  const classes = useStyles();

  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState({
    language: props.resumeData.languages.language,
    id: props.resumeData.languages.id,
  });

  const handleDelete = (languageToDelete) => (event) => {
    event.preventDefault();
    props.removeLanguageData(languageToDelete);
    setInfo({ ...info });
  };

  const anotherLanguage = (event) => {
    event.preventDefault();
    if (info.language.length > 0) {
      props.addLanguage(info);
    }
    setInfo({
      id: Date.now(),
      language: "",
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const saveInfo = (event) => {
    event.preventDefault();
    // props.addLanguage(info);
    setEdit(false);
  };
  
  if(edit) {
  return (
    <Card>
      <h1>
        Languages{" "}
        <EditIcon color="primary" onClick={() => setEdit(!edit)}>
          Edit
        </EditIcon>
      </h1>

      <form className={classes.form} onSubmit={saveInfo} >
      <SingleFieldFormTemplate onChange={onChange} info={info.language} anotherOne={anotherLanguage} name="language" label="Language" />
      <CardContent className={classes.cardContent}>
        <Grid className={classes.skillContainer}>
                <Paper
                  component="ul"
                  square="true"
                  className={classes.chipContainer}
                >
                  <Chip
                    label="Your Languages:"
                    className={classes.chip}
                    color="primary"
                  />
                  {props.resumeData.languages.map((data) => {
                    return (
                      <li key={data.id}>
                        <Chip
                          label={data.language}
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
            Languages{" "}
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
                  {props.resumeData.languages.map((data) => {
                    return (
                      <li key={data.id}>
                        <Chip
                          label={data.language}
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

export default connect(mapStateToProps, { updateLanguageData, removeLanguageData, addLanguage })(
  LanguageComponent
)
