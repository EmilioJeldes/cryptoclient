import { COINS_FETCH_TOTAL_COUNT_SUCCESS, PAGER_BEFORE_PAGE, PAGER_NEXT_PAGE } from "../types";

const init = {
  selectedPage: 0,
  size: 100,
  pages: 0,
  loadedPages: []
};

export const pageReducer = (state = init, action) => {
  switch (action.type) {
    case PAGER_NEXT_PAGE:
      return { ...state, selectedPage: state.selectedPage + 1 };

    case PAGER_BEFORE_PAGE:
      return { ...state, selectedPage: state.selectedPage - 1 };

    case COINS_FETCH_TOTAL_COUNT_SUCCESS:
      return {
        ...state,
        pages: Math.ceil(action.payload.size / state.size),
        loadedPages: [...new Set([...state.loadedPages, state.selectedPage])]
      };

    default:
      return state;
  }
};

export default pageReducer;
