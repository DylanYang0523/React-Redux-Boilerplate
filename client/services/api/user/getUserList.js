import config from '../config';

const getUserList = token => ({
    url: `${config.users}?per_page=12`,
    method: 'get',
    headers: {
        Authorization: token,
    },
});

export default getUserList;
