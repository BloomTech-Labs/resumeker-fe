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

  FORM_UPDATE_EDUCATION_DATA_REQUEST: "FORM_UPDATE_EDUCATION_DATA_REQUEST",
  FORM_UPDATE_EDUCATION_DATA_SUCCESS: "FORM_UPDATE_EDUCATION_DATA_SUCCESS",

  FORM_ADD_SKILL_DATA_REQUEST: "FORM_ADD_SKILL_DATA_REQUEST",
  FORM_ADD_SKILL_DATA_SUCCESS: "FORM_ADD_SKILL_DATA_SUCCESS",
  FORM_ADD_SKILL_DATA_FAILURE: "FORM_ADD_SKILL_DATA_FAILURE",
};

export const addData = (resumeData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_DATA_REQUEST });

  dispatch({
    type: resumeFormConstants.FORM_ADD_DATA_SUCCESS,
    payload: resumeData,
  });
};

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

export const addSkill = (skillData) => (dispatch) => {
  dispatch({ type: resumeFormConstants.FORM_ADD_SKILL_DATA_REQUEST });
  dispatch({
    type: resumeFormConstants.FORM_ADD_SKILL_DATA_SUCCESS,
    payload: skillData,
  });
};
