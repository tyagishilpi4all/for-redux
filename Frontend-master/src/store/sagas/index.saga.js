import { takeLatest, all } from "redux-saga/effects";

import {
    ADD_DATA,
    FETCH_DATA,
    UPDATE_DATA,
    DELETE_DATA
} from "../action.types";

import { onaddData } from "./addData.saga";
import { onfetchData } from "./fetchData.saga";
import { onupdateData } from "./update.saga";
import { onDeleteData } from "./delete.saga";
function* sagas() {
    yield all([takeLatest(ADD_DATA, onaddData)]);
    yield all([takeLatest(FETCH_DATA, onfetchData)]);
    yield all([takeLatest(UPDATE_DATA, onupdateData)]);
    yield all([takeLatest(DELETE_DATA, onDeleteData)]);
}

export default sagas;
