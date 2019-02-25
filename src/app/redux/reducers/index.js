import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import pageReducer from "./pageReducer";


const entitiesReducer = combineReducers({
  coins: coinsReducer
});


// EXPORTED REDUCER
export default combineReducers({
  entities: entitiesReducer,
  pager: pageReducer
});
