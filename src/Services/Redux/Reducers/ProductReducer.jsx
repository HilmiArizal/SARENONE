import {
  FETCH_DATA_PRODUCT_FAIL,
  FETCH_DATA_PRODUCT_ID_FAIL,
  FETCH_DATA_PRODUCT_ID_SUCCESS,
  FETCH_DATA_PRODUCT_SUCCESS,
} from "../Types";

const INITIAL_STATE = {
  dataProduct: [],
  dataProductId: [],
};

export default function ProductReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        dataProduct: action.payload,
      };
    case FETCH_DATA_PRODUCT_ID_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        dataProductId: action.payload,
      };
    case FETCH_DATA_PRODUCT_FAIL:
      return INITIAL_STATE;
    case FETCH_DATA_PRODUCT_ID_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
}
