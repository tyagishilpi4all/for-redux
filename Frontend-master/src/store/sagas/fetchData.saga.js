import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { fetchDataSuccess } from "../actions/fetchData.action";

export function* onfetchData() {
    try {
        // const data = yield axios.get("http://localhost:1234/fetchData");
        const data = yield axios.get("/fetchData");
        yield put(fetchDataSuccess(data.data));
    } catch (error) {
        throw error;
    }
}
