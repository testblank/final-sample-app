import React, {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import { useModal } from '@modules/hooks';

import Styles from './Sheet.module.css';

const Sheet = ({
	onOpen,
	onClose,
	sheetHeight,
	bottomNavArea = false,
	children,
}) => {
	const { modalState, handleSheet } = useModal();
	const { sheetState } = modalState;

	const [ready, setReady] = useState(false);
	const refWrap = useRef(null);
	const refDim = useRef(null);
	const refBody = useRef(null);
	const refChildren = useRef(null);
	const refBodyHeight = useRef(sheetHeight);

	const wSize = useRef({
		innerHeight: window.innerHeight,
		innerWidth: window.innerWidth,
	});
	const refOnCloseTimeout = useRef();

	const fullDistance = useRef(0);
	const [startYPos, setStartYPos] = useState(0);

	const prevTouch = useRef(null);
	const nextTouch = useRef(null);
	const moved = useRef(false);
	const up = useRef(null);

	useLayoutEffect(() => {
		const childrenHeight =
			refChildren.current &&
			refChildren.current.getBoundingClientRect().height + 32;

		const bodyHeight = bottomNavArea ? childrenHeight + 80 : childrenHeight;
		// todo: 80 for bottom nav, 나중에 디자인에 따라 변경

		const maxBodyHeight =
			wSize.current.innerHeight > bodyHeight ?
				bodyHeight :
				wSize.current.innerHeight;

		refBodyHeight.current = maxBodyHeight;

		setReady(true);
	}, [bottomNavArea]);


	const open = useCallback(() => {
		refBody.current.style.transition = 'transform 0.2s linear 0s';

		refDim.current.style.opacity = '1';

		refBody.current.style.transform = `translateY(-${refBodyHeight.current}px)`;
		refBody.current.style.overflowY = 'scroll';

		onOpen && onOpen();
	}, [onOpen]);

	const close = useCallback(() => {
		refBody.current.style.transition = 'transform 0.2s linear 0s';

		refDim.current.style.opacity = '0';
		refBody.current.style.overflowY = 'hidden';
		refBody.current.style.transform = `translateY(${refBodyHeight.current}px)`;

		refOnCloseTimeout.current = setTimeout(() => {
			handleSheet(false);
			onClose && onClose(false);
		}, 200);
	}, [onClose]);

	const swipeMove = yPos => {
		refBody.current.style.removeProperty('transition');
		refBody.current.scroll(0, 0);
		refBody.current.style.overflowY = 'hidden';
		refBody.current.style.transform = `translateY(-${yPos}px)`;
	};

	const onTouchStart = e => {
		e.stopPropagation();
		if (e.touches && e.touches.length) {
			const { clientY } = e.touches[0];

			setStartYPos(clientY);
			prevTouch.current = clientY;
		}
	};

	const onTouchMove = e => {
		e.stopPropagation();
		if (e.changedTouches && e.changedTouches.length) {
			if (refBody.current.scrollTop <= 0) {
				const { clientY } = e.changedTouches[0];

				const yPos = fullDistance.current + (startYPos - clientY);
				const ratio = yPos / fullDistance.current;

				if (yPos >= 0 && yPos <= fullDistance.current) {
					nextTouch.current = prevTouch.current;
					prevTouch.current = clientY;

					up.current = prevTouch.current - nextTouch.current < 0;
					moved.current = true;

					swipeMove(yPos, ratio);
				}
			}
		}
	};

	const onTouchEnd = e => {
		e.stopPropagation();
		e.stopPropagation();
		if (refBody.current.scrollTop <= 0) {
			if (e.changedTouches && e.changedTouches.length) {
				if (moved.current === true) {
					if (up.current) {
						open();
					} else {
						close();
					}
				}
				moved.current = false;
				up.current = null;
			}
		}
	};

	const cbOnClickDim = e => {
		e.preventDefault();
		e.stopPropagation();
		close();
	};

	useEffect(() => {
		if (ready) {
			fullDistance.current = Math.abs(refBodyHeight.current);
			sheetState ? open() : close();
		}
		return () => {
			refOnCloseTimeout.current && clearTimeout(refOnCloseTimeout.current);
		};
	}, [ready, sheetState, open, close]);


	return (
		<div ref={refWrap} className={`fixed w-screen h-screen top-0 left-0`}>
			<div
				ref={refDim}
				className={`${Styles.dim} w-screen h-screen absolute`}
				onClick={cbOnClickDim}
			/>
			<div
				ref={refBody}
				style={{
					top: `${wSize.current.innerHeight}px`,
					height: `${sheetHeight}px`,
					paddingTop: 16,
					paddingBottom: bottomNavArea ? 96 : 16,
				}}
				className={`${Styles.body} absolute bg-white w-full`}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				<div ref={refChildren}>{children && children}</div>
			</div>
		</div>
	);
};

Sheet.propTypes = {
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	sheetHeight: PropTypes.number,
	bottomNavArea: PropTypes.bool,
	children: PropTypes.element,
};

export default Sheet;
