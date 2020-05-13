import React, { useState } from "react";

import "../formStyles/reviewForm.css";

//Actions

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import { CardContent, makeStyles, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    alignSelf: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textField: {
    textAlign: "center",
  },
  selectorForm: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
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
  skillTextField: {
    width: "90%",
    height: "4rem",
  },
}));

function TechSkillsCard(props) {
  // const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    skill: `${props.techSkills.skill}`,
    id: props.techSkills.id,
  });

  const saveInfo = (event) => {
    event.preventDefault();
    props.updateTechSkillsData(info);
    // setEdit(false);
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const classes = useStyles();

  // if (edit) {
    return (
      <CardContent>
        <form onSubmit={saveInfo}>
          <TextField
            variant="outlined"
            margin="normal"
            className={classes.skillTextField}
            required
            fullWidth
            name="skill"
            label="Tech Skill"
            id="skill"
            onChange={onChange}
            value={info.skill}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </CardContent>
    );
  // } else {
    return (
      <CardContent className={classes.cardContent}>
        <p>
          {info.skill}{" "}
          {/* <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon> */}
        </p>
      </CardContent>
    );
  // }
}

export default TechSkillsCard;
