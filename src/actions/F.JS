case resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_REQUEST:
    return {...state, loading: true}
case resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS:
    return {...state,
        resumeData:{
            ...state.resumeData,
            skills:[...state.resumeData.generalSkills, action.payload]
        }
        ,loading:false}
case resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_FAILURE:
    return{...state, loading:false, error: action.payload}