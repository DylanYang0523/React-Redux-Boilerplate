import config from '../config';

const postLogin = (email, password) => ({
    url: `${config.login}`,
    method: 'post',
    data: {
        email,
        password,
    },
});

export default postLogin;
