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

function LanguageCard(props) {
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    language: `${props.languages.language}`,
    id: props.languages.id,
  });

  const saveInfo = (event) => {
    event.preventDefault();
    props.updateLanguageData(info);
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
            className = {classes.languageTextField}
            fullWidth
            name="language"
            label="Language"
            id="language"
            onChange={onChange}
            value = {info.language}
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
          {info.language}{" "}
          <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
            Edit
          </EditIcon>
        </p>
      </CardContent>
    );
  }
}

export default LanguageCard;
