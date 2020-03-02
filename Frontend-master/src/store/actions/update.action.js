import { UPDATE_DATA, UPDATE_DATA_SUCCESS } from "../action.types";

export const updateData = values => ({
    type: UPDATE_DATA,
    values
});
export const updateDataSuccess = values => ({
    type: UPDATE_DATA_SUCCESS,
    values
});
