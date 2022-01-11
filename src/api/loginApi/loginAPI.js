import CommonApi from '@api/CommonApi';

export const loginApi = () => {
	return CommonApi({
		url: '/users',
		method: 'get',
	});
};

export const logoutApi = () => {
	return null;
};
