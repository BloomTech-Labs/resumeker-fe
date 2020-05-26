import axios from "axios";
import { push } from "connected-react-router";
import { userConstants } from "./types.js";

export const getUser = () => (dispatch) => {
    //Defining call information
    const options = {
        url: process.env.REACT_APP_AUTH0_DOMAIN + "/api/v2/userinfo",
        method: "GET",

        //Building token from localStorage token.
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
        },
        json: true,
        jar: "JAR",
    };

    dispatch({ type: userConstants.GET_USER_REQUEST });

    // Making a call to the backend for user information
    axios(options)
        .then((res) => {
            console.log(res, "Get User REsponse Redux");

            const userObj = JSON.parse(res.data.data.getUser.userInfo);
            dispatch({
                type: userConstants.GET_USER_SUCCESS,
                payload: userObj,
            });
            dispatch(push("/"));
        })
        .catch((err) => {
            dispatch({ type: userConstants.GET_USER_FAILURE, payload: err });
        });
};

export const updateUser = (userData) => (dispatch) => {
    dispatch({ type: userConstants.UPDATE_USER_REQUEST });
};
