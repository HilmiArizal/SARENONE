import axios from "axios";
import { API_URL_LOCAL } from "../../API_Local";
import { FETCH_DATA_TEAM_FAIL, FETCH_DATA_TEAM_SUCCESS } from "../Types";


export const fetchTeam = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL_LOCAL + `team/getTeam`);
            dispatch({
                type: FETCH_DATA_TEAM_SUCCESS,
                payload: res.data.data
            })            
        } catch (err) {
            console.log(err);
            dispatch({
                type: FETCH_DATA_TEAM_FAIL,
            })
        }
    }
}