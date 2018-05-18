import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import getUserList from '../../../services/api/user/getUserList';
import errHandler from '../../../services/helper/error';
import {
    getUserListSuccess,
    getUserListFail,
} from '../actions/index';

export function* workerGetUserListStart() {
    try {
        const res = yield call(axios, getUserList());
        if (!res.data.data) {
            const err = new Error();
            err.message = res.data.error;
            err.res = res;
            throw err;
        }
        yield put(getUserListSuccess(res.data.data));
    } catch (err) {
        yield put(getUserListFail());
        errHandler(err);
    }
}

export function* watchGetUserListStart() {
    yield takeEvery('GET_USER_LIST_START', workerGetUserListStart);
}
