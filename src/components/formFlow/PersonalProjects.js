import React, { useState } from "react";
import { connect } from "react-redux";

//Actions
import { addProjectData, updateProjectData } from "../../actions/resumeFormActions.js";
import ProjectCard from "./reviewForm/projectCard"
import ProjectsFormTemplate from "./formsTemplate/projectsFormTemplate"
import TipsLayout from "./formUtils/tipsLayout"

import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  makeStyles,
} from "@material-ui/core";

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
    alignItems: "center",
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
        <TipsLayout />
        <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={nextPage}>
              <ProjectsFormTemplate info={info} onChange={onChange} />
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

            {props.resumeData.projects.length ? (
              props.resumeData.projects.map((project) => (
                <div key={project.id}>
                  <ProjectCard
                    projects={project}
                    updateProjectData={props.updateProjectData}
                  />
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

export default connect(mapStateToProps, { addProjectData, updateProjectData })(PersonalProjects);