import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getCookie, delCookie } from '../../../services/helper/cookie';
import getLoggedIn from '../../../services/api/auth/getLoggedIn';
import errHandler from '../../../services/helper/error';
import {
    getLoggedInSuccess,
    getLoggedInFail,
    postLogoutStart,
    postLogoutSuccess,
    postLogoutFail,
} from '../actions/index';

export function* workerGetLoggedInStart() {
    try {
        const token = getCookie('access_token');
        const res = yield call(axios, getLoggedIn(token));
        if (!res.data.data) {
            const err = new Error();
            err.message = res.data.error;
            err.res = res;
            throw err;
        }
        yield put(getLoggedInSuccess(res.data.data));
    } catch (err) {
        yield put(getLoggedInFail());
        yield put(postLogoutStart());
        errHandler(err);
    }
}

export function* watchGetLoggedInStart() {
    yield takeEvery('GET_LOGGED_IN_START', workerGetLoggedInStart);
}

export function* workerPostLogoutStart() {
    try {
        delCookie('access_token');
        yield put(postLogoutSuccess());
    } catch (err) {
        yield put(postLogoutFail());
        errHandler(err);
    }
}

export function* watchPostLogoutStart() {
    yield takeEvery('POST_LOGOUT_START', workerPostLogoutStart);
}
