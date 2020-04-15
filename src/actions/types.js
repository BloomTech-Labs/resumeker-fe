import { push } from "connected-react-router";
import api from "../components/auth/api"

export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    GET_ALL_REQUEST: 'USERS_GETALL_REQUEST',
    GET_ALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GET_ALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'    
};

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = (userData) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  api().post("/register", userData)
    .then(response => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      dispatch(push("/"));
    })
    .catch(error =>
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: error.response.data.message
      })
    );
};

