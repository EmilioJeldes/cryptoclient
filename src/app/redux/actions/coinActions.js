import api from "../api/api";
import {
  COINS_FETCH_ALL_FAILURE,
  COINS_FETCH_ALL_START,
  COINS_FETCH_ALL_SUCCESS,
  COINS_FETCH_TOTAL_COUNT_FAILURE,
  COINS_FETCH_TOTAL_COUNT_START,
  COINS_FETCH_TOTAL_COUNT_SUCCESS
} from "../types";

// All Coins Actions
const fetchCoinsStart = () => ({ type: COINS_FETCH_ALL_START });
const fetchCoinsSuccess = coins => ({ type: COINS_FETCH_ALL_SUCCESS, payload: coins });
const fetchCoinsFailure = error => ({ type: COINS_FETCH_ALL_FAILURE, error: true, payload: error });
// Count Actions
const fetchCoinsTotalCountStart = () => ({ type: COINS_FETCH_TOTAL_COUNT_START });
const fetchCoinsTotalCountSuccess = count => ({ type: COINS_FETCH_TOTAL_COUNT_SUCCESS, payload: count });
const fetchCoinsTotalCountFailure = error => ({ type: COINS_FETCH_TOTAL_COUNT_FAILURE, error: true, payload: error });

/*
 ************ ACTIONS **************
 */

export const fetchAllCoins = () => async (dispatch, getState) => {
  if (Object.keys(getState().entities.coins.byId).length === 0) {
    //Start process dispatching a starting action
    dispatch(fetchCoinsStart());

    try {
      const result = await api.coins.fetchAll();

      // Success request dispatch success action with the result
      dispatch(fetchCoinsSuccess(result));
    } catch (e) {
      // If there was an error, it dispatches a failure action with the error as payload
      dispatch(fetchCoinsFailure(e));
    }
  }
};

export const fetchCoinsByPage = (page, size) => async dispatch => {
  dispatch(fetchCoinsStart());

  try {
    const result = await api.coins.fetchByPage(page, size);
    console.log("fetchCoinsByPage: ", result);

    // Success request dispatch success action with the result
    dispatch(fetchCoinsSuccess(result));
  } catch (e) {
    // If there was an error, it dispatches a failure action with the error as payload
    console.log(e);
    console.log("ERROR WHILE GETTING THE ACTION BACK");
    dispatch(fetchCoinsFailure(e));
  }
};

export const fetchCoinsTotalCount = () => async dispatch => {
  dispatch(fetchCoinsTotalCountStart());

  try {
    const result = await api.coins.fetchTotalCount();
    console.log("fetchCoinsByPage: ", result);

    // Success request dispatch success action with the result
    dispatch(fetchCoinsTotalCountSuccess(result));
  } catch (e) {
    // If there was an error, it dispatches a failure action with the error as payload
    console.log(e);
    console.log("ERROR WHILE GETTING THE TOTAL COUNT BACK");
    dispatch(fetchCoinsTotalCountFailure(e));
  }
};
