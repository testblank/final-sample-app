import CommonApi from '@api/CommonApi';

export const loginApi = () => CommonApi({
	url: '/users',
	method: 'get',
});

export const logoutApi = () => null;
