import config from '../config';

/* Get further info when you logged in. This is just a demo example.
You should not call "users" api in here.
In practical, your backend api will be separated by domain,
and our api folders should follow the api domain. */

const getLoggedIn = token => ({
    url: `${config.users}/2`,
    method: 'get',
    headers: {
        Authorization: token,
    },
});

export default getLoggedIn;
