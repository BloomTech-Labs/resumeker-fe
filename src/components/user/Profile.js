import React from 'react';
import UserInfo from './UserInfo';
import ResumeCard from './ResumeCard';
import api from '../auth/api.js'

function Profile() {

    const testAPI = () => {
        api().get('/api/hello2')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="profile">

            {/* <button onClick={testAPI}>Test API</button> */}
                        
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
