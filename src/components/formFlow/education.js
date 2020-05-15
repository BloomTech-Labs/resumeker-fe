import React, { useState } from "react";
import { connect } from "react-redux";

//Actions
import { addEducationData, updateEducationData } from "../../actions/resumeFormActions.js";

import EducationCard from "./reviewForm/educationCard"

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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
    marginBottom: "100px",
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

function Education(props) {
  const [info, setInfo] = useState({
    type: "",
    schoolName: "",
    yearIn: "",
    yearOut: "",
    certificateName: "",
    id: Date.now(),
  });

  const classes = useStyles();

  const nextPage = (event) => {
    event.preventDefault();
    props.addEducationData(info);
    props.history.push("/form/work");
  };

  const anotherEducation = (event) => {
    event.preventDefault();
    props.addEducationData(info);
    setInfo({
      type: "",
      schoolName: "",
      yearIn: "",
      yearOut: "",
      certificateName: "",
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
        <Grid item xs={false} sm={4} md={3} className={classes.image}>
          <Grid item className={classes.startText}>
            <Avatar className={classes.avatar}>
              <DescriptionIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Start Making Your Resume
            </Typography>
          </Grid>
          <Grid item className={classes.tips}></Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={nextPage}>
              <FormControl className={classes.selectorForm}>
                <InputLabel
                  data-testid="label"
                  className={classes.selectorText}
                  id="type"
                >
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
                onClick={anotherEducation}
              >
                Add Another
              </Button>
              <Grid className={classes.buttonContainer}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.previousButton}
                  onClick={() => {
                    props.history.push("/form/generalInfo");
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

            {props.resumeData.education.length ? (
              props.resumeData.education.map((education) => (
                <div key={education.id}>
                  <EducationCard
                    education={education}
                    updateEducationData={props.updateEducationData}
                  />
                </div>
              ))
            ) : (
              <p>Here you can see your added education</p>
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

export default connect(mapStateToProps, { addEducationData, updateEducationData })(Education);
