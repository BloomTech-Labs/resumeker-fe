import React, { useState } from "react";
import { connect } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import "../formStyles/reviewForm.css";

import ReviewGeneralInfoFormTemplate from "../formsTemplate/reviewGeneralInfoFormTemplate"

//Actions
import { addData } from "../../../actions/resumeFormActions.js";

import { getDraftQuery as GET_DRAFT_QUERY } from "../../../queries/draft"

//Icon import
import EditIcon from "@material-ui/icons/Edit";

import {
  CardContent,
  Card,
  makeStyles,
  Button,
} from "@material-ui/core";

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

function GeneralInfoComponent(props) {
  const [edit, setEdit] = useState(false);

  const id = localStorage.getItem("draftID")
  const {loading, error, data} = useQuery(GET_DRAFT_QUERY, {variables: { id }})
  console.log(id, "id inside of review General Info")
  console.log(data, "data inside of review General info")

  useState()

  const [info, setInfo] = useState({
    email: data.getDraft.email,
    name: data.getDraft.name
  });

  const saveInfo = (event) => {
    event.preventDefault();
    // props.addData(info);
    setEdit(false);
  };

  const onChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const classes = useStyles();

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
            <ReviewGeneralInfoFormTemplate  onChange={onChange} info={info} />
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
          <p>
            Your Name: {info.name}
          </p>
          <p>Email Address: {info.email} </p>
        </CardContent>
      </Card>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     resumeData: state.resumeFormReducer.resumeData,
//     resumeError: state.resumeFormReducer.error,
//     resumeLoading: state.resumeFormReducer.loading,
//   };
// };

// export default connect(mapStateToProps, { addData })(GeneralInfoComponent);

export default GeneralInfoComponent
