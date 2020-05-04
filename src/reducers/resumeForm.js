import {resumeFormConstants} from '../actions/resumeFormActions.js'

const initialState = {
    loading: false,
    error: "",

    resumeData:{
            firstName: "",
            lastName: "",
            email: "" ,
            type: "",
            schoolName: "",
            yearIn: "",
            yearOut: "",
            certificateName: "",
            jobs: []
    } // End resumeData object

}

export const resumeFormReducer = (state = initialState, action) => {

    switch(action.type) {
        case resumeFormConstants.FORM_ADD_DATA_REQUEST:
            return {...state, loading: true}
        case resumeFormConstants.FORM_ADD_DATA_SUCCESS:
            return {...state, 
                resumeData: {...state.resumeData, 
                    // jobs: [...state.resumeData.jobs, ...action.payload_jobs], 
                ...action.payload}, loading: false}
        case resumeFormConstants.FORM_ADD_DATA_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }

}
