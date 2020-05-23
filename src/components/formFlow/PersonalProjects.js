import React, { useState } from "react";
import { connect } from "react-redux";

//Apollo useMutation Hook for API call
import { useQuery, useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { addProjectMutation as ADD_PROJECT_MUTATION } from "../../queries/queries";
//Import Draft_Id query for memory cache query
import { DRAFT_ID } from "../../queries/draftID";

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

function PersonalProjects(props) {

    const { data } = useQuery(DRAFT_ID);

    const [info, setInfo] = useState({
        projectName: "",
        projectStartDate: "",
        projectEndDate: "",
        role: "",
        roleDescription: "",
        link: "",
        draftID: "",
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
        if (
            info.projectName.length !== 0 &&
            info.role.length !== 0 &&
            info.roleDescription !== 0
        ) {
            props.addProjectData(info);
        }
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
                draftID: data.draftId,
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

function Tip() {
    const classes = useStyles();

    return (
        <div>
            <p className={classes.tipTextLarge}>
                Did you know, that the average time a recuiter spends on a
                resume is only <span className={classes.bold}>six</span>{" "}
                seconds?
            </p>
            <p className={classes.tipTextLarge}>
                You need to catch their eye, and there's no better way to get
                them to continue reading your resume, than with a personal
                project!
            </p>
            <p className={classes.tipTextSmall}>
                Be thorough and describe the technologies and your role in the
                project. If you have a project that use's the same technologies
                as the job, definitely include it!
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

export default connect(mapStateToProps, { addProjectData, updateProjectData })(
    PersonalProjects
);
