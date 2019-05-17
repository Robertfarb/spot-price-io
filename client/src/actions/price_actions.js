import axios from "axios";

import { GET_ERRORS, SET_LIVE_PRICES } from "./types";

// Get Live Spot Prices
export const getLivePrices = (userData, history) => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/live-prices/all")
      .then(res => {
        dispatch(setLivePrices(res.data));
        resolve(res.data);
        return true;
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err
        });
        reject(err);
      });
  });
};

// Set Live Prices
export const setLivePrices = prices => {
  return {
    type: SET_LIVE_PRICES,
    payload: prices
  };
};