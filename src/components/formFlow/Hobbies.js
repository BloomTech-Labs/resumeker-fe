import React, { useState } from "react";
import { connect } from "react-redux";

//Actions
import { addHobby, removeHobbyData } from "../../actions/resumeFormActions.js";
import SingleFieldFormTemplate from "./formsTemplate/singleFieldFormTemplate"
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
  hobbyTextField: {
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

function Hobbies(props) {
  const [info, setInfo] = useState({
    id: Date.now(),
    hobby: "",
  });

  const classes = useStyles();

  const nextPage = (event) => {
    if (info.hobby.length > 0) {
      props.addHobby(info);
    }
    props.history.push("/form/review");
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

  const handleDelete = (hobbyToDelete) => (event) => {
    event.preventDefault();
    props.removeHobbyData(hobbyToDelete);
    setInfo({ ...info });
  };

  return (
    <div>
      <Grid container componet="main" className={classes.root}>
        <CssBaseline />
        <TipsLayout />
        <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              What Are Some Of Your Hobbies?
            </Typography>
            <form className={classes.form} onSubmit={anotherHobby}>
            <SingleFieldFormTemplate onChange={onChange} info={info.hobby} anotherOne={anotherHobby} name="hobby" label="Your Hobbies" />

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

              <Grid className={classes.buttonContainer}>
                <Button
                  fullWidth
                  type="button"
                  variant="outlined"
                  color="primary"
                  className={classes.previousButton}
                  onClick={() => {
                    props.history.push("/form/languages");
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
                  Review
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

export default connect(mapStateToProps, { addHobby, removeHobbyData })(Hobbies);
