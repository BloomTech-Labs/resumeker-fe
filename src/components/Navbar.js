import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import { useAuth0 } from "../react-auth0-spa";

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


    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <NavbarStyled >
            <Section>
                <NavLink to='/'><ButtonStyled>Home</ButtonStyled></NavLink>
                <NavLink to='/about'><ButtonStyled>About</ButtonStyled></NavLink>
                <NavLink to='/'><ButtonStyled>Plans</ButtonStyled></NavLink>
            </Section>
            <Section>

                { !isAuthenticated && 
                <ButtonStyled onClick={() => loginWithRedirect({})}>Login</ButtonStyled>
                }

                { !isAuthenticated &&
                <ButtonStyled onClick={() => loginWithRedirect({})}>Register</ButtonStyled>
                }

                { isAuthenticated &&
                    <NavLink to='/profile'><ButtonStyled>Profile</ButtonStyled></NavLink>
                }

                { isAuthenticated && 
                <ButtonStyled onClick={() => logout()}>Logout</ButtonStyled>
                }
            </Section>

        </NavbarStyled>

    );
}

export default Navbar
