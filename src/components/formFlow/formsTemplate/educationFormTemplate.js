import React from "react";

import {
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    textAlign: "center",
    width: "100%",
  },
  selectorForm: {
    width: "100%", // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  selectorText: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
    marginBottom: "100px",
  },
}));

function EducationFormTemplate(props) {
  const classes = useStyles();

  return (
    <div className={classes.textField}>
      <FormControl className={classes.selectorForm} id="formSelector">
        <InputLabel
          data-testid="label"
          className={classes.selectorText}
          id="typeSelector"
        >
          Education
        </InputLabel>
        <Select
          className={classes.textField}
          variant="outlined"
          fullWidth
          id="type"
          label="Education"
          name="type"
          autoFocus
          onChange={props.onChange}
          value={props.info.type}
        >
          <MenuItem value={"UNDERGRADUATE"}>College</MenuItem>
          <MenuItem value={"GRADUATE"}>Graduate</MenuItem>
          <MenuItem value={"CERTIFICATION"}>Certification</MenuItem>
          <MenuItem value={"COURSE"}>Course</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="schoolName"
        label="Name of the school"
        id="schoolName"
        onChange={props.onChange}
        value={props.info.schoolName}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="yearIn"
        type="date"
        // data-date-format="mm-dd-yyyy"
        label="School Starting Date"
        id="yearIn"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.onChange}
        value={props.info.yearIn}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        type="date"
        // data-date-format="mm-dd-yyyy"
        name="yearOut"
        label="Finishing School"
        id="yearOut"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.onChange}
        value={props.info.yearOut}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="certificateName"
        label="Name of the certificate"
        id="certificateName"
        onChange={props.onChange}
        value={props.info.certificateName}
      />
    </div>
  );
}

export default EducationFormTemplate;
