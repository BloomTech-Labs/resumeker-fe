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
    projects: [],
    techSkills: [],
    generalSkills: [],
    languages: [],
    hobbies: [],
  }, // End resumeData object
};

export const resumeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    /* 
    ***********************************
    General Info Reducers
    ***********************************
    */

    case resumeFormConstants.FORM_ADD_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          ...action.payload,
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    /* 
    ***********************************
    Work Reducers
    ***********************************
    */

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

    /* 
    ***********************************
    Project Reducers
    ***********************************
    */

    case resumeFormConstants.FORM_ADD_PROJECT_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_PROJECT_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          projects: [...state.resumeData.projects, action.payload],
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_PROJECT_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    /* 
    ***********************************
    Tech Skills Reducers
    ***********************************
    */

    //Adding Skills to State
    case resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          techSkills: [...state.resumeData.techSkills, action.payload],
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_TECH_SKILLS_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    //Deleting Skill from State
    case resumeFormConstants.FORM_DELETE_TECH_SKILLS_DATA_SUCCESS:
      if (state.resumeData.techSkills.some((e) => e.id === action.payload.id)) {
        state.resumeData.techSkills = state.resumeData.techSkills.filter(
          (e) => e.id !== action.payload.id
        );
      }
      return { ...state };

    /* 
    ***********************************
    General Skills Reducers
    ***********************************
    */

    case resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          generalSkills: [...state.resumeData.generalSkills, action.payload],
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_GENERAL_SKILLS_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    //Deleting Skill from State

    case resumeFormConstants.FORM_DELETE_GENERAL_SKILLS_DATA_SUCCESS:
      if (
        state.resumeData.generalSkills.some((e) => e.id === action.payload.id)
      ) {
        state.resumeData.generalSkills = state.resumeData.generalSkills.filter(
          (e) => e.id !== action.payload.id
        );
      }
      return { ...state };

    /* 
    ***********************************
    Language Reducers
    ***********************************
    */

    case resumeFormConstants.FORM_ADD_LANGUAGE_DATA_REQUEST:
      return { ...state, loading: true };

    case resumeFormConstants.FORM_ADD_LANGUAGE_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          languages: [...state.resumeData.languages, action.payload],
        },
        loading: false,
      };

    case resumeFormConstants.FORM_ADD_LANGUAGE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case resumeFormConstants.FORM_UPDATE_LANGUAGE_DATA_REQUEST:
      return { ...state, loading: true };

    case resumeFormConstants.FORM_UPDATE_LANGUAGE_DATA_SUCCESS:
      var languagesPos = state.resumeData.languages
        .map(function (x) {
          return x.id;
        })
        .indexOf(action.payload.id);
      state.resumeData.languages[languagesPos] = action.payload;
      return { ...state };

    case resumeFormConstants.FORM_DELETE_LANGUAGE_DATA_REQUEST:
      return { ...state, loading: true };

    case resumeFormConstants.FORM_DELETE_LANGUAGE_DATA_SUCCESS:
      if (state.resumeData.languages.some((e) => e.id === action.payload.id)) {
        state.resumeData.languages = state.resumeData.languages.filter(
          (e) => e.id !== action.payload.id
        );
      }
      return { ...state, loading: false };

    /* 
    ***********************************
    Education Reducers
    ***********************************
    */

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

    /* 
    ***********************************
    Hobby Reducers
    ***********************************
    */

    case resumeFormConstants.FORM_ADD_HOBBY_DATA_REQUEST:
      return { ...state, loading: true };
    case resumeFormConstants.FORM_ADD_HOBBY_DATA_SUCCESS:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          hobbies: [...state.resumeData.hobbies, action.payload],
        },
        loading: false,
      };
    case resumeFormConstants.FORM_ADD_HOBBY_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case resumeFormConstants.FORM_UPDATE_HOBBY_DATA_REQUEST:
      return { ...state, loading: true };

    case resumeFormConstants.FORM_UPDATE_HOBBY_DATA_SUCCESS:
      var hobbiesPos = state.resumeData.hobbies
        .map(function (x) {
          return x.id;
        })
        .indexOf(action.payload.id);
      state.resumeData.hobbies[hobbiesPos] = action.payload;
      return { ...state };

    case resumeFormConstants.FORM_DELETE_HOBBY_DATA_REQUEST:
      return { ...state, loading: true };

    case resumeFormConstants.FORM_DELETE_HOBBY_DATA_SUCCESS:
      if (state.resumeData.hobbies.some((e) => e.id === action.payload.id)) {
        state.resumeData.hobbies = state.resumeData.hobbies.filter(
          (e) => e.id !== action.payload.id
        );
      }
      return { ...state, loading: false };

    /* 
    ***********************************
    Default Case
    ***********************************
    */

    default:
      return state;
  }
};
