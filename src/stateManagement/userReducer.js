import * as actions from './userTypes.js'

const initialState = {
    currentUser: {
        email:'',
        user_id:'',
        created_at:'',
        user_metadata: {
            first_name:'',
            last_name:'',
            phone:'',
            email:'',
        }
    },
    isLoading: false,
    errors: null,
    token: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_USER_START:
            return { ...state, isLoading: true}
        case actions.FETCH_USER_SUCCESS:
            return { ...state, currentUser: [...state.currentUser, ...action.payload]}
        case actions.FETCH_USER_FAIL:
            return {...state, errors: action.payload};
        case actions.UPDATE_USER_START:
            return { ...state, isLoading: true}
        case actions.UPDATE_USER_SUCCESS:
            return { ...state, currentUser: [...state.currentUser, ...action.payload]}
        case actions.UPDATE_USER_FAIL:
            return { ...state, errors: action.payload}
        default:
            return state;
    }
}

export default reducer;
