import { resumeFormConstants } from "../actions/resumeFormActions.js";

const initialState = {
  loading: false,
  error: "",

  resumeData: {
    firstName: "",
    lastName: "",
    email: "",
    education: [],
    jobs: [],
    skills: [],
  }, // End resumeData object
};

export const resumeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case resumeFormConstants.FORM_ADD_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          // jobs: [...state.resumeData.jobs, ...action.payload_jobs],
          ...action.payload,
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case resumeFormConstants.FORM_ADD_WORK_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_WORK_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          jobs: [...state.resumeData.jobs, action.payload],
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_WORK_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case resumeFormConstants.FORM_UPDATE_WORK_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_UPDATE_WORK_DATA_SUCCESS:
      var jobPos = state.resumeData.jobs
        .map(function (x) {
          return x.id;
        })
        .indexOf(action.payload.id);
      state.resumeData.jobs[jobPos] = action.payload;
      return { ...state };

    case resumeFormConstants.FORM_ADD_EDUCATION_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_EDUCATION_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          education: [...state.resumeData.education, action.payload],
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_EDUCATION_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case resumeFormConstants.FORM_UPDATE_EDUCATION_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_UPDATE_EDUCATION_DATA_SUCCESS:
      var educationPos = state.resumeData.education
        .map(function (x) {
          return x.id;
        })
        .indexOf(action.payload.id);
      state.resumeData.education[educationPos] = action.payload;
      return { ...state };

    case resumeFormConstants.FORM_ADD_SKILL_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_SKILL_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          skills: [...state.resumeData.education, action.payload],
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_SKILL_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
