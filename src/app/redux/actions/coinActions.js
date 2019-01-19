import api from "../api/api";
import { COINS_FETCH_ALL_FAILURE, COINS_FETCH_ALL_START, COINS_FETCH_ALL_SUCCESS } from "../types";

export const fetchAllCoins = () => async dispatch => {
  //Start process dispatching a starting action
  dispatch({ type: COINS_FETCH_ALL_START });

  try {
    const result = await api.coins.fetchAll();

    // Success request dispatch success action with the result
    dispatch({ type: COINS_FETCH_ALL_SUCCESS, payload: result });
  } catch (e) {
    // If there was an error, it dispatches a failure action with the error as payload
    dispatch({ type: COINS_FETCH_ALL_FAILURE, error: true, payload: e });
  }
};
