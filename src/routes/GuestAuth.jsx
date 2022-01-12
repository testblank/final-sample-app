import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import useLogin from '@hooks/useLogin';

const GuestAuth = ({ children }) => {
	const [loginData, login] = useLogin();
	// const [state, setState] = useState(loginData);

	useEffect(() => {
		console.log('here1');
		login();
	}, []);

	useEffect(() => {
		console.log('here2', loginData);
	}, [loginData]);

	// console.log('state', state);

	const authed = false;
	const location = useLocation();

	return authed === true ? (
		children
	) : (
		<Navigate to="/" replace state={{ path: location.pathname }} />
	);
};

GuestAuth.propTypes = {
	children: PropTypes.element,
};

GuestAuth.defaultProps = {
	children: null,
};

export default GuestAuth;
