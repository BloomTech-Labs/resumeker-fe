import React, { useEffect } from "react";

import { graphql } from "react-apollo";

import { NavLink, Redirect } from "react-router-dom";

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

    console.log("We are in the profile");

    const displayDrafts = () => {
        const { getDrafts } = props.data;
        console.log(props.data)
        console.log("Drafts received")
        if (getDrafts) {
            if (getDrafts.length > 0) {
                console.log("Drafts #2")
                return getDrafts.map((draft) => <ResumeCard key={draft.id} id={draft.id} />);
            } else {
                console.log("No drafts")
                return <div>No Drafts</div>;
            }
        } else {
            console.log("It's loading")
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
              <Redirect to="/form/generalInfo" />
            // props.history.push("/form/generalInfo");
          }}
        >
          Add a New Resume
        </Button> */}


            </div>

            <div className={classes.infoContainer}>
                <UserData />
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
        </div>
    );
}

export default graphql(GET_DRAFTS_QUERY)(Profile);
