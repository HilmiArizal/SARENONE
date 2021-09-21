import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import TeamReducer from "./TeamReducer";

export default combineReducers({
    product: ProductReducer,
    team: TeamReducer
})