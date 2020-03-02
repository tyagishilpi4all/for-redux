import { FETCH_DATA, FETCH_DATA_SUCCESS } from "../action.types";

export const fetchData = () => ({
    type: FETCH_DATA
});
export const fetchDataSuccess = values => ({
    type: FETCH_DATA_SUCCESS,
    values
});
