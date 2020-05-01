import { push } from "connected-react-router"

export const resumeFormConstants = {

    FORM_ADD_DATA_REQUEST: "FORM_ADD_DATA_REQUEST",
    FORM_ADD_DATA_SUCCESS: "FORM_ADD_DATA_SUCCESS",
    FORM_ADD_DATA_FAILURE: "FORM_ADD_DATA_FAILURE",

}

export const addData = (resumeData) => dispatch => {
    
    dispatch({type: resumeFormConstants.FORM_ADD_DATA_REQUEST})

    dispatch({type: resumeFormConstants.FORM_ADD_DATA_SUCCESS, payload: resumeData})

}