import React from 'react'
import { NavLink, Redirect, Route } from 'react-router-dom';
import { getToken } from '../utils/api.js'
// import Userprof from '../assets/userprof.png';
import styled from 'styled-components'

const NavbarStyled = styled.nav`
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: space-around;
`;

const ButtonStyled = styled.button`
    border: none;
    background: none;
    color: #404040;
    font-weight: 100;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    &:hover {
        color: #ffffff;
        background: #096DD9;
        transition: all 0.3s ease 0s;
    }
`;

const Navbar= (props) => {

    const signedIn = getToken();

    const Logout = () => {
        localStorage.removeItem('token')
        return <Redirect to='/login'/>
    }

    const TempToken = () => {
        localStorage.setItem('token', "Hello Token :D")
        return <Redirect to='/profile'/>
    }

    return (
        <NavbarStyled >
            <Section>
                <NavLink to='/'><ButtonStyled>Home</ButtonStyled></NavLink>
                <NavLink to='/'><ButtonStyled>About</ButtonStyled></NavLink>
                <NavLink to='/'><ButtonStyled>Plans</ButtonStyled></NavLink>
            </Section>
            <Section>
                { !signedIn && <NavLink to='/login'><ButtonStyled>Login</ButtonStyled></NavLink> }
                { !signedIn && <NavLink to='/register'><ButtonStyled>Register</ButtonStyled></NavLink> }
                { signedIn && <NavLink to='/profile'>
                    <ButtonStyled>Profile</ButtonStyled>
                    {/* <img className="userprof-ellipse" src={Userprof} alt="User profile" /> */}
                </NavLink> }
                { signedIn && <NavLink to='/logout'><ButtonStyled>Logout</ButtonStyled></NavLink> }
                { !signedIn && <NavLink to='/temploginmethod'><ButtonStyled>TEMP LOGIN METHOD</ButtonStyled></NavLink> }
            </Section>

            <Route exact path='/logout' component={Logout}/>
            <Route exact path='/temploginmethod' component={TempToken}/>

        </NavbarStyled>

    );
}

export default Navbar
