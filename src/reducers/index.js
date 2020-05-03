import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import  { userReducer } from './user.js'
import { resumeFormReducer } from './resumeForm.js'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    resumeFormReducer
});

export default createRootReducer