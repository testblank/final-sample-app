import React from 'react';
import { bool, func, object, oneOfType, string } from 'prop-types';

const CardTypeThree = ({
	textStr,
	btnStr,
	onClickBtn,
	bgClear,
	backgroundColor,
	style,
	className,
	// borderTopRight,
	// borderTopLeft,
	// borderBottomRight,
	// borderBottomLeft,
}) => {
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
			<div className={`CardTypeThree flex justify-between`}>
				<div
					className={`flex-1 text-left flex items-center font-medium text-gray-600 text-16 leading-24`}
					style={{ marginLeft: '16px' }}
				>
					{textStr}
				</div>
				<div
					onClick={onClickBtn}
					className={
						'flex-none flex justify-start text-blue-500 bg-white font-bold leading-21'
					}
					style={{
						margin: '19px 16px 24px 0',
						padding: '8px 12px',
						boxSizing: 'border-box',
						borderRadius: '100px',
						border: '1px solid #B3B3B3',
					}}
				>
					{btnStr}
				</div>
			</div>
		</div>
	);
};

CardTypeThree.propTypes = {
	bgClear: bool,
	textStr: oneOfType([string, object]),
	btnStr: string,
	onClickBtn: func,
	style: object,
	className: string,
	backgroundColor: string,
};

export default CardTypeThree;
