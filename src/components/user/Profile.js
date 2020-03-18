import React from 'react';
import UserInfo from './UserInfo';
import ResumeCard from './ResumeCard';

function Profile() {
    return (
        <div className="profile">

            <UserInfo />
            
            <div className="resume-container">
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>

        </div>
    )
}

export default Profile
