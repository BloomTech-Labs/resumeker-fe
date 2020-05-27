import React from "react";

import { Avatar, Grid, Typography, makeStyles } from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
    image: {
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(9, 109, 217, 0.671)",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    startText: {
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
    },
    tips: {
        backgroundColor: "white",
        width: "70%",
        height: "auto",
        padding: "10px",
        borderRadius: "18px",
        marginLeft: "15%",
    },
    spacing: {
        padding: "15px 0px",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        alignSelf: "center",
    },
}));

function TipsLayout(props) {
    const classes = useStyles();

    return (
        <Grid item xs={false} sm={4} md={3} className={classes.image}>
            <Grid item className={classes.startText}>
                <Avatar className={classes.avatar}>
                    <DescriptionIcon />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5"
                    className={classes.spacing}
                >
                    Start Making Your Resume
                </Typography>
            </Grid>
            <Grid item className={classes.tips}>
                {props.tips}
            </Grid>
        </Grid>
    );
}

export default TipsLayout;
