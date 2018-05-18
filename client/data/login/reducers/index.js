const initState = {
    isLoggedIn: false,
    data: null,
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
    case 'GET_LOGGED_IN_START':
        return state;
    case 'GET_LOGGED_IN_SUCCESS':
        return Object.assign({}, state, {
            isLoggedIn: action.isLoggedIn,
            data: action.data,
        });
    case 'GET_LOGGED_IN_FAIL':
        return state;
    case 'POST_LOGOUT_START':
        return state;
    case 'POST_LOGOUT_SUCCESS':
        return Object.assign({}, state, {
            isLoggedIn: action.isLoggedIn,
            data: action.data,
        });
    case 'POST_LOGOUT_FAIL':
        return state;
    default:
        return state;
    }
};

export default loginReducer;
