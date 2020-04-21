import React, {userState, useState, useEffect} from 'react';
import axios from 'axios'

import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import { connect } from 'react-redux';
import { updateUser } from '../actions/actions.js';

import { userConstants } from '../actions/types';

import {endpoint} from '../endpoint_config.js';

import { useHistory } from "react-router-dom";


 //GraphQL Query String
 const UPDATED_USER_QUERY  = gql`
 mutation (
    $firstName: String,
    $lastName: String,
    $email: String
    ){    
     getUpdatedUser (
         firstName: $firstName,
         lastName: $lastName,
         email: $email
        ){
            userInfo
        }   
 }
 ` 


function FormEdit({user, updateUser}) {

    let history = useHistory();

    console.log(user,'Form Edit');

    //Holds Component State
    const [entry, setEntry] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })


    //Initializes useMutation graphQL query
    const [gqlUpdateUser, {data, loading, error}] = useMutation( UPDATED_USER_QUERY );

    //Runs Check on whether returned userInfo from Auth0
    //is a registered User or Not
    useEffect(() => {
        if(Object.keys(user).includes('user_metadata')) {
            setEntry(
                {
                    firstName: user.user_metadata.user_info.firstName,
                    lastName: user.user_metadata.user_info.lastName,
                    email: user.user_metadata.user_info.email
                }
            )
        } else if(Object.keys(user).includes('given_name', 'family_name')) {
            setEntry(
                {
                    firstName: user.given_name,
                    lastName: user.family_name,
                    email: user.email
                }
            )
        } else {
            setEntry(
                {
                    firstName: '',
                    lastName: '',
                    email: user.email
                }
            )
        }
    }, [])


    //useEffect to watch the data object being returned from updateUser Mutation call
    useEffect(() => {

        if(data){
        console.log(JSON.parse(data.getUpdatedUser.userInfo), "Use Effect Data object")

        }
    }, [data])

    //Handle onChange Event from Form Edit
    const handleChange = e => {
        setEntry({...entry, [e.target.name]: e.target.value})
    }


    //Handles onSubmit Event
    const handleSubmit = async (e, dispatch) => {

        e.preventDefault();

       
        console.log(entry, "Updated User prior to GraphQL Query")


        await gqlUpdateUser({ variables: {firstName:entry.firstName, lastName:entry.lastName, email:entry.email} }); 

        if (loading) console.log("Loading...","UpdatedUser Loading");

        if (error){

            console.log(error.message,"UpdatedUser error msg");

            dispatch({ type: userConstants.UPDATE_USER_FAILURE, payload: error })

        } 

        console.log(data, "Raw Updated User Data ALL GOOD! =======================")

        // const updatedUserInfo = JSON.parse(mutationData.getUpdatedUser.userInfo);

        // console.log(updatedUserInfo, "Parsed UpdatedUser")

        // dispatch({ type: userConstants.UPDATE_USER_SUCCESS, payload: updatedUserInfo })

        
    }

    return (
        <div>
            <h3>Edit Your Information</h3>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                type='text'
                name='firstName'
                placeholder= {entry.firstName}/>
                <input
                onChange={handleChange}
                type='text'
                name='lastName'
                placeholder= {entry.lastName}/>
                <input
                onChange={handleChange}
                type='text'
                name='email'
                placeholder= {entry.email}/>
                <button>Submit</button>
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error,
        loading: state.userReducer.loading
    }
}

export default connect(mapStateToProps, { updateUser })(FormEdit);