const initUserMainStates = {
    userList: [],
};

const userReducer = (state = initUserMainStates, action) => {
    switch (action.type) {
    case 'GET_USER_LIST_START':
        return state;
    case 'GET_USER_LIST_SUCCESS':
        return Object.assign({}, state, {
            userList: action.userList,
        });
    case 'GET_USER_LIST_FAIL':
        return state;
    default:
        return state;
    }
};

export default userReducer;
