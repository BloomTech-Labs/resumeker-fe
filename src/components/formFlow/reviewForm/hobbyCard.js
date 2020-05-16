import React, { useState } from "react";

import "../formStyles/reviewForm.css";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import {
  CardContent,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";

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

function HobbyCard(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    hobby: `${props.hobbies.hobby}`,
    id: props.hobbies.id,
  });

  const saveInfo = (event) => {
    event.preventDefault();
    props.updateHobbyData(info);
    setEdit(false);
  };

  const onChange = (event) => {
    event.preventDefault();
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const classes = useStyles();

  if (edit) {
    return (
      <CardContent>
        <form onSubmit={saveInfo}>
            <TextField
            variant="outlined"
            margin="normal"
            className = {classes.hobbyTextField}
            fullWidth
            name="hobby"
            label="Your Hobbies"
            id="hobby"
            onChange={onChange}
            value = {info.hobby}
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
  } else {
    return (
      <CardContent className={classes.cardContent}>
        <p>
          {info.hobby}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
      </CardContent>
    );
  }
}

export default HobbyCard;
