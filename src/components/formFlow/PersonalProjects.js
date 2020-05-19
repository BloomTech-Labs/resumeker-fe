import React, { useState } from "react";
import { connect } from "react-redux";

//Apollo useMutation Hook for API call
import { useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { addProjectMutation as ADD_PROJECT_MUTATION } from "../../queries/queries";

//Actions
import {
    addProjectData,
    updateProjectData,
} from "../../actions/resumeFormActions.js";
import ProjectCard from "./reviewForm/projectCard";
import ProjectsFormTemplate from "./formsTemplate/projectsFormTemplate";
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
}));

function PersonalProjects(props) {
    const [info, setInfo] = useState({
        projectName: "",
        projectStartDate: "",
        projectEndDate: "",
        role: "",
        roleDescription: "",
        link: "",
        userId:"google-oauth2|106346646323547324114"
    });

    //Instantiate useMutation Hook / Creates tuple with 1st var being actual
    //call function, and 2nd destructured variable being return data and tracking
    const [addProject, { loading, error }] = useMutation(ADD_PROJECT_MUTATION, {
        onCompleted(data) {
            // console.log(data, "\n Add Education Response");
        },
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

        //Apollo useMutation API call to send data to backend
        addProject({
            variables: {
                title: info.projectName,
                role: info.role,
                projectUrl: info.link,
                description: info.roleDescription,
                startDate: info.projectStartDate,
                endDate: info.projectEndDate,
                userId: info.userId
            },
        });

        setInfo({
            ...info,
            projectName: "",
            projectStartDate: "",
            projectEndDate: "",
            role: "",
            roleDescription: "",
            link: "",

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
                        <form className={classes.form} onSubmit={nextPage}>
                            <ProjectsFormTemplate
                                info={info}
                                onChange={onChange}
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
                                    id="previous_work"
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
                                    id="next_techSkills"
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
                                        updateProjectData={
                                            props.updateProjectData
                                        }
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

export default connect(mapStateToProps, { addProjectData, updateProjectData })(
    PersonalProjects
);
