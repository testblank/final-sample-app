import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginActions } from '@redux/login/loginSlice';

const useLogin = () => {
	const loginData = useSelector((state) => state.login);
	const dispatch = useDispatch();

	const login = useCallback(() => {
		dispatch(loginActions.loginRequest());
	}, [dispatch]);

	const logout = useCallback(() => {
		dispatch(loginActions.logoutRequest());
	}, [dispatch]);

	return [loginData, login, logout];
};

export default useLogin;
