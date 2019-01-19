import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";

const entitiesReducer = combineReducers({
  coins: coinsReducer
});

export default combineReducers({
  entities: entitiesReducer
});
