import {LOAD} from "./actionTypes";

export const loadAccount = data => async dispatch => {
    dispatch({type: LOAD, data});
};