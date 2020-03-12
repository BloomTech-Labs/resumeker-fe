import React from 'react'
import { withRouter } from 'react-router-dom';

function Login(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/')
    }

    return (
        <div>
            <h2>Sign In</h2>

            <form className="form" onSubmit={handleSubmit}>
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
                    Log In
                </button>
            </form>
        </div>
    )
}

export default withRouter(Login);
