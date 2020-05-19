import React, { useState } from "react";
import { connect } from "react-redux";

//Apollo useMutation Hook for API call
import { useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { addHobbyMutation as ADD_HOBBY_MUTATION } from "../../queries/queries";

//Actions
import { addHobby, removeHobbyData } from "../../actions/resumeFormActions.js";
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

function Hobbies(props) {
    const [info, setInfo] = useState({
        userId: "google-oauth2|106346646323547324114",
        hobby: "",
    });

    //Instantiate useMutation Hook / Creates tuple with 1st var being actual
    //call function, and 2nd destructured variable being return data and tracking
    const [addHobby, { loading, error }] = useMutation(ADD_HOBBY_MUTATION, {
        onCompleted(data) {
            // console.log(data, "\n Add Education Response");
        },
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

            //Apollo useMutation API call to send data to backend
            addHobby({
                variables: {
                    userId: info.userId,
                    name: info.hobby,
                },
            });
        }
        setInfo({
            ...info,
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
                            What Are Some Of Your Hobbies?
                        </Typography>
                        <form
                            className={classes.form}
                            onSubmit={anotherHobby}
                            id="hobbiesForm"
                        >
                            <SingleFieldFormTemplate
                                onChange={onChange}
                                info={info.hobby}
                                anotherOne={anotherHobby}
                                name="hobby"
                                label="Your Hobbies"
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
                                    {props.resumeData.hobbies.map((data) => {
                                        return (
                                            <li
                                                key={data.id}
                                                className="listOfHobbies"
                                            >
                                                <Chip
                                                    label={data.hobby}
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
                                    id="previous_languages"
                                    className={`${classes.previousButton} singlePageButton`}
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
                                    id="next_review"
                                    className={`${classes.nextButton} singlePageButton`}
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
