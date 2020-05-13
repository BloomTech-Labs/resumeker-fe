import React, { useState } from "react";
import { connect } from "react-redux";

//Actions
import {
  addTechSkill,
  removeTechSkill,
} from "../../actions/resumeFormActions.js";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  makeStyles,
  Chip,
} from "@material-ui/core";

import AddBoxIcon from "@material-ui/icons/AddBox";

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
  previousButton: {
    margin: theme.spacing(3, 0, 2),
    width: "49%",
  },
  nextButton: {
    margin: theme.spacing(3, 0, 2),
    width: "49%",
    height: "3.5rem",
  },
  addButton: {
    margin: theme.spacing(3, 0, 2),
    width: "25%",
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
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  formContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    height: "6rem",
  },
  skillTextField: {
    width: "90%",
    height: "4rem",
  },
  addIcon: {
    width: "auto",
    height: "75%",
    // marginBottom: "2px",
    // margin: "0",
    // padding: "4px"
  },
}));

function TechSkills(props) {
  const [info, setInfo] = useState({
    id: Date.now(),
    skill: "",
  });

  const classes = useStyles();

  const nextPage = (event) => {
    // event.preventDefault();
    if (info.skill.length > 0) {
      props.addTechSkill(info);
    }
    props.history.push("/form/generalskills");
  };

  const anotherSkill = (event) => {
    event.preventDefault();
    if (info.skill.length > 0) {
      props.addTechSkill(info);
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

  const handleDelete = (skillToDelete) => (event) => {
    event.preventDefault();
    props.removeTechSkill(skillToDelete);
    setInfo({ ...info });
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
            <Typography component="h1" variant="h5">
              Tell us about some of the technical skills that you possess!
            </Typography>
            <Typography color="grey" component="h5" variant="h7">
              (CSS, HTML, JS, React, Redux, JAVA, NodeJS, GraphQL, Express,
              Postgres, SQLite, Knex,etc)
            </Typography>
            <form className={classes.form} onSubmit={anotherSkill}>
              <Grid className={classes.formContainer} fullWidth>
                <TextField
                  variant="outlined"
                  margin="normal"
                  className={classes.skillTextField}
                  fullWidth
                  name="skill"
                  label="Tech Skill"
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
                  {props.resumeData.techSkills.map((data) => {
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

              <Grid className={classes.buttonContainer}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.previousButton}
                  onClick={() => {
                    props.history.push("/form/work");
                  }}
                >
                  Previous Form
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.nextButton}
                  onClick={() => {
                    nextPage();
                  }}
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

const mapStateToProps = (state) => {
  return {
    resumeData: state.resumeFormReducer.resumeData,
    resumeError: state.resumeFormReducer.error,
    resumeLoading: state.resumeFormReducer.loading,
  };
};

export default connect(mapStateToProps, { addTechSkill, removeTechSkill })(
  TechSkills
);
