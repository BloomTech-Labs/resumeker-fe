import React from "react"

import {
    TextField,
    makeStyles,
    Grid
  } from "@material-ui/core";

  import AddBoxIcon from "@material-ui/icons/AddBox";

  const useStyles = makeStyles((theme) => ({
    textField: {
      textAlign: "center",
      width: "100%"
    },
    addIcon: {
        width: "auto",
        height: "75%",
    },
    formContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        height: "6rem",
    },
    extraTextField: {
        width: "90%",
        height: "4rem",
    },
  }));

function SingleFieldFormTemplate(props) {

    const classes = useStyles();

    return(
        <div className={classes.textField}>
            <Grid className={classes.formContainer} fullWidth>
                <TextField
                  variant="outlined"
                  margin="normal"
                  className={classes.extraTextField}
                  fullWidth
                  name={props.name}
                  label={props.label}
                  id={props.name}
                  onChange={props.onChange}
                  value={props.info}
                />
                <AddBoxIcon
                  className={`${classes.addIcon} singlePageButton`}
                  id="addButton"
                  color="primary"
                  onClick={props.anotherOne}
                />
              </Grid>
        </div>
    )
}

export default SingleFieldFormTemplate