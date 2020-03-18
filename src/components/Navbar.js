import React from 'react'
import { NavLink } from 'react-router-dom';
import Userprof from '../assets/userprof.png';

const Navbar= (props) => {
    return (
        <nav>
            <NavLink className="nav-a" to='/'>Home</NavLink>
            <NavLink className="nav-a login" to='/login'>Login</NavLink>
            <NavLink className="nav-a reg" to='/register'>Register</NavLink>
            <NavLink className="nav-a" to='/profile'>
                <img className="userprof-ellipse" src={Userprof} alt="User profile" />
            </NavLink>
        </nav>
    )
}

export default Navbar
