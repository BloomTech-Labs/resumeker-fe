import { combineReducers } from 'redux';
import userReducer from './user';
import registerReducer from './register'
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    registerReducer
});

export default createRootReducer