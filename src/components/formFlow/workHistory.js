import React, { useState } from "react";
import { connect } from "react-redux";

//Apollo useMutation Hook for API call
import { useQuery, useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { addWorkMutation as ADD_WORK_MUTATION } from "../../queries/queries";
//Import Draft_Id query for memory cache query
import { DRAFT_ID } from "../../queries/draftID";

//Actions
import {
    addWorkData,
    updateWorkData,
} from "../../actions/resumeFormActions.js";

import JobHistoryCard from "./reviewForm/jobHistoryCard";

import WorkHistoryFormTemplate from "./formsTemplate/workHistoryFormTemplate";
import TipsLayout from "./formUtils/tipsLayout";

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
    tipTextLarge: {
      fontSize: "1.1rem",
    },
    tipTextSmall: {
      fontSize: "0.8rem",
    },
    bold: {
      fontWeight: "900",
    },
}));

function WorkHistory(props) {

    const { data } = useQuery(DRAFT_ID);

    const [info, setInfo] = useState({
        jobTitle: "",
        companyName: "",
        startYear: "",
        endYear: "",
        jobDescription: "",
        draftID: "",
    });

    //Instantiate useMutation Hook / Creates tuple with 1st var being actual
    //call function, and 2nd destructured variable being return data and tracking
    const [addWork, { loading, error }] = useMutation(ADD_WORK_MUTATION, {
        onCompleted(data) {
            // console.log(data, "\n Add Education Response");
        },
    });

    const classes = useStyles();

    const nextPage = (event) => {
        event.preventDefault();
        if (
          info.jobTitle.length !== 0 &&
          info.companyName.length !== 0 &&
          info.jobDescription.length !== 0
        ) {
          props.addWorkData(info);
        }
        props.history.push("/form/projects");
        console.log("data from reducer", props.resumeData.jobs);
    };

    const anotherJob = (event) => {
        event.preventDefault();
        props.addWorkData(info);

        //Apollo useMutation API call to send data to backend
        addWork({
            variables: {
                draftID: data.draftID,
                startDate: info.startYear,
                endDate: info.endYear,
                title: info.jobTitle,
                description: info.jobDescription,
                company: info.companyName,
            },
        });

        setInfo({
            ...info,
            jobTitle: "",
            companyName: "",
            startYear: "",
            endYear: "",
            jobDescription: "",
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
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={9}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <div className={classes.paper}>
                        <form
                            id="workForm"
                            className={classes.form}
                            onSubmit={nextPage}
                        >
                            <WorkHistoryFormTemplate
                                info={info}
                                onChange={onChange}
                            />
                            <Button
                                type="reset"
                                fullWidth
                                variant="contained"
                                color="primary"
                                id="anotherJob"
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
                                    id="previous_education"
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
                                    id="next_projects"
                                    className={classes.nextButton}
                                >
                                    Next Form
                                </Button>
                            </Grid>
                        </form>

                        {props.resumeData.jobs.length ? (
                            props.resumeData.jobs.map((job) => (
                                <div key={job.id}>
                                    <JobHistoryCard
                                        job={job}
                                        updateWorkData={props.updateWorkData}
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

function Tip() {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.tipTextLarge}>
        When adding your work experience, you want to have a strong job
        description. The description should emphasize how you created an{" "}
        <span className={classes.bold}>impact</span> at your previous or current
        job!
      </p>
      <p className={classes.tipTextSmall}>
        Make sure to use action words in your description! (Ex. Created,
        Developed, Saved, Optimized, Built)
      </p>
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

export default connect(mapStateToProps, { addWorkData, updateWorkData })(
    WorkHistory
);
