import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { element } from 'prop-types';

const UserAuth = ({ children }) => {
	const authed = false;
	const location = useLocation();

	return authed === true ? (
		children
	) : (
		<Navigate to="/" replace state={{ path: location.pathname }} />
	);
};

UserAuth.propTypes = {
	children: element,
};

UserAuth.defaultProps = {
	children: null,
};

export default UserAuth;
