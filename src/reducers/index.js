import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import  {getUserReducer} from './user.js'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    getUserReducer,
});

export default createRootReducer