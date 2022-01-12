import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import useLogin from '@hooks/useLogin';

const GuestAuth = ({ children }) => {
	const location = useLocation();
	const [loginData, login] = useLogin();

	useEffect(() => {
		login();
	}, []);

	if (loginData.userInfo) {
		return children;
	}

	return <Navigate to="/" replace state={{ path: location.pathname }} />;
};

GuestAuth.propTypes = {
	children: PropTypes.element,
};

GuestAuth.defaultProps = {
	children: null,
};

export default GuestAuth;
