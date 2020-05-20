import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../formFlow/Resume';

function ResumeCard() {
    return (
        <NavLink to={Resume}>
            <div className="resume-card">
                <h1>EXAMPLE RESUME</h1>
            </div>
        </NavLink>
    )
}

export default ResumeCard
