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

function GeneralInfoFormTemplate(props) {

    const classes = useStyles();

    return(
        <div className={classes.textField}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required={true}
                id="firstName"
                label="First Name"
                name="firstName"
                autoFocus
                onChange={props.onChange}
                value={props.info.firstName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="lastName"
                label="Last Name"
                id="lastName"
                onChange={props.onChange}
                value={props.info.lastName}
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

export default GeneralInfoFormTemplate