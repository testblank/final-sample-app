import React from 'react';
import { string, object, element, bool } from 'prop-types';

const BaseCard = ({ bgClear, backgroundColor, children, style, className }) => {
	const styleObj = {
		width: '100%',
		minHeight: '72px',
		backgroundColor: bgClear ? 'transparent' : '',
		borderTopLeftRadius: '16px',
		borderTopRightRadius: '16px',
		borderBottomRightRadius: '16px',
		borderBottomLeftRadius: '16px',
	};

	return (
		<div
			className={`BaseCardPublish ${!bgClear ? `bg-${backgroundColor}-50` : ``} ${className || ''}`}
			style={Object.assign(styleObj, style)}
		>
			{children}
		</div>
	);
};

BaseCard.propTypes = {
	bgClear: bool,
	backgroundColor: string,
	children: element,
	style: object,
	className: string,
};

export default BaseCard;
