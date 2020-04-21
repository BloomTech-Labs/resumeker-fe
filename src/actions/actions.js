import axios from 'axios'
import { push } from 'connected-react-router'
import { userConstants } from './types.js'
import { gql } from 'apollo-boost'
import { client } from '../index.js'

export const getUser = () => dispatch => {

    //Defining call information
    const options = {
        url: 'https://resumeker-pt-staging.herokuapp.com/graphql',
        method: 'post',
        //GraphQL query structure
        data: {
            query: `
                query {    
                    getUser {
                        userInfo
                    }
                }
            `
        },
        //Building token from localStorage token.
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }

    dispatch({type: userConstants.GET_USER_REQUEST})

    // Making a call to the backend for user information
    axios(options)  
        .then(res => {
            console.log(JSON.parse(res.data.data.getUser.userInfo), "User Object from getUser()")
            const userObj = JSON.parse(res.data.data.getUser.userInfo);
            dispatch({type: userConstants.GET_USER_SUCCESS, payload: userObj })
            dispatch(push('/'))
        })
        .catch(err => {
            console.log(err);
            dispatch({type: userConstants.GET_USER_FAILURE, payload: err})
        })

}

export const updateUser = (userData) => dispatch => {
    //Defining call information
    const options = {
        url: 'https://resumeker-pt-staging.herokuapp.com/graphql',
        method: 'post',
        //GraphQL query structure
        data: {
            mutation: `
                mutation {    
                    getUpdatedUser (
                        firstName: ${userData.firstName}
                        lastName: ${userData.lastName}
                        email: ${userData.email}
                    ) {
                        userInfo
                    }
                }
            `
        },
        //Building token from localStorage token.
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }

    dispatch({ type: userConstants.UPDATE_USER_REQUEST })



    // axios(options)
    //     .then(res => {
    //         const userObj = JSON.parse(res.data.data.getUser.userInfo)
    //         dispatch({ type: userConstants.UPDATE_USER_SUCCESS, payload: userObj })
    //         dispatch(push('/profile'))
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         dispatch({ type: userConstants.UPDATE_USER_FAILURE, payload: err })
    //     })
}