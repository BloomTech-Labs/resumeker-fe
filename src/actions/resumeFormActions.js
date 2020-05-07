export const resumeFormConstants = {

    FORM_ADD_DATA_REQUEST: "FORM_ADD_DATA_REQUEST",
    FORM_ADD_DATA_SUCCESS: "FORM_ADD_DATA_SUCCESS",
    FORM_ADD_DATA_FAILURE: "FORM_ADD_DATA_FAILURE",

    FORM_ADD_WORK_DATA_REQUEST: "FORM_ADD_WORK_DATA_REQUEST",
    FORM_ADD_WORK_DATA_SUCCESS: "FORM_ADD_WORK_DATA_SUCCESS",
    FORM_ADD_WORK_DATA_FAILURE: "FORM_ADD_WORK_DATA_FAILURE",

    FORM_ADD_EDUCATION_DATA_REQUEST: "FORM_ADD_EDUCATION_DATA_REQUEST",
    FORM_ADD_EDUCATION_DATA_SUCCESS: "FORM_ADD_EDUCATION_DATA_SUCCESS",
    FORM_ADD_EDUCATION_DATA_FAILURE: "FORM_ADD_EDUCATION_DATA_FAILURE",

    FORM_ADD_PROJECT_DATA_REQUEST: "FORM_ADD_PROJECT_DATA_REQUEST",
    FORM_ADD_PROJECT_DATA_SUCCESS: "FORM_ADD_PROJECT_DATA_SUCCESS",
    FORM_ADD_PROJECT_DATA_FAILURE: "FORM_ADD_PROJECT_DATA_FAILURE",

    FORM_ADD_TECH_SKILLS_DATA_REQUEST: "FORM_ADD_TECH_SKILLS_DATA_REQUEST",
    FORM_ADD_TECH_SKILLS_DATA_SUCCESS: "FORM_ADD_TECH_SKILLS_DATA_SUCCESS",
    FORM_ADD_TECH_SKILLS_DATA_FAILURE: "FORM_ADD_TECH_SKILLS_DATA_FAILURE",

    FORM_ADD_GENERAL_SKILLS_DATA_REQUEST: "FORM_ADD_GENERAL_SKILLS_DATA_REQUEST",
    FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS: "FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS",
    FORM_ADD_GENERAL_SKILLS_DATA_FAILURE: "FORM_ADD_GENERAL_SKILLS_DATA_FAILURE"
}

export const addData = (resumeData) => dispatch => {
    
    dispatch({type: resumeFormConstants.FORM_ADD_DATA_REQUEST})

    dispatch({type: resumeFormConstants.FORM_ADD_DATA_SUCCESS, payload: resumeData})

}

export const addWorkData = (workData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_WORK_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_WORK_DATA_SUCCESS, payload: workData})
}

export const addEducationData = (educationData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_EDUCATION_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_EDUCATION_DATA_SUCCESS, payload: educationData})
}

export const addProjectData = (projectData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_PROJECT_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_PROJECT_DATA_SUCCESS, payload: projectData})
}

export const addGeneralSkill = (skillData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS, payload: skillData})
}

export const addTechSkill = (skillData) => dispatch =>  {
    dispatch({type: resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_REQUEST} )
    dispatch({type: resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_SUCCESS, payload: skillData})
}
