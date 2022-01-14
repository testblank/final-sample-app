import React, {
	useCallback,
	useEffect,
	useRef,
	useLayoutEffect,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import Appbar from '@components/layouts/Appbar';

import { useModal } from '@modules/hooks';

const Drawer = ({ onOpen, onClose, children = null }) => {
	const { modalState, handleDrawer } = useModal();
	const { drawerState } = modalState;

	const [ready, setReady] = useState(false);
	const refWrap = useRef(null);
	const refDim = useRef(null);
	const refTimeout = useRef(null);

	const openDrawer = useCallback(() => {
		refWrap.current.style.transform = 'translateX(100vw)';
		refDim.current.style.opacity = 1;
		onOpen && onOpen();
	}, [onOpen]);

	const closeDrawer = useCallback(() => {
		refWrap.current.style.transform = 'translateX(0)';
		refDim.current.style.opacity = 0;
		refTimeout.current = setTimeout(() => {
			handleDrawer(false);
			onClose && onClose();
		}, 200);
	}, [onClose]);

	const cbOnClickLeft = () => {
		closeDrawer();
	};

	useLayoutEffect(() => {
		if (refWrap.current && refDim.current) {
			setReady(true);
		}
	}, []);

	useEffect(() => {
		if (ready) {
			drawerState ? openDrawer() : closeDrawer();
		}
		return () => {
			refTimeout.current && clearTimeout(refTimeout.current);
		};
	}, [ready, drawerState, openDrawer, closeDrawer]);

	return (
		<div className={`DrawerWrap absolute top-0 left-0`}>
			<div
				ref={refDim}
				className={'w-screen h-screen absolute'}
				style={{
					top: '0',
					left: '0',
					background: 'rgba(0,0,0,0.4)',
					transition: 'opacity 0.2s linear',
				}}
			/>
			<div
				ref={refWrap}
				className={`DrawerBody w-screen h-screen bg-white`}
				style={{
					overflowY: 'scroll',
					position: 'absolute',
					left: '-100vw',
					transition: 'all 0.2s ease-out',
				}}
			>
				<div className={`fixed w-full`} style={{ flex: 'none' }}>
					<Appbar titleArea={'TITLE STRING AREA'} cbOnClickLeft={cbOnClickLeft} className={'text-primary-300'} />
				</div>
				<div style={{ paddingTop: '56px' }}>{children}</div>
			</div>
		</div>
	);
};

Drawer.propTypes = {
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	children: PropTypes.element,
};

export default Drawer;
