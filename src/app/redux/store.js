import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";

import reducers from "./reducers";

export const loadState = () => {
  const serializedState = localStorage.getItem("state");

  try {
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log("The store cant be parsed from localstorage");
  }
};

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxPromise, thunk)));

/**
 * Save pieces of state in local storage
 */
/*
store.subscribe(() => {
  saveState({
    entities: store.getState().entities
  });
});
*/

export default store;
