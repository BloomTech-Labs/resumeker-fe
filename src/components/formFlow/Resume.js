import React from "react"
import "./formStyles/reviewForm.css"
import { connect } from "react-redux";

import { Paper, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "center"
    },
    paper: {
        width: "1240px",
        height: "1754px",
        display: "flex",
        flexDirection: "column",
        paddingTop:"2%",
        paddingBottom: "2%",
        paddingLeft:"5%",
        paddingRight:"5%",
    },
    name: {
        fontSize: "30px"
    }
  }));

function ResumeComponent(props) {

    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <Grid>
                    <div className={classes.name}>
                        {props.resumeData.firstName} {props.resumeData.lastName}
                    </div>
                    <div>
                        {props.resumeData.email}
                    </div>
                </Grid>
                <Grid>
                    Education
                </Grid>
                <Grid>
                    Jobs
                </Grid>
                <Grid>
                    Projects
                </Grid>
                <Grid>
                    Tech Skills
                </Grid>
                <Grid>
                    General Skills
                </Grid>
                <Grid>
                    Languages
                </Grid>
                <Grid>
                    Hobbies
                </Grid>
            </Paper>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
      resumeData: state.resumeFormReducer.resumeData,
      resumeError: state.resumeFormReducer.error,
      resumeLoading: state.resumeFormReducer.loading,
    };
  };

export default connect(mapStateToProps)(ResumeComponent)