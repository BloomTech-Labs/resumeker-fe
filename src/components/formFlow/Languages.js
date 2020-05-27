import React, { useState } from "react";
import { connect } from "react-redux";
//Apollo useMutation Hook for API call
import { useQuery, useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { addLanguageMutation as ADD_LANGUAGE_MUTATION } from "../../queries/languages";
//Import Draft_Id query for memory cache query
import { DRAFT_ID } from "../../queries/draftID";
//Actions
import {
  addLanguage,
  removeLanguageData,
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
function Languages(props) {
  const { data } = useQuery(DRAFT_ID);
  const [info, setInfo] = useState({
    draftID: "",
    language: "",
    id: Date.now(),
  });
  const [activeStep, setActiveStep] = useState(7);
  //Instantiate useMutation Hook / Creates tuple with 1st var being actual
  //call function, and 2nd destructured variable being return data and tracking
  const [addLanguage, { loading, error }] = useMutation(ADD_LANGUAGE_MUTATION, {
    onCompleted(data) {
      // console.log(data, "\n Add Language Response");
    },
  });
  const classes = useStyles();

  const addingData = () => {
    if (info.language.length > 0) {
      props.addLanguage(info);
      //Apollo useMutation API call to send data to backend
      addLanguage({
        variables: {
          input: {
            draftID: localStorage.getItem("draftID"),
            language: info.language,
          },
        },
      });
    }
  };

  const nextPage = (event) => {
    event.preventDefault();
    addingData();
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.history.push("/form/hobbies");
  };
  const anotherLanguage = (event) => {
    event.preventDefault();
    addingData();
    setInfo({
      ...info,
      language: "",
      id: Date.now(),
    });
  };
  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const handleDelete = (languageToDelete) => (event) => {
    event.preventDefault();
    props.removeLanguageData(languageToDelete);
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
              What Languages Do You Speak?
            </Typography>
            <form
              className={classes.form}
              onSubmit={anotherLanguage}
              id="languagesForm"
            >
              <SingleFieldFormTemplate
                onChange={onChange}
                info={info.language}
                anotherOne={(e) => anotherLanguage(e)}
                name="language"
                label="Language"
              />
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
                      <li key={data.id} className="listOfLanguages">
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
              <Grid className={classes.buttonContainer}>
                <Button
                  fullWidth
                  type="button"
                  variant="outlined"
                  color="primary"
                  id="previous_generalSkills"
                  className={`${classes.previousButton} singlePageButton`}
                  onClick={() => {
                    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
                    props.history.push("/form/generalskills");
                  }}
                >
                  Previous Form
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  id="next_hobbies"
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
    </div>
  );
}
function Tip() {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.tipTextLarge}>
        Did you know being Bilingual can improve your competitiveness in the job
        market?
      </p>
      <p className={classes.tipTextLarge}>
        If you speak multiple languages make sure to include them!
      </p>
      <p className={classes.tipTextSmall}>
        Make sure you're ready to demonstrate your multilingualism, however!
      </p>
    </div>
  );
}

export default connect(mapStateToProps, { addLanguage, removeLanguageData })(
  Languages
);
