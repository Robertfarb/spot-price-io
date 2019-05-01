import isEmpty from "../validation/is-empty";
import { SET_LIVE_PRICES } from "../actions/types";

const initialState = {
  livePrices: [],
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIVE_PRICES:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default priceReducer;
