import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { deleteDataSuccess } from "../actions/deleteData.action";

export function* onDeleteData(data) {
    let values = data.values;

    try {
        // const data = yield axios.post(
        //     "http://localhost:1234/deleteData",
        //     values
        // );
        const data = yield axios.post("/deleteData", values);
        yield put(deleteDataSuccess(data.data));
    } catch (error) {
        throw error;
    }
}
