import axios from 'axios'
// import api from '../components/auth/api.js'
import { push } from 'connected-react-router'

import {userConstants} from './types.js'


export const getUser = () => dispatch => {

    //Declaring call information
    const options = {
        url: 'https://resumeker-pt-staging.herokuapp.com/graphql',
        method: 'post',
        data: {
            query: `
                query {    
                    getUser {
                        userInfo
                    }
                }
            `
        },
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }

    dispatch({type: userConstants.GET_USER_REQUEST})

    //Making a call to the backend for user information
    axios(options)  
        .then(res => {
            const obj = res.data.data.getUser.userInfo
            // console.log(Object.keys(obj), 'Object Data')
            // findReplace(obj);
            console.log(obj, 'Pre-Json Data')
            console.log(JSON.parse(obj), 'Json Data')
            dispatch({type: userConstants.GET_USER_SUCCESS, payload: JSON.parse(res.data)})
            dispatch(push('/'))
        })
        .catch(err => {
            console.log(err);
            dispatch({type: userConstants.GET_USER_FAILURE, payload: err})
        })

}

// function findReplace(responseData) {

//     var res = responseData.replace(/\/g, "" )
//     console.log(res, 'replacing escape characters')

//     return res;

// }


// //Creating Actions
// export const DATA_FETCHING = "DATA_FETCHING"
// export const DATA_SUCCESS = "DATA_SUCCESS"
// export const DATA_ADD_SUCCESS = "DATA_ADD_SUCCESS"
// export const DATA_FAIL = "DATA_FAIL"
// export const DATA_ADD = "DATA_ADD"

// //Setting up Action Creators
// export const getUser = () => dispatch => {
//     console.log('hello world, getUser is working')
//     dispatch({type: DATA_FETCHING})
//     api.get('/api/checkuser')
//         .then(res => {
//             dispatch({type: DATA_SUCCESS})
//             if(res.data.existing === false){
//                 dispatch(push('/register'))
//             }
//         })
//         .catch(err => {
//             dispatch({type: DATA_FAIL, payload: err})
//         })
// }

// // export const authenticateUser = () => {
// //     api.get('')
// // }

// export const addUser = () => dispatch => {
//     dispatch({type: DATA_ADD})
//     api.post('/api/user')
//         .then(res => {
//             dispatch({type: DATA_ADD_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({type: DATA_FAIL, payload: err})
//         })
// }

// export const getResumes = resumes => dispatch => {
//     dispatch({type: DATA_FETCHING});
//     axios.get('/api/resumes')
//         .then(res =>  {
//             dispatch({type: DATA_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({type: DATA_FAIL, payload: err})
//         })
// }

