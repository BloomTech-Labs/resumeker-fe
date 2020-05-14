import React, { useState } from "react";
import { connect } from "react-redux";

//Actions
import { addWorkData, updateWorkData } from "../../actions/resumeFormActions.js";

import JobHistoryCard from "./reviewForm/jobHistoryCard"

import WorkHistoryFormTemplate from "./formsTemplate/workHistoryFormTemplate"
import TipsLayout from "./formUtils/tipsLayout"

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
// import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(9, 109, 217, 0.671)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  startText: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  },
  tips: {
    backgroundColor: "white",
    width: "70%",
    height: "20rem",
    marginLeft: "15%",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    alignSelf: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    //   marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
}));

function WorkHistory(props) {
  const [info, setInfo] = useState({
    jobTitle: "",
    companyName: "",
    startYear: "",
    endYear: "",
    jobDescription: "",
    id: Date.now(),
  });

  const classes = useStyles();

  const nextPage = (event) => {
    event.preventDefault();
    props.addWorkData(info);
    props.history.push("/form/projects");
    console.log("data from reducer", props.resumeData.jobs);
  };

  const anotherJob = (event) => {
    event.preventDefault();
    props.addWorkData(info);
    setInfo({
      jobTitle: "",
      companyName: "",
      startYear: "",
      endYear: "",
      jobDescription: "",
      id: Date.now(),
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Grid container componet="main" className={classes.root}>
        <CssBaseline />
        <TipsLayout />
        <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <form id="workForm" className={classes.form} onSubmit={nextPage}>
              <WorkHistoryFormTemplate info={info} onChange={onChange} />
              <Button
                type="reset"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={anotherJob}
              >
                Another Job?
              </Button>
              <Grid className={classes.buttonContainer}>
                <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.previousButton}
                  onClick={() => {
                    props.history.push("/form/education");
                  }}
                >
                  Previous Form
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.nextButton}
                >
                  Next Form
                </Button>
              </Grid>
            </form>

            {props.resumeData.jobs.length ? (
              props.resumeData.jobs.map((job) => (
                <div key={job.id}>
                  <JobHistoryCard job={job} updateWorkData={props.updateWorkData} />
                </div>
              ))
            ) : (
              <p>Here you can see your added jobs</p>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    resumeData: state.resumeFormReducer.resumeData,
    resumeError: state.resumeFormReducer.error,
    resumeLoading: state.resumeFormReducer.loading,
  };
};

export default connect(mapStateToProps, { addWorkData, updateWorkData })(WorkHistory);
