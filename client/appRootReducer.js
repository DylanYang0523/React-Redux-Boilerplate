import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './data/login/reducers';
import userReducer from './data/user/reducers';

const appRootReducer = combineReducers({
    form: formReducer,
    loginReducer,
    userReducer,
});

export default appRootReducer;
