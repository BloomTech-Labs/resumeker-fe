import React from "react";
import "./formStyles/reviewForm.css";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

//Apollo useMutation Hook for API call
import { useQuery } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { getDraftQuery as GET_DRAFT_QUERY } from "../../queries/draft";

import { Paper, makeStyles, Grid } from "@material-ui/core";

import mapStateToProps from "../mappingState.js";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    width: "1240px",
    height: "1754px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  name: {
    fontSize: "30px",
  },
}));

function ResumeComponent(props) {
  const params = useParams();

  const classes = useStyles();

  console.log(params.draftID, "\n DraftID");

  const { data, loading, error } = useQuery(GET_DRAFT_QUERY, {
    variables: { draftID: params.draftID },
  });

  if (loading) return <div>Loading... </div>;

  if (error) return <div>Error: {error}</div>;

  console.log(data, "resume query response");

  const { getDraft } = data;
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Grid>
          <div className={classes.name}>{getDraft.name}</div>
          <div>{getDraft.email}</div>
        </Grid>
        <Grid>Education</Grid>
        <Grid>Jobs</Grid>
        <Grid>Projects</Grid>
        <Grid>Tech Skills</Grid>
        <Grid>General Skills</Grid>
        <Grid>Languages</Grid>
        <Grid>Hobbies</Grid>
      </Paper>
    </div>
  );
}

export default connect(mapStateToProps)(ResumeComponent);
