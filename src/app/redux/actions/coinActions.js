import api from "../api/api";
import { COINS_FETCH_ALL_FAILURE, COINS_FETCH_ALL_START, COINS_FETCH_ALL_SUCCESS } from "../types";

const fetchCoinsStart = () => ({ type: COINS_FETCH_ALL_START });
const fetchCoinsSuccess = coins => ({ type: COINS_FETCH_ALL_SUCCESS, payload: coins });
const fetchCoinsFailure = error => ({ type: COINS_FETCH_ALL_FAILURE, error: true, payload: error });

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
