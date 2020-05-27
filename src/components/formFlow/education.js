import React, { useState } from "react";
import { connect } from "react-redux";

//Apollo useMutation Hook for API call
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import {
  addEducationMutation as ADD_EDUCATION_MUTATION,
  // getEducationByDraft as GET_EDUCATION_BY_DRAFT,
} from "../../queries/education";

//Actions
import {
  addEducationData,
  updateEducationData,
} from "../../actions/resumeFormActions.js";

import EducationCard from "./reviewForm/educationCard";

import EducationFormTemplate from "./formsTemplate/educationFormTemplate";
import TipsLayout from "./formUtils/tipsLayout";

import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  makeStyles,
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
  tipTextLarge: {
    fontSize: "1.1rem",
  },
  tipTextSmall: {
    fontSize: "0.8rem",
  },
  bold: {
    fontWeight: "900",
  },
  progress: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
}));

function Education(props) {
  const [info, setInfo] = useState({
    type: "",
    schoolName: "",
    yearIn: "",
    yearOut: "",
    certificateName: "",
    draftID: "",
  });

  //Instantiate useMutation Hook / Creates tuple with 1st var being actual
  //call function, and 2nd destructured variable being return data and tracking
  const [addEducation, { loading, error }] = useMutation(
    ADD_EDUCATION_MUTATION,
    {
      // refetchQueries: ["getEducationByDraft"],
      onCompleted(data) {},
    }
  );

  const classes = useStyles();

  const addingData = () => {
    if (info.type.length !== 0 && info.schoolName.length !== 0) {
      props.addEducationData(info);

      //Apollo useMutation API call to send data to backend
      addEducation({
        variables: {
          input: {
            draftID: localStorage.getItem("draftID"),
            schoolType: info.type,
            schoolName: info.schoolName,
            startDate: info.yearIn,
            endDate: info.yearOut,
            certName: info.certificateName,
          },
        },
      });
    }
  };

  const nextPage = (event) => {
    event.preventDefault();
    addingData();
    // refetch()
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.history.push("/form/work");
  };

  const anotherEducation = (event) => {
    event.preventDefault();
    addingData();

    setInfo({
      draftID: "",
      type: "",
      schoolName: "",
      yearIn: "",
      yearOut: "",
      certificateName: "",
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
            <form className={classes.form}>
              <EducationFormTemplate info={info} onChange={onChange} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => anotherEducation(e)}
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
                    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                  id="next_work"
                  onClick={(e) => nextPage(e)}
                  className={classes.nextButton}
                >
                  Next Form
                </Button>
              </Grid>
            </form>
            {/* {DisplayEducationByDraft()} */}
            {/* {data.getEducationByDraft.length ? (
                            data.getEducationByDraft.map((education) => (
                                <div key={education.id}>
                                    <EducationCard
                                        education={education}
                                        updateEducationData={
                                            props.updateEducationData
                                        }
                                    />
                                </div>
                            ))
                        ) : (
                            <p>Here you can see your added education</p>
                        )} */}

            {/* {props.resumeData.education.length ? (
                            props.resumeData.education.map((education) => (
                                <div key={education.id}>
                                    <EducationCard
                                        education={education}
                                        updateEducationData={
                                            props.updateEducationData
                                        }
                                    />
                                </div>
                            ))
                        ) : (
                            <p>Here you can see your added education</p>
                        )} */}
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
        If you have any classes or certifications that directly apply to the
        job, it may be a good idea to include them!
      </p>
    </div>
  );
}

export default connect(mapStateToProps, {
  addEducationData,
  updateEducationData,
})(Education);
