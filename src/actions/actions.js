import axios from 'axios'
import { push } from 'connected-react-router'
import { userConstants } from './types.js'

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

    //Making a call to the backend for user information
    axios(options)  
        .then(res => {
            dispatch({type: userConstants.GET_USER_SUCCESS, payload: JSON.parse(res.data.data.getUser.userInfo)})
            dispatch(push('/'))
        })
        .catch(err => {
            console.log(err);
            dispatch({type: userConstants.GET_USER_FAILURE, payload: err})
        })

}

