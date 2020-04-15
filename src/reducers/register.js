import * as actions from "../actions";

export default function registerReducer(state = {}, action) {
    switch(action.type) {
        case actions.REGISTER_REQUEST:
            return {
              ...state,
              errorMessage: ""
            };
      
          case actions.REGISTER_SUCCESS:
            return {
              ...state,
              user: action.payload,
              errorMessage: action.payload
            };
      
          case actions.REGISTER_FAILURE:
            return {
              ...state,
              errorMessage: action.errorMessage
            };
            default:
                return state;
    }

}