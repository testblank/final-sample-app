import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 1000,
});

instance.interceptors.request.use(
	(config) => {
		// 요청 바로 직전 axios 설정값에 대해 작성합니다.
		console.log('config', config);
		return config;
	},
	(error) => {
		// 요청 에러 처리를 작성합니다.
		console.log('error', error);
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	(response) => {
		console.log('response', response);
		return response;
	},

	(error) => {
		console.log('error', error);
		return Promise.reject(error);
	},
);

export default instance;
