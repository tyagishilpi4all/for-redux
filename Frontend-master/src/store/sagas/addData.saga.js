import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { addDataSuccess } from "../actions/addData.action";

export function* onaddData(data) {
    let values = data.values;

    try {
        //const data = yield axios.post("http://localhost:1234/addData", values);
        const data = yield axios.post("/addData", values);
        yield put(addDataSuccess(data.data));
    } catch (error) {
        throw error;
    }
}
