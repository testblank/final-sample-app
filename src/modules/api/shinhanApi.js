import axios from 'axios';
import envUtil from '@utils/envUtil';

/**
 * 1. 서버 또는 plugin으로 인증여부 확인
 * 2. response 데이터 인증토큰을 session.storage에 저장
 * 3. 인증이 필요한 authAxios 객체 (header에 토큰 저장), 인증이 필요없는 publicAxios 객체
 * 4. 인증이 만료된 경우 처리??
 * 5. response에 401이 발생한경우 plugin 함수를 호출하여 강제로 메인으로 보냄
 */

export const AXIOS_INTERCEPTOR_REQUEST = {
	AUTH: 'auth',
	NOAUTH: 'noauth'
};
Object.freeze(AXIOS_INTERCEPTOR_REQUEST);

export const AXIOS_INTERCEPTOR_RESPONSE = {
	PARSER: 'parser',
};
Object.freeze(AXIOS_INTERCEPTOR_REQUEST);

const getConfig = () => {
	const baseURL = envUtil.getEnvByKey('REACT_APP_SHINHAN_API_URL') || 'https://reqres.in/api/';
	const timeout = 1000;
	const headers = { 'Content-Type': 'application/json' };

	return {
		baseURL,
		timeout,
		headers
	}
}

const instance = axios.create(getConfig());

instance.interceptors.request.use(
	config =>
		// 토큰정보 있을시 헤더에 토큰 set
		config
	,
	error =>
		Promise.reject(error)
	,
);

instance.interceptors.response.use(
	response =>
		// console.log('response', response);
		response
	,

	error =>
		// 401 에러인경우 native에 로그아웃 플러그인 호출
		Promise.reject(error)
	,
);

export default instance;
