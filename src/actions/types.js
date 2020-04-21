import { push } from "connected-react-router";
import api from "../components/auth/api"

export const userConstants = {

    LOGOUT: 'USERS_LOGOUT',

    GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
    GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',

    GET_USER_REQUEST: 'GET_USER_REQUEST',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAILURE: 'GET_USER_FAILURE',

    UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'    
};



// export const REGISTER_REQUEST = "REGISTER_REQUEST";
// export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
// export const REGISTER_FAILURE = "REGISTER_FAILURE";

// export const registerUser = (userData) => dispatch => {
//   dispatch({ type: REGISTER_REQUEST });

//   api().post("/register", userData)
//     .then(response => {
//       dispatch({ type: REGISTER_SUCCESS, payload: response.data });
//       dispatch(push("/"));
//     })
//     .catch(error =>
//       dispatch({
//         type: REGISTER_FAILURE,
//         errorMessage: error.response.data.message
//       })
//     );
// };

