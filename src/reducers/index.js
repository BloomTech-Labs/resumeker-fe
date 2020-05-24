import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { resumeFormReducer } from "./resumeForm.js";

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        resumeFormReducer,
    });

export default createRootReducer;
