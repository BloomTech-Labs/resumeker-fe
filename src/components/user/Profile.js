import React from 'react';

import UserData from './userData.js'
import ResumeCard from './ResumeCard';
import api from '../auth/api.js'
import axios from 'axios'

function Profile(props) {

    return (
        <div className="profile">
                        
            <div className="resume-container">
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>
            <div className="info-container">

                <UserData/>
                <h1>Testing</h1>
            </div>

        </div>
    )
}

export default Profile
