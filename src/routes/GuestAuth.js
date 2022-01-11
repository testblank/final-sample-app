import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

const GuestAuth = ({ children }) => {
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
