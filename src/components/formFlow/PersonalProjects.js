import React, { useState } from "react";
import { connect } from "react-redux";

//Actions
import { addProjectData } from "../../actions/resumeFormActions.js";

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

function PersonalProjects(props) {
  const [info, setInfo] = useState({
    projectName: "",
    projectStartDate: "",
    projectEndDate: "",
    role: "",
    roleDescription: "",
    link: "",
    id: Date.now(),
  });

  const classes = useStyles();

  const nextPage = (event) => {
    event.preventDefault();
    props.addProjectData(info);
    props.history.push("/form/techskills");
  };

  const anotherProject = (event) => {
    event.preventDefault();
    props.addProjectData(info);
    setInfo({
      projectName: "",
      projectStartDate: "",
      projectEndDate: "",
      role: "",
      roleDescription: "",
      link: "",
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="projectName"
                label="Name of the Project"
                id="projectName"
                onChange={onChange}
                value={info.projectName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="projectStartDate"
                type="date"
                label="Starting Date (Optional)"
                id="projectStartDate"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onChange}
                value={info.projectStartDate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                type="date"
                name="projectEndDate"
                label="End Date (Optional)"
                id="projectEndDate"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onChange}
                value={info.projectEndDate}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="role"
                label="Role"
                id="role"
                onChange={onChange}
                value={info.role}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="roleDescription"
                label="Role Description"
                id="roleDescription"
                onChange={onChange}
                value={info.roleDescription}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="link"
                label="Link to Project"
                id="link"
                onChange={onChange}
                value={info.link}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={anotherProject}
              >
                Add Another
              </Button>
              <Grid className={classes.buttonContainer}>
                <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.previousButton}
                  onClick={() => {
                    props.history.push("/form/work");
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

export default connect(mapStateToProps, { addProjectData })(PersonalProjects);
