import React from 'react';
import { element, func, string } from 'prop-types';

const TitleBox = ({ icon, title = '', className, onClick }) => {
	const slicedText = () => {
		if (title.replace(' ', '').length > 15) {
			return `${title.slice(0, 15)}...`;
		}
		return title;
	};

	const cbOnclick = () => {
		onClick && onClick();
	};

	return (
		<div
			className={`TitlePublish flex justify-left items-center ${className}`}
			onClick={cbOnclick}
		>
			{icon && (
				<div
					className={`svgArea flex justify-center items-center`}
					style={{ width: '36px', height: '36px', marginRight: '4px' }}
				>
					{icon}
				</div>
			)}
			<div>{slicedText()}</div>
		</div>
	);
};

TitleBox.propTypes = {
	icon: element,
	title: string.isRequired,
	className: string,
	onClick: func,
};

export default TitleBox;
