import React from 'react'
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

function endFormReview(props) {
    return (
        <div>
            <div>
                <h2>General Info</h2>
                <p>Your Name is {props.resumeData.firstName} {props.resumeData.lastName}</p>
                <p>Email Address: {props.resumeData.email}</p>
                <button >Edit</button>
            </div>
            <div>
                <h2>Education</h2>
                {props.resumeData.education.map(
                    education => {
                        return(
                            <div key={education.education_added}>
                                <p>Type of Education: {education.type}</p>
                                <p>Name of School: {education.schoolName}</p>
                                <p>Starting Date: {education.yearIn}</p>
                                <p>End Date: {education.yearOut}</p>
                                <p>Type of Certificate/ Name: {education.certificateName}</p>
                            </div>
                        )
                    }
                )}
            </div>
            <div>
                <h1>Your Job History</h1>
                {props.resumeData.jobs.map(
                    
                    job => {
                        return(
                            <div key={job.job_added}>
                                
                                <p>Company Name: {job.companyName} </p>
                                <p>Job Title: {job.jobTitle}</p>
                                <p>Starting Date: {job.startYear}</p>
                                <p>End Date: {job.endYear}</p>
                                <p>Job Description: {job.jobDescription}</p>
                                <button >Edit</button>  
                            </div>

                        )
                    }
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        resumeData: state.resumeFormReducer.resumeData,
        resumeError: state.resumeFormReducer.error,
        resumeLoading: state.resumeFormReducer.loading,
    }
  }
  
  export default connect(
    mapStateToProps
  ) (endFormReview)