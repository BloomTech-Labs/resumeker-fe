import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { createUserMutation } from '../../queries/queries';


// RC1
 
function Login(props) {

    //To Hold Auth0 response data
    const [userData, setUserData] = useState({
        email:'charlie@SpeechGrammarList.com',
        userId:'001',
        userImageURL:'https://cdn.vox-cdn.com/thumbor/UjJJtbVjzjURf6oiXSa0SomaEfU=/0x0:3000x1779/1200x800/filters:focal(1204x216:1684x696)/cdn.vox-cdn.com/uploads/chorus_image/image/59606327/ktokatitmir0.0.jpg',
        userName:'Antonio Starks',
     

    });


    const handleChange = e => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value,
        })
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
                
        props.createUserMutation({
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
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    />
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    />

                <button
                    type="submit"
                    className="button-primary"
                    onClick={handleSubmit}
                    >
                    Log In
                </button>
            </form>
        </div>
    )
}

// export default withRouter(Login);

export default compose(
    graphql(createUserMutation, {name:"createUserMutation"})
)(withRouter(Login));