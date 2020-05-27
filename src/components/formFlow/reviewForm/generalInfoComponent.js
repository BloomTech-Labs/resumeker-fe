import React, { useState } from "react";
import { connect } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import "../formStyles/reviewForm.css";

import ReviewGeneralInfoFormTemplate from "../formsTemplate/reviewGeneralInfoFormTemplate";

//Actions
import { addData } from "../../../actions/resumeFormActions.js";

import { getDraftQuery as GET_DRAFT_QUERY } from "../../../queries/draft";

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import { CardContent, Card, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const GeneralInfoComponent = (props) => {
  const [edit, setEdit] = useState(false);

  const classes = useStyles();

  const id = localStorage.getItem("draftID");
  const { loading, error, data } = useQuery(GET_DRAFT_QUERY, {
    variables: { id },
  });

  const [info, setInfo] = useState({
    email: "",
    name: "",
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  console.log(data, "data inside of review General info");

  const saveInfo = (event) => {
    event.preventDefault();
    // props.addData(info);
    setEdit(false);
  };

  const onChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  if (data) {
    if (edit) {
      return (
        <Card>
          <h1>
            General Info{" "}
            <EditIcon color="primary" onClick={() => setEdit(!edit)}>
              Edit
            </EditIcon>
          </h1>
          <CardContent>
            <form onSubmit={saveInfo}>
              <ReviewGeneralInfoFormTemplate
                onChange={onChange}
                info={data.getDraft}
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
        </Card>
      );
    } else {
      return (
        <Card>
          <h1>
            General Info{" "}
            <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
              Edit
            </EditIcon>
          </h1>
          <CardContent className={classes.cardContent}>
            <p>Your Name: {data.getDraft.name}</p>
            <p>Email Address: {data.getDraft.email} </p>
          </CardContent>
        </Card>
      );
    }
  }
};

export default GeneralInfoComponent;
