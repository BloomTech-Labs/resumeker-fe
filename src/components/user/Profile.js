import React from 'react';
import UserInfo from './UserInfo';
import UserData from './userData.js'
import ResumeCard from './ResumeCard';
import api from '../auth/api.js'
import axios from 'axios'

function Profile(props) {

    console.log(props)

    return (
        <div className="profile">
                        
            <div className="resume-container">
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>
            <div className="info-container">
                <UserInfo />
                <UserData/>
                <h1>Testing</h1>
            </div>

        </div>
    )
}

export default Profile
