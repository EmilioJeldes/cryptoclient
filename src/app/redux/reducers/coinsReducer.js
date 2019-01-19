import { combineReducers } from "redux";
import { createSelector } from "reselect";

import { COINS_FETCH_ALL_FAILURE, COINS_FETCH_ALL_START, COINS_FETCH_ALL_SUCCESS } from "../types";

/**
 * Selectors
 */
export const selectCoins = state => state.entities.coins.byId;
export const selectCoinIds = state => state.entities.coins.allIds;
export const selectCoin = (state, id) => state.entities.coins.byId[id];

export const byId = (state = {}, action) => {
  switch (action.type) {
    case COINS_FETCH_ALL_START:
      return state;

    case COINS_FETCH_ALL_SUCCESS:
      return { ...state, ...action.payload };

    case COINS_FETCH_ALL_FAILURE:
      return {};

    default:
      return state;
  }
};

export const allIds = (state = [], action) => {
  switch (action.type) {
    case COINS_FETCH_ALL_SUCCESS:
      return [...new Set([...state, ...Object.keys(action.payload)])];

    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });
