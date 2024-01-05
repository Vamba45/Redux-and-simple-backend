import {put, take, takeEvery} from "redux-saga/effects";
import { ASYNC_DECREMENT, ASYNC_INCREMENT, INCREMENT, decrementCreator, incrementCreator } from "../countReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator())
}

function* decrimentWorker() {
    yield delay(1000)
    yield put(decrementCreator())
}

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrimentWorker)
}