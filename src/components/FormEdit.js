import React, {userState, useState} from 'react';
import axios from 'axios'


import {endpoint} from '../endpoint_config.js'

function FormEdit() {

    const [entry, setEntry] = useState({
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        email: localStorage.getItem('email'),
        phone_number: localStorage.getItem('phone_number')
    })

    const handleChange = e => {
        setEntry({...entry, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        const user = {
            "user_metadata": {
                "first_name": entry.first_name,
                "last_name": entry.last_name,
                "email": entry.email,
                "phone_number": entry.phone_number
            }
        }
        console.log(user)
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
                placeholder= {entry.first_name}/>
                <input
                onChange={handleChange}
                type='text'
                name='last_name'
                placeholder= {entry.last_name}/>
                <input
                onChange={handleChange}
                type='text'
                name='email'
                placeholder= {entry.email}/>
                <input
                onChange={handleChange}
                type='text'
                name='phone_number'
                placeholder= {entry.phone_number}/>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default FormEdit;