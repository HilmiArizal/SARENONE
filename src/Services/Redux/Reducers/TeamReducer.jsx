import { FETCH_DATA_PRODUCT_ID_FAIL, FETCH_DATA_TEAM_SUCCESS } from "../Types";

const INITIAL_STATE = {
  dataTeam: [],
};

export default function TeamReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA_TEAM_SUCCESS:
      return { ...state, dataTeam: action.payload };
    case FETCH_DATA_PRODUCT_ID_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
}
