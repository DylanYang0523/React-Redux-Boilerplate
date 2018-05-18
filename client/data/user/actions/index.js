export const getUserListStart = () => ({
    type: 'GET_USER_LIST_START',
});

export const getUserListSuccess = userList => ({
    type: 'GET_USER_LIST_SUCCESS',
    userList,
});

export const getUserListFail = () => ({
    type: 'GET_USER_LIST_FAIL',
});
