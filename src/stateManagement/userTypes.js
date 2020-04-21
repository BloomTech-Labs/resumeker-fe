import api from '../components/auth/api.js'
import {useGetToken} from '../components/getToken.js'

//Creating Actions
export const FETCH_USER_START = 'FETCH_USER_START'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL'
export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL'

export const getUser = () => dispatch => {
    dispatch({type: FETCH_USER_START})
    const {token} = useGetToken();
    localStorage.setItem('token', token)
    console.log(localStorage.getItem('token'))
    api.get('/api/getUser')
        .then(res => {
            dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_USER_FAIL, payload: err})
        })
}

export const updateUser = user => dispatch => {
    dispatch({type: UPDATE_USER_START})
    api.patch('/api/updateUser', user)
        .then(res => {
            dispatch({type: UPDATE_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type:  UPDATE_USER_FAIL, payload: err})
        })
}
