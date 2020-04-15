import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'

// RC1
function Register(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/')
    }

    const Form = styled.form`
    
    `
    const Input = styled.input`
    
    `

    const Button = styled.button`
    
    `

    return (
        <div>
            <h2>Register</h2>

            <Form className="form" onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    />
                <Input 
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    />
                <Input
                    type="text"
                    name="email"
                    placeholder="Your Preferred Email"
                    className=""
                    />
                <Button
                    type="submit"
                    className="button-primary"
                    >
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default withRouter(Register);
