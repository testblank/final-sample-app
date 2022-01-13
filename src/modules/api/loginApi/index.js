import CommonApi from '@modules/api/CommonApi';

export const loginApi = () => CommonApi({
	url: '/users',
	method: 'get',
});

export const logoutApi = () => null;
