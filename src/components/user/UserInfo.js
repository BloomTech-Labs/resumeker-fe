import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

import { useAuth0 } from '../../react-auth0-spa.js';

const userInfo = () => {
    return(
        <div>
            <h3>{localStorage.getItem('first_name') || 'null'}</h3>
            <h3>{localStorage.getItem('last_name') || 'null'}</h3>
            <h3>{localStorage.getItem('email') || 'null'}</h3>
            <h3>{localStorage.getItem('phone_number') || 'null'}</h3>
            <NavLink to='/edit'><button>Edit</button></NavLink>
        </div>
    )
}

export default userInfo;
