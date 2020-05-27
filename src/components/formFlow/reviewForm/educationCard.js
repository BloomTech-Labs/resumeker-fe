import React, { useState } from "react";

import "../formStyles/reviewForm.css";

//Icon import
import EditIcon from "@material-ui/icons/Edit";
import { useMutation } from "@apollo/react-hooks";
import EducationFormTemplate from "../formsTemplate/educationFormTemplate";
import { updateEducationHistory as UPDATE_EDUCATION_HISTORY } from "../../../queries/education";

import { CardContent, makeStyles, Button } from "@material-ui/core";

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

function EducationCard(props) {
    const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    id: props.education.id,
    type: props.education.schoolType,
    schoolName: props.education.schoolName,
    yearIn: props.education.startDate,
    yearOut: props.education.endDate,
    certificateName: props.education.certName,
    draftID: props.education.draftID,
});

    const [updateEducation, { loading, error }] = useMutation(
        UPDATE_EDUCATION_HISTORY,
        {
            onCompleted(data) {
                console.log(data, "\n Rannnnnnnn UPdate Education");
            },
        }
    );

    const classes = useStyles();

  const saveInfo = (event) => {
    event.preventDefault();
    // props.updateEducationData(info);
    updateEducation({
      variables: {
        id: props.education.id,
        input: {
            draftID: props.education.draftID,
            schoolType: props.education.schoolType,
            schoolName: props.education.schoolName,
            startDate: props.education.startDate,
            endDate: props.education.endDate,
            certName: props.education.certName,
        },
    },
    })
    setEdit(false);
  };

    const onChange = (event) => {
        // event.preventDefault();
        setInfo({ ...info, [event.target.name]: event.target.value });
    };
    if (loading) return <div>Loading</div>;
    if (error) return <div>Something went wrong</div>;

    if (edit) {
        return (
            <CardContent>
                <form onSubmit={saveInfo}>
                    <EducationFormTemplate info={info} onChange={onChange} />
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
            <CardContent
                className={classes.cardContent}
                id={props.education.id}
            >
                <p>
                    Type of Education: {props.education.schoolType}{" "}
                    <EditIcon color="disabled" onClick={() => setEdit(!edit)}>
                        Edit
                    </EditIcon>
                </p>
                <p>Name of School: {props.education.schoolName}</p>
                <p>Starting Date: {props.education.startDate}</p>
                <p>End Date: {props.education.endDate}</p>
                <p>Type of Certificate: {props.education.certName}</p>
            </CardContent>
        );
    }
}

export default EducationCard;
