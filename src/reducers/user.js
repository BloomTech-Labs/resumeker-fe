import { userConstants } from '../actions/types';

export default function userReducer(state = {}, action) {
    switch(action.type) {
        case userConstants.GET_ALL_REQUEST:
            return {
                loading: true,
            }
        default:
            return state;
    }
}