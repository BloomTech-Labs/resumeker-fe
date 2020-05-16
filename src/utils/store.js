import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";

import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";

export const history = createBrowserHistory();

export default function store(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    applyMiddleware(routerMiddleware(history), thunk, logger)
  );

  return store;
}
