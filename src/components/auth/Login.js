import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { addUserMutation } from '../../queries/index';


// RC1
 
function Login(props) {

    //To Hold Auth0 response data
    const [userData, setUserData] = useState({

    });


    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Push should be moved to addUser Mutation resolver
        // props.history.push('/')

        props.addUserMutation({
            variables:{
                email:userData.email,
                userId:userData.userId,
                userImageURL:userData.userImageURL,
                userName:userData.userName,
                firstName:userData.firstName,
                lastName:userData.lastName,

            }
        });
        
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

// export default withRouter(Login);

export default compose(
    graphql(addUserMutation, {name:"addClassMutation"})
)(withRouter(Login));