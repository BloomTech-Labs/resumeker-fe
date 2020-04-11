import React from 'react';
import UserInfo from './UserInfo';
import ResumeCard from './ResumeCard';

function Profile() {
    return (
        <div className="profile">
                        
            <div className="resume-container">
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>
            <div className="info-container">
                <UserInfo />
            </div>

        </div>
    )
}

export default Profile