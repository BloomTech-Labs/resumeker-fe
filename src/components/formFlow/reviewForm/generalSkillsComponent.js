import React, { useState } from "react";
import { connect } from "react-redux";

import "../formStyles/reviewForm.css";

//Actions
import { updateGeneralSkillsData, removeGeneralSkill, addGeneralSkill } from "../../../actions/resumeFormActions.js";


//Icon import
import EditIcon from "@material-ui/icons/Edit";

import {
  Card,
  makeStyles,
  CardContent,
  Paper,
  Grid,
  Chip,
  TextField,
  Button
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

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
  skillContainer: {
    display: "flex",
    // justifyContent: "flex-start"
  },
  chipContainer: {
    display: "flex",
    // justifyContent: 'flex-start',
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(1.2),
  },
}));

function GeneralSkillsComponent(props) {

  const classes = useStyles();

  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState({
    skill: props.resumeData.generalSkills.skill,
    id: props.resumeData.generalSkills.id,
  });

  const handleDelete = (skillToDelete) => (event) => {
    event.preventDefault();
    props.removeGeneralSkill(skillToDelete);
    setInfo({ ...info });
  };

  const anotherSkill = (event) => {
    event.preventDefault();
    if (info.skill.length > 0) {
      props.addGeneralSkill(info);
    }
    setInfo({
      id: Date.now(),
      skill: "",
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const saveInfo = (event) => {
    event.preventDefault();
    // props.addGeneralSkill(info);
    setEdit(false);
  };
  
  if(edit) {
  return (
    <Card>
      <h1>
        General Skills{" "}
        <EditIcon color="primary" onClick={() => setEdit(!edit)}>
          Edit
        </EditIcon>
      </h1>

      <form className={classes.form} onSubmit={saveInfo} >
        <Grid className={classes.formContainer} fullWidth>
          <TextField
            variant="outlined"
            margin="normal"
            className={classes.skillTextField}
            fullWidth
            name="skill"
            label="General Skill"
            id="skill"
            onChange={onChange}
            value={info.skill}
          />
          <AddBoxIcon
            fullWidth
            className={classes.addIcon}
            color="primary"
            onClick={anotherSkill}
          />
        </Grid>

      <CardContent className={classes.cardContent}>
        <Grid className={classes.skillContainer}>
                <Paper
                  component="ul"
                  square="true"
                  className={classes.chipContainer}
                >
                  <Chip
                    label="Your Skills:"
                    className={classes.chip}
                    color="primary"
                  />
                  {props.resumeData.generalSkills.map((data) => {
                    return (
                      <li key={data.id}>
                        <Chip
                          label={data.skill}
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
            General Skills{" "}
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
                  {props.resumeData.generalSkills.map((data) => {
                    return (
                      <li key={data.id}>
                        <Chip
                          label={data.skill}
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

export default connect(mapStateToProps, { updateGeneralSkillsData, removeGeneralSkill, addGeneralSkill })(
  GeneralSkillsComponent
)
