import React from 'react'
import { withRouter } from 'react-router-dom';

// RC1
function Register(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/')
    }

    return (
        <div>
            <h2>Register</h2>

            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    />
                <input 
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    />
                <input 
                    type="text"
                    name="username"
                    placeholder="Username"
                    />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    />

                <button
                    type="submit"
                    className="button-primary"
                    >
                    Register
                </button>
            </form>
        </div>
    )
}

export default withRouter(Register);
