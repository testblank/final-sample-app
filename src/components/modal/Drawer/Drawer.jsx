import { Appbar } from 'layout';
import {
	useCallback,
	useEffect,
	useRef,
	useLayoutEffect,
	useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerState } from 'redux/reducers/modalReducer';

const Drawer = ({ onOpen, onClose, children = null }) => {
	const dispatch = useDispatch();
	const { drawerState } = useSelector((state) => state.modalReducer);

	const [ready, setReady] = useState(false);
	const refWrap = useRef(null);
	const refDim = useRef(null);
	const refTimeout = useRef(null);

	const openDrawer = useCallback(() => {
		refWrap.current.style.transform = 'translateX(100vw)';
		refDim.current.style.opacity = 1;
		onOpen && onOpen(true);
	}, [onOpen]);

	const closeDrawer = useCallback(() => {
		refWrap.current.style.transform = 'translateX(0)';
		refDim.current.style.opacity = 0;
		refTimeout.current = setTimeout(() => {
			dispatch(setDrawerState(false));
			onClose && onClose(false);
		}, 200);
	}, [onClose, dispatch]);

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
					<Appbar
						titleArea={'Drawer title'}
						cbOnClickLeft={cbOnClickLeft}
					/>
				</div>
				<div style={{ paddingTop: '56px' }}>{children}</div>
			</div>
		</div>
	);
};

export default Drawer;
