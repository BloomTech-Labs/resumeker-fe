import axios from 'axios'
import api from '../components/auth/api.js'
import {push} from 'connected-react-router'

//Creating Actions
export const DATA_FETCHING = "DATA_FETCHING"
export const DATA_SUCCESS = "DATA_SUCCESS"
export const DATA_ADD_SUCCESS = "DATA_ADD_SUCCESS"
export const DATA_FAIL = "DATA_FAIL"
export const DATA_ADD = "DATA_ADD"

//Setting up Action Creators
export const getUser = () => dispatch => {
    console.log('hello world, getUser is working')
    dispatch({type: DATA_FETCHING})
    api.get('/api/checkuser')
        .then(res => {
            dispatch({type: DATA_SUCCESS})
            if(res.data.existing === false){
                dispatch(push('/register'))
            }
        })
        .catch(err => {
            dispatch({type: DATA_FAIL, payload: err})
        })
}

// export const authenticateUser = () => {
//     api.get('')
// }

export const addUser = () => dispatch => {
    dispatch({type: DATA_ADD})
    api.post('/api/user')
        .then(res => {
            dispatch({type: DATA_ADD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: DATA_FAIL, payload: err})
        })
}

export const getResumes = resumes => dispatch => {
    dispatch({type: DATA_FETCHING});
    axios.get('/api/resumes')
        .then(res =>  {
            dispatch({type: DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: DATA_FAIL, payload: err})
        })
}

