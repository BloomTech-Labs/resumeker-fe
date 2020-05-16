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

function WorkHistoryFormTemplate(props) {

    const classes = useStyles();

    return(
        <div className={classes.textField}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="jobTitle"
                label="Job Title"
                id="jobTitle"
                onChange={props.onChange}
                value={props.info.jobTitle}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="companyName"
                label="Name of the company"
                id="companyName"
                onChange={props.onChange}
                value={props.info.companyName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                type="date"
                name="startYear"
                label="Starting Date"
                id="startYear"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={props.onChange}
                value={props.info.startYear}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="endYear"
                label="End Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                id="endYear"
                onChange={props.onChange}
                value={props.info.endYear}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="jobDescription"
                label="Job Description"
                id="jobDescription"
                onChange={props.onChange}
                value={props.info.jobDescription}
              />
        </div>
    )
}

export default WorkHistoryFormTemplate