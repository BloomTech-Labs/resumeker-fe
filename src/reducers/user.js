import { userConstants } from '../actions/types';

const initialState = {
    user:{},
    loading: false,
    error: null
}

export const getUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case userConstants.GET_USER_REQUEST:
            return {...state, loading: true}

        case userConstants.GET_USER_SUCCESS:
            return {...state, user: action.payload}
        
        case userConstants.GET_USER_FAILURE:

            return {...state, error: action.payload}

        default:
            return state;
    }
}

// export function getUserReducer(state = initialState, action) {
//     switch(action.type) {
//         case userConstants.GET_USER_REQUEST:
//             return {
//                 loading: true,
//             }
//         default:
//             return state;
//     }
// }

// export function updateUserReducer(state = {}, action) {
//     switch(action.type) {
//         case userConstants.UPDATE_USER_REQUEST:
//             return {
//                 loading: true,
//             }
//         default:
//             return state;
//     }
// }