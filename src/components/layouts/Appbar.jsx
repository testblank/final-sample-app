import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ImgBack } from '@icons/icons-back.svg';

const Appbar = ({
	backgroundColor = 'white',
	// type,
	leftArea = <ImgBack />,
	titleArea,
	rightArea,
	rightArea2,
	cbOnClickLeft,
	cbOnClickRight,
	cbOnClickRight2,
	className,
	children,
}) => {
	const onClickLeft = () => {
		cbOnClickLeft && cbOnClickLeft();
	};

	const onClickRight = () => {
		cbOnClickRight && cbOnClickRight();
	};

	const onClickRight2 = () => {
		cbOnClickRight2 && cbOnClickRight2();
	};

	return (
		<div
			className={`flex flex-col w-full ${className}`}
			style={{ backgroundColor: `${backgroundColor}` }}
		>
			<div
				className={'flex justify-between items-center'}
				style={{ height: '56px' }}
			>
				<div
					className={'flex justify-center items-center h-full'}
					style={{ width: '48px' }}
					onClick={onClickLeft}
				>
					{leftArea && leftArea}
				</div>
				<div
					className={
						'flex-1 justify-center overflow-hidden whitespace-nowrap overflow-ellipsis break-words text-lg'
					}
				>
					{titleArea}
				</div>
				{rightArea2 && (
					<div
						className={'flex justify-center items-center h-full'}
						style={{ width: '48px' }}
						onClick={onClickRight2}
					>
						{rightArea2}
					</div>
				)}
				<div
					className={'flex justify-center items-center h-full'}
					style={{ width: '48px' }}
					onClick={onClickRight}
				>
					{rightArea && rightArea}
				</div>
			</div>
			{children}
		</div>
	);
};

Appbar.propTypes = {
	backgroundColor: PropTypes.string,
	// type: PropTypes.oneOf(['page', 'modal', 'none']).isRequired,
	leftArea: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
	titleArea: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
	rightArea: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
	rightArea2: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
	cbOnClickLeft: PropTypes.func,
	cbOnClickRight: PropTypes.func,
	cbOnClickRight2: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.element,
};

export default Appbar;
