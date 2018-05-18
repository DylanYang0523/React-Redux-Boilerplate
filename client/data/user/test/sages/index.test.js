import { call, put } from 'redux-saga/effects';
import assert from 'assert';
import axios from 'axios';
import { workerGetUserListStart } from '../../sagas/index';
import getUserList from '../../../../services/api/user/getUserList';
import { getUserListSuccess } from '../../actions/index';

const response = {
    "data": {
        "data": [{}],
    }
};

describe('Data User Saga Test', () => {
    const generator = workerGetUserListStart();
    it('should return API call', () => {
        assert.deepEqual(generator.next().value, call(axios, getUserList()));
    });
    it('should return API call success', () => {
        assert.deepEqual(generator.next(response).value, put(getUserListSuccess([{}])));
    });
});
