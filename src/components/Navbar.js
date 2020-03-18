import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar= (props) => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/settings'>Profile Settings</NavLink>
            <button>Logout</button>
        </nav>
    )
}

export default Navbar
