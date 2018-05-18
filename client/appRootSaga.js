import { watchGetLoggedInStart, watchPostLogoutStart } from './data/login/sagas/index';
import { watchGetUserListStart } from './data/user/sagas/index';

export default function* rootSaga() {
    yield [
        watchGetLoggedInStart(),
        watchPostLogoutStart(),
        watchGetUserListStart(),
    ];
}
