import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useModal } from '@modules/hooks';
import Styles from './Popup.module.css';

const Popup = ({
	dim = true,
	titleStr = 'Sample Popup Title',
	messageStr = 'Sample Popup Message',
	messageMaxHeight = 84,
	firstBtnStr = 'CANCEL',
	secondBtnStr = 'CONFIRM',
	btnQuantity = 2,
	onClick,
	onClickCancel,
}) => {
	const refWrap = useRef(null);
	const refDim = useRef(null);
	const refPopup = useRef(null);
	const refTimeoutStyle = useRef(null);
	const refTimeoutState = useRef(null);

	const { handlePopup } = useModal();

	const closingStyle = () => {
		refDim && refDim.current && refDim.current.classList.add(Styles.hideDim);
		refPopup.current.classList.add(Styles.hidePopup);

		refTimeoutStyle.current = setTimeout(() => {
			refDim &&
				refDim.current &&
				refDim.current.classList.remove(Styles.hideDim);
			refPopup.current.classList.remove(Styles.hidePopup);
		}, 200);
	};


	const handleOnClick = e => {
		e.preventDefault();
		e.stopPropagation();
		closingStyle();
		refTimeoutState.current = setTimeout(() => {
			handlePopup(false);
		}, 200);

		onClick && onClick();
	};

	const handleOnClickCancel = e => {
		e.preventDefault();
		e.stopPropagation();
		closingStyle();
		if (btnQuantity === 1) {
			onClick && onClick();
			return;
		}
		refTimeoutState.current = setTimeout(() => {
			handlePopup(false);
		}, 200);

		onClickCancel && onClickCancel();
	};

	useEffect(() => () => {
		refTimeoutStyle.current && clearTimeout(refTimeoutStyle.current);
		refTimeoutState.current && clearTimeout(refTimeoutState.current);
	}, []);

	return (
		<div
			ref={refWrap}
			className={`fixed w-screen h-screen flex justify-center items-center top-0 left-0 overflow-hidden`}
		>
			{dim && (
				<div
					ref={refDim}
					className={`${Styles.dim} w-screen h-screen absolute overflow-hidden`}
				/>
			)}
			<div
				ref={refPopup}
				className={`${Styles.popup} relative bg-white flex flex-col shadow`}
				style={{
					width: '266px',
					height: '181px',
					borderRadius: '3px',
					padding: '16px 20px',
					marginBottom: '16px',
					justifyContent: 'space-between',
					touchAction: 'none',
					boxShadow:
						'0px 0px 2px rgba(0, 0, 0, 0.22), 0px 7px 10px rgba(0, 0, 0, 0.12)',
				}}
			>
				{titleStr && titleStr.length > 0 ? (
					<div
						className={
							'title text-left w-full flex font-medium text-15 leading-22 justify-between items-center'
						}
						style={{
							height: '22px',
						}}
					>
						{titleStr}
						{/* {svgIcClose(20, 20, handleOnClick)} */}
					</div>
				) : null}
				<div
					className={
						'w-full flex flex-1 text-left text-14 leading-21 text-gray-600 font-regular'
					}
					style={{
						height: '84px',
						maxHeight: `${messageMaxHeight}px`,
						overflow: 'hidden scroll',
						overscrollBehaviorY: 'contain',
					}}
				>
					<div>
						{messageStr || `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vel
              placeat ea consequuntur tempore praesentium laudantium at accusantium
              qui? Quidem nulla eius quam optio deleniti voluptatem dolorum alias ea
              a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vel
              placeat ea consequuntur tempore praesentium laudantium at accusantium
              qui? Quidem nulla eius quam optio deleniti voluptatem dolorum alias ea
              a?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vel
              placeat ea consequuntur tempore praesentium laudantium at accusantium
              qui? Quidem nulla eius quam optio deleniti voluptatem dolorum alias ea
              a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vel
              placeat ea consequuntur tempore praesentium laudantium at accusantium
              qui? Quidem nulla eius quam optio deleniti voluptatem dolorum alias ea
              a?`}
					</div>
				</div>
				<div className={'flex justify-end w-full leading-20 text-14'}>
					{btnQuantity === 2 ? (
						<>
							<div onClick={handleOnClickCancel} className={'text-gray-900'}>
								{firstBtnStr}
							</div>
							<div
								onClick={handleOnClick}
								className={'text-primary-500'}
								style={{ marginLeft: '16px' }}
							>
								{secondBtnStr}
							</div>
						</>
					) : (
						<div
							onClick={handleOnClick}
							className={'text-primary-500'}
							style={{ marginLeft: '16px' }}
						>
							{secondBtnStr}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

Popup.propTypes = {
	dim: PropTypes.bool,
	titleStr: PropTypes.string,
	messageStr: PropTypes.string,
	messageMaxHeight: PropTypes.number,
	firstBtnStr: PropTypes.string,
	secondBtnStr: PropTypes.string,
	btnQuantity: PropTypes.number,
	onClick: PropTypes.func,
	onClickCancel: PropTypes.func,
};

export default Popup;
