import React from "react"

import {
    TextField,
    makeStyles,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    textField: {
      textAlign: "center",
      width: "100%"
    },
  }));

function ReviewGeneralInfoFormTemplate(props) {

    const classes = useStyles();

    return(
        <div className={classes.textField}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="name"
                label="Name"
                id="name"
                onChange={props.onChange}
                value={props.info.name}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                id="email"
                onChange={props.onChange}
                value={props.info.email}
              />
        </div>
    )
}

export default ReviewGeneralInfoFormTemplate