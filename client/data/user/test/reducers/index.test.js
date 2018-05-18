import userReducer from '../../reducers/index';
import * as userActions from '../../actions/index';

const defaultData = {
    userList: [],
};

describe('Data User Reducer Test', () => {
    it('has a default state', () => {
        expect(userReducer(undefined, { type: 'unexpected' })).toEqual({
            userList: defaultData.userList,
        });
    });
});
