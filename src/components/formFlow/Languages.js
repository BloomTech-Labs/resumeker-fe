import React, { useState } from "react";
import { connect } from "react-redux";

//Apollo useMutation Hook for API call
import { useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { addLanguageMutation as ADD_LANGUAGE_MUTATION } from "../../queries/queries";

//Actions
import {
    addLanguage,
    removeLanguageData,
} from "../../actions/resumeFormActions.js";

import SingleFieldFormTemplate from "./formsTemplate/singleFieldFormTemplate";
import TipsLayout from "./formUtils/tipsLayout";

import {
    Button,
    CssBaseline,
    Paper,
    Grid,
    Typography,
    makeStyles,
    Chip,
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
    skillContainer: {
        display: "flex",
    },
    chipContainer: {
        display: "flex",
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
}));

function Languages(props) {
    const [info, setInfo] = useState({
        userId: "google-oauth2|106346646323547324114",
        language: "",
    });

    //Instantiate useMutation Hook / Creates tuple with 1st var being actual
    //call function, and 2nd destructured variable being return data and tracking
    const [addLanguage, { loading, error }] = useMutation(
        ADD_LANGUAGE_MUTATION,
        {
            onCompleted(data) {
                // console.log(data, "\n Add Education Response");
            },
        }
    );

    const classes = useStyles();

    const nextPage = (event) => {
        if (info.language.length > 0) {
            props.addLanguage(info);
        }
        props.history.push("/form/hobbies");
    };

    const anotherLanguage = (event) => {
        event.preventDefault();
        if (info.language.length > 0) {
            props.addLanguage(info);

            //Apollo useMutation API call to send data to backend
            addLanguage({
                variables: {
                    userId: info.userId,
                    language: info.language,
                },
            });
        }

        setInfo({
            ...info,
            language: "",
        });
    };
    const onChange = (event) => {
        event.preventDefault();
        setInfo({ ...info, [event.target.name]: event.target.value });
    };

    const handleDelete = (languageToDelete) => (event) => {
        event.preventDefault();
        props.removeLanguageData(languageToDelete);
        setInfo({ ...info });
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
                        <Typography component="h1" variant="h5">
                            What Languages Do You Speak?
                        </Typography>
                        <form
                            className={classes.form}
                            onSubmit={anotherLanguage}
                            id="languagesForm"
                        >
                            <SingleFieldFormTemplate
                                onChange={onChange}
                                info={info.language}
                                anotherOne={anotherLanguage}
                                name="language"
                                label="Language"
                            />
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
                                    {props.resumeData.languages.map((data) => {
                                        return (
                                            <li
                                                key={data.id}
                                                className="listOfLanguages"
                                            >
                                                <Chip
                                                    label={data.language}
                                                    onDelete={handleDelete(
                                                        data
                                                    )}
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
                                    id="previous_generalSkills"
                                    className={`${classes.previousButton} singlePageButton`}
                                    onClick={() => {
                                        props.history.push(
                                            "/form/generalskills"
                                        );
                                    }}
                                >
                                    Previous Form
                                </Button>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    id="next_hobbies"
                                    className={`${classes.nextButton} singlePageButton`}
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

export default connect(mapStateToProps, { addLanguage, removeLanguageData })(
    Languages
);
