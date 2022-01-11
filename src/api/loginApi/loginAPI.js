import CommonApi from '@/api/CommonApi';

export const loginApi = (param) => {
    return CommonApi({
        url: '/users',
        method: 'GET',
    });
};

export const logoutApi = (param) => {
    return null;
};
