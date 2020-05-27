import React, { useState } from "react";
import { connect } from "react-redux";
//Apollo useMutation Hook for API call
import { useQuery, useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { addSkillMutation as ADD_SKILL_MUTATION } from "../../queries/skills";
//Import Draft_Id query for memory cache query
import { DRAFT_ID } from "../../queries/draftID";
//Actions
import {
  addGeneralSkill,
  removeGeneralSkill,
} from "../../actions/resumeFormActions.js";
import SingleFieldFormTemplate from "./formsTemplate/singleFieldFormTemplate";
import TipsLayout from "./formUtils/tipsLayout";
import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Typography,
  makeStyles,
  Chip,
} from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";

import mapStateToProps from "../mappingState.js";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
  },
  previousButton: {
    margin: theme.spacing(3, 0, 2),
    width: "49%",
  },
  nextButton: {
    margin: theme.spacing(3, 0, 2),
    width: "49%",
    height: "3.5rem",
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
    boxShadow: "none",
  },
  chip: {
    margin: theme.spacing(1.2),
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tipTextLarge: {
    fontSize: "1.1rem",
  },
  tipTextSmall: {
    fontSize: "0.8rem",
  },
  progress: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
}));
function GeneralSkills(props) {
  const { data } = useQuery(DRAFT_ID);
  const [info, setInfo] = useState({
    draftID: "",
    skill: "",
    id: Date.now(),
  });
  const [activeStep, setActiveStep] = useState(6);
  //Instantiate useMutation Hook / Creates tuple with 1st var being actual
  //call function, and 2nd destructured variable being return data and tracking
  const [addSkill, { loading, error }] = useMutation(ADD_SKILL_MUTATION, {
    onCompleted(data) {
      console.log(data, "\n Add General Skill Response");
    },
  });
  const classes = useStyles();

  const addingData = () => {
    if (info.skill.length > 0) {
      props.addGeneralSkill(info);
      //Apollo useMutation API call to send data to backend
      addSkill({
        variables: {
          input: {
            draftID: localStorage.getItem("draftID"),
            skillType: "Qualitative",
            name: info.skill,
          },
        },
      });
    }
  };

  const nextPage = (event) => {
    event.preventDefault();
    addingData();
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.history.push("/form/languages");
  };
  const anotherSkill = (event) => {
    event.preventDefault();
    addingData();
    setInfo({
      ...info,
      skill: "",
      id: Date.now(),
    });
  };
  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const handleDelete = (skillToDelete) => (event) => {
    event.preventDefault();
    props.removeGeneralSkill(skillToDelete);
    setInfo({ ...info });
  };
  return (
    <div>
      <Grid container componet="main" className={classes.root}>
        <CssBaseline />
        <TipsLayout tips={Tip()} />
        <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
          <MobileStepper
            variant="progress"
            steps={8}
            position="static"
            activeStep={props.activeStep}
            className={classes.progress}
          />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Tell us about some of your other skills that didn't quite make it
              into the technical section!
            </Typography>
            <Typography
              color="textSecondary"
              component="h5"
              variant="subtitle2"
            >
              (Time Management, Critical Thinking, Teamwork, Problem Solving,
              Comunication, etc)
            </Typography>
            <form
              className={classes.form}
              onSubmit={anotherSkill}
              id="generalSkillsForm"
            >
              <SingleFieldFormTemplate
                onChange={onChange}
                info={info.skill}
                anotherOne={(e) => anotherSkill(e)}
                name="skill"
                label="General Skill"
              />
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
                      <li key={data.id} className="listOfGeneralSkills">
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
              <Grid className={classes.buttonContainer}>
                <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  id="previous_techSkills"
                  className={`${classes.previousButton} singlePageButton`}
                  onClick={() => {
                    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
                    props.history.push("/form/techskills");
                  }}
                >
                  Previous Form
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  id="next_languages"
                  className={`${classes.nextButton} singlePageButton`}
                  onClick={(e) => nextPage(e)}
                >
                  Next Form
                </Button>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      <button onClick={() => nextPage()}>Next Page</button>
    </div>
  );
}
function Tip() {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.tipTextLarge}>
        Employers look for a variety of strong soft skills as it helps ensure a
        productive, collaborative, and healthy work environment!
      </p>
      <p className={classes.tipTextSmall}>
        Do your best to insure these skills are action skills! (Ex. Organized,
        Communicated, Negotiated, Adapted)
      </p>
    </div>
  );
}

export default connect(mapStateToProps, {
  addGeneralSkill,
  removeGeneralSkill,
})(GeneralSkills);
