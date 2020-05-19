import React, { useState } from "react";
import { connect } from "react-redux";


//Actions
import { addData } from "../../actions/resumeFormActions.js";

import GeneralInfoFormTemplate from "./formsTemplate/generalInfoFormTemplate";
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
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function GeneralInfo(props) {
    const [info, setInfo] = useState({
        email: `${props.resumeData.email}`,
        firstName: `${props.resumeData.firstName}`,
        lastName: `${props.resumeData.lastName}`,
    });

    const classes = useStyles();

    const nextPage = (event) => {
        event.preventDefault();
        props.addData(info);
        props.history.push("/form/education");
    };

    const onChange = (event) => {
        event.preventDefault();
        setInfo({ ...info, [event.target.name]: event.target.value });
    };

    
    return (
        <div id="generalInfoForm">
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
                            <GeneralInfoFormTemplate
                                onChange={onChange}
                                info={info}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Next
                            </Button>
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

export default connect(mapStateToProps, { addData })(GeneralInfo);
