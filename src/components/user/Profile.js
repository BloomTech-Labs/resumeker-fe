import React, { useEffect } from "react";

import { graphql } from "react-apollo";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import UserData from "./userData.js";
import ResumeCard from "./ResumeCard";

import { getDraftsQuery as GET_DRAFTS_QUERY } from "../../queries/draft";

import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    addResume: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        width: "75%",
        backgroundColor: "lightgrey",
    },
    infoContainer: {
        backgroundColor: "#3f51b5",
        width: "20%",
        alignSelf: "flex-start",
    },
}));

function Profile(props) {
    const classes = useStyles();

    console.log(props.data, "profile query response");

    const displayDrafts = () => {
        const { getDrafts } = props.data;

        if (getDrafts) {
            if (getDrafts.length > 0) {
                return getDrafts.map((draft, index) => <ResumeCard key={index} id={draft.id} />);
            } else {
                return <div>No Drafts</div>;
            }
        } else {
            return <div>Loading...</div>;
        }
    };

    
    return (
        <div className="profile">
            <div className={classes.container}>
                <div
                    className="resume-container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {displayDrafts()}
                </div>

                {/* <Button
          variant="contained"
          color="primary"
          className={classes.addResume}
          onClick={() => {
            props.history.push("/form/generalInfo");
          }}
        >
          Add a New Resume
        </Button> */}
                <NavLink to="/form/generalInfo">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.addResume}
                    >
                        Add a New Resume
                    </Button>
                </NavLink>
            </div>

            <div className={classes.infoContainer}>
                <UserData />
            </div>
        </div>
    );
}

export default graphql(GET_DRAFTS_QUERY)(Profile);
