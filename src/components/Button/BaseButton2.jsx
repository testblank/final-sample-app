import React from 'react';
import ButtonPublish2 from '@publish/ButtonPublish2';
import debounce from 'util/debounce';
import PropTypes from 'prop-types';

const BaseButton2 = ({
	text,
	onClick,
	disabled,
	color,
	variant,
	size,
	fullWidth,
}) => {
	const cbOnClick = () => {
		if (onClick && !disabled) {
			debounce(onClick, 300);
		}
	};

	const buttonSize = `btn-${size}${fullWidth ? '-fullWidth' : ''}`;
	const buttonColor = `btn-${color}-${variant}`;

	return (
		<ButtonPublish2
			className={`rounded-sm ${buttonSize} ${buttonColor} `}
			text={text}
			onClick={cbOnClick}
			disabled={disabled}
		/>
	);
};

BaseButton2.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(['primary', 'gray']),
	variant: PropTypes.oneOf(['contained', 'outline']),
	size: PropTypes.oneOf(['small', 'large']),
	fullWidth: PropTypes.bool,
};

BaseButton2.defaultProps = {
	text: 'Button',
	onClick: () => {},
	disabled: false,
	color: 'primary',
	variant: 'contained',
	size: 'large',
	fullWidth: false,
};

export default BaseButton2;
