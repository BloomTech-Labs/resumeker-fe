import React from "react";
import { NavLink } from "react-router-dom";

function ResumeCard(props) {
    return (
        <NavLink to={`/form/resume/${props.draftID}`}>
            <div className="resume-card">
                <h1>Resume Draft ID # {props.draftID}</h1>
            </div>
        </NavLink>
    );
}

export default ResumeCard;
