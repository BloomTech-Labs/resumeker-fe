import React from "react";
import { useQuery } from "@apollo/react-hooks";
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

export default function Profile(props) {
    const { loading, error, data } = useQuery(GET_DRAFTS_QUERY);
    const classes = useStyles();

    if (loading) return <div>Loading</div>;
    if (error) return <div>{"error, check console"}</div>;

    const { getDrafts } = data;
    // console.log(getDrafts, "profile query response");

    if (loading) {
        console.log("It's loading");
        return <div>Loading...</div>;
    }

    if (data) {
        console.log(data);
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
                        {data.getDrafts.length > 0 ? (
                            getDrafts.map((draft) => (
                                <ResumeCard key={draft.id} draftID={draft.id} />
                            ))
                        ) : (
                            <div>No Drafts</div>
                        )}
                    </div>
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
}
