export const resumeFormConstants = {
  FORM_ADD_DATA_REQUEST: "FORM_ADD_DATA_REQUEST",
  FORM_ADD_DATA_SUCCESS: "FORM_ADD_DATA_SUCCESS",
  FORM_ADD_DATA_FAILURE: "FORM_ADD_DATA_FAILURE",

  FORM_ADD_WORK_DATA_REQUEST: "FORM_ADD_WORK_DATA_REQUEST",
  FORM_ADD_WORK_DATA_SUCCESS: "FORM_ADD_WORK_DATA_SUCCESS",
  FORM_ADD_WORK_DATA_FAILURE: "FORM_ADD_WORK_DATA_FAILURE",

  FORM_UPDATE_WORK_DATA_REQUEST: "FORM_UPDATE_WORK_DATA_REQUEST",
  FORM_UPDATE_WORK_DATA_SUCCESS: "FORM_UPDATE_WORK_DATA_SUCCESS",

  FORM_ADD_EDUCATION_DATA_REQUEST: "FORM_ADD_EDUCATION_DATA_REQUEST",
  FORM_ADD_EDUCATION_DATA_SUCCESS: "FORM_ADD_EDUCATION_DATA_SUCCESS",
  FORM_ADD_EDUCATION_DATA_FAILURE: "FORM_ADD_EDUCATION_DATA_FAILURE",

  FORM_ADD_PROJECT_DATA_REQUEST: "FORM_ADD_PROJECT_DATA_REQUEST",
  FORM_ADD_PROJECT_DATA_SUCCESS: "FORM_ADD_PROJECT_DATA_SUCCESS",
  FORM_ADD_PROJECT_DATA_FAILURE: "FORM_ADD_PROJECT_DATA_FAILURE",

  FORM_ADD_TECH_SKILLS_DATA_REQUEST: "FORM_ADD_TECH_SKILLS_DATA_REQUEST",
  FORM_ADD_TECH_SKILLS_DATA_SUCCESS: "FORM_ADD_TECH_SKILLS_DATA_SUCCESS",
  FORM_ADD_TECH_SKILLS_DATA_FAILURE: "FORM_ADD_TECH_SKILLS_DATA_FAILURE",

  FORM_DELETE_TECH_SKILLS_DATA_REQUEST: "FORM_DELETE_TECH_SKILLS_DATA_REQUEST",
  FORM_DELETE_TECH_SKILLS_DATA_SUCCESS: "FORM_DELETE_TECH_SKILLS_DATA_SUCCESS",
  FORM_DELETE_TECH_SKILLS_DATA_FAILURE: "FORM_DELETE_TECH_SKILLS_DATA_FAILURE",

  FORM_ADD_GENERAL_SKILLS_DATA_REQUEST: "FORM_ADD_GENERAL_SKILLS_DATA_REQUEST",
  FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS: "FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS",
  FORM_ADD_GENERAL_SKILLS_DATA_FAILURE: "FORM_ADD_GENERAL_SKILLS_DATA_FAILURE",

  FORM_DELETE_GENERAL_SKILLS_DATA_REQUEST:
    "FORM_DELETE_GENERAL_SKILLS_DATA_REQUEST",
  FORM_DELETE_GENERAL_SKILLS_DATA_SUCCESS:
    "FORM_DELETE_GENERAL_SKILLS_DATA_SUCCESS",
  FORM_DELETE_GENERAL_SKILLS_DATA_FAILURE:
    "FORM_DELETE_GENERAL_SKILLS_DATA_FAILURE",

  FORM_UPDATE_EDUCATION_DATA_REQUEST: "FORM_UPDATE_EDUCATION_DATA_REQUEST",
  FORM_UPDATE_EDUCATION_DATA_SUCCESS: "FORM_UPDATE_EDUCATION_DATA_SUCCESS",
};

/*
 ***********************************
General Info Actions
 ***********************************
 */

export const addData = (resumeData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_DATA_REQUEST });

  dispatch({
    type: resumeFormConstants.FORM_ADD_DATA_SUCCESS,
    payload: resumeData,
  });
};

/*
 ***********************************
Work History Actions
 ***********************************
 */

export const addWorkData = (workData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_WORK_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_WORK_DATA_SUCCESS,
    payload: workData,
  });
};

export const updateWorkData = (workData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_WORK_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_WORK_DATA_SUCCESS,
    payload: workData,
  });
};

/*
 ***********************************
Project Actions
 ***********************************
 */

export const addProjectData = (projectData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_PROJECT_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_PROJECT_DATA_SUCCESS,
    payload: projectData,
  });
};

/*
 ***********************************
General Skills Actions
 ***********************************
 */

export const addGeneralSkill = (skillData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS,
    payload: skillData,
  });
};

export const removeGeneralSkill = (skillData) => (dispatch) => {
  dispatch({
    type: resumeFormConstants.FORM_DELETE_GENERAL_SKILLS_DATA_REQUEST,
  });
  dispatch({
    type: resumeFormConstants.FORM_DELETE_GENERAL_SKILLS_DATA_SUCCESS,
    payload: skillData,
  });
};

/*
 ***********************************
Tech Skills Actions
 ***********************************
 */

export const addTechSkill = (skillData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_SUCCESS,
    payload: skillData,
  });
};

export const removeTechSkill = (skillData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_DELETE_TECH_SKILLS_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_DELETE_TECH_SKILLS_DATA_SUCCESS,
    payload: skillData,
  });
};

/*
 ***********************************
Education Actions
 ***********************************
 */

export const addEducationData = (educationData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_EDUCATION_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_EDUCATION_DATA_SUCCESS,
    payload: educationData,
  });
};

export const updateEducationData = (educationData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_UPDATE_EDUCATION_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_UPDATE_EDUCATION_DATA_SUCCESS,
    payload: educationData,
  });
};
