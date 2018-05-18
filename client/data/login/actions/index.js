export const getLoggedInStart = () => ({
    type: 'GET_LOGGED_IN_START',
});

export const getLoggedInSuccess = data => ({
    type: 'GET_LOGGED_IN_SUCCESS',
    isLoggedIn: true,
    data,
});

export const getLoggedInFail = () => ({
    type: 'GET_LOGGED_IN_FAIL',
});

export const postLogoutStart = () => ({
    type: 'POST_LOGOUT_START',
});

export const postLogoutSuccess = () => ({
    type: 'POST_LOGOUT_SUCCESS',
    isLoggedIn: false,
    data: null,
});

export const postLogoutFail = () => ({
    type: 'POST_LOGOUT_FAIL',
});
