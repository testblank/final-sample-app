import CommonApi from '@api/CommonApi';

export const loginApi = (param) => {
    return CommonApi({
        url: '/users',
        method: 'get',
    });
};

export const logoutApi = (param) => {
    return null;
};
