import React, {userState, useState, useEffect} from 'react';
import axios from 'axios'

import { connect } from 'react-redux';
import { updateUser } from '../actions/actions.js';

import {endpoint} from '../endpoint_config.js'

function FormEdit({user, updateUser}) {

    const [entry, setEntry] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    useEffect(() => {
        if(Object.keys(user).includes('user_metadata')) {
            setEntry(
                {
                    firstName: user.user_metadata.user_info.firstName,
                    lastName: user.user_metadata.user_info.lastName,
                    email: user.user_metadata.user_info.email
                }
            )
        } else if(Object.keys(user).includes('given_name', 'family_name')) {
            setEntry(
                {
                    firstName: user.given_name,
                    lastName: user.family_name,
                    email: user.email
                }
            )
        } else {
            setEntry(
                {
                    firstName: '',
                    lastName: '',
                    email: user.email
                }
            )
        }
    }, [])

    const handleChange = e => {
        setEntry({...entry, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        const updatedUser = {
                firstName: entry.first_name,
                lastName: entry.last_name,
                email: entry.email,
        }
        console.log(updatedUser)
        updateUser(updateUser)
        e.preventDefault();
        
    }

    return (
        <div>
            <h3>Edit Your Information</h3>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                type='text'
                name='first_name'
                placeholder= {entry.firstName}/>
                <input
                onChange={handleChange}
                type='text'
                name='last_name'
                placeholder= {entry.lastName}/>
                <input
                onChange={handleChange}
                type='text'
                name='email'
                placeholder= {entry.email}/>
                <button>Submit</button>
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error,
        loading: state.userReducer.loading
    }
}

export default connect(mapStateToProps, { updateUser })(FormEdit);