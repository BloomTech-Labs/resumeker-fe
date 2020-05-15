import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from "react-redux";
import {registerUser} from '../../actions/types'

// RC1
function Register(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/')
    }

    const Form = styled.form`
        margin-top: 2rem
    `

    const Container = styled.div`
        border: 3px solid black;
        width:30%;
        margin-left: 32%;
        padding: 3%;
    `


    const Button = styled.button`
        color: white;
        border: 3px solid silver
    `

    const Title = styled.h2`
        color: #1890FF;
        font-size: 4rem;
        padding: 0px;
        margin:0px; 
    `
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    const handlerChange = event => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
        
    };

    const submitHandler = event => {
        event.preventDefault();
        props.registerUser(user)
        
    };
    
    return (
        <div>
            <Title>Register</Title>

            <form className="form" onSubmit={submitHandler}>
                <input 
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={handlerChange}
                    />
                <input 
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handlerChange}
                    />
                <input
                    type="text"
                    name="email"
                    placeholder="Your Preferred Email"
                    onChange={handlerChange}
                    />
                <Button
                    type="submit"
                    className="button-primary"
                    >
                    Submit
                </Button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }
  
  const mapDispatchToProps = {
    registerUser
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register);
