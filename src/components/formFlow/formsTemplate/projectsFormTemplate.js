import React from "react";

import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    textAlign: "center",
    width: "100%",
  },
}));

function ProjectsFormTemplate(props) {
  const classes = useStyles();

  return (
    <div className={classes.textField}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="projectName"
        label="Name of the Project"
        id="projectName"
        onChange={props.onChange}
        value={props.info.projectName}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="projectStartDate"
        type="date"
        label="Starting Date (Optional)"
        id="projectStartDate"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.onChange}
        value={props.info.projectStartDate}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        type="date"
        name="projectEndDate"
        label="End Date (Optional)"
        id="projectEndDate"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.onChange}
        value={props.info.projectEndDate}
      />
      {/* <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="role"
        label="Role"
        id="role"
        onChange={props.onChange}
        value={props.info.role}
      /> */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="roleDescription"
        label="Role Description"
        id="roleDescription"
        onChange={props.onChange}
        value={props.info.roleDescription}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="link"
        label="Link to Project"
        id="link"
        type="url"
        onChange={props.onChange}
        value={props.info.link}
        helperText="Links must follow this format: http://www.Resumeker.com"
      />
    </div>
  );
}

export default ProjectsFormTemplate;
