import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { updateDataSuccess } from "../actions/update.action";

export function* onupdateData(data) {
    let values = data.values;

    try {
        // const data = yield axios.post(
        //     "http://localhost:1234/updateData",
        //     values
        // );
        const data = yield axios.post("/updateData", values);

        yield put(updateDataSuccess(data.data));
    } catch (error) {
        throw error;
    }
}
