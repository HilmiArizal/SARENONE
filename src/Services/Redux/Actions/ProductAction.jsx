import axios from "axios";
import { API_URL_LOCAL } from "../../API_Local";
import { FETCH_DATA_PRODUCT_FAIL, FETCH_DATA_PRODUCT_ID_FAIL, FETCH_DATA_PRODUCT_ID_SUCCESS, FETCH_DATA_PRODUCT_SUCCESS } from "../Types";

export const FetchProduct = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API_URL_LOCAL + "product/getAllProduct");
      dispatch({
        type: FETCH_DATA_PRODUCT_SUCCESS,
        payload: res.data.product,
      });
    } catch (err) {
      dispatch({
        type: FETCH_DATA_PRODUCT_FAIL,
      });
      console.log(err);
    }
  };
};

export const FetchProductId = (productId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API_URL_LOCAL + `product/getProductByProductId/${productId}`);
      dispatch({
        type: FETCH_DATA_PRODUCT_ID_SUCCESS,
        payload: res.data.product,
      });
    } catch (err) {
      dispatch({
        type: FETCH_DATA_PRODUCT_ID_FAIL,
      });
      console.log(err);
    }
  }
}
