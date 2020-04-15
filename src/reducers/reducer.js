import * as actions from '../actions/'

const inititialState = {
    resumes: {},
    user: [],
    gettingData: false,
    addingData: false,
    error: null,
}

const reducer = (state = inititialState, action) => {

    switch(action.type) {
        case actions.DATA_FETCHING:
            return {...state, gettingData: true}
        case actions.DATA_SUCCESS:
            return {...state, user: [...state.user, action.payload]}
        case actions.DATA_ADD:
            return {...state, addingData: true}
        case actions.DATA_ADD_SUCCESS:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export default reducer;