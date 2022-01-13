import React, { useEffect, useRef, useLayoutEffect } from 'react';

// import { DrawerWrapper } from 'modal/Drawer';
// import { PopupWrapper } from 'modal/Popup';
// import { SheetWrapper } from 'modal/Sheet';
// import { useDispatch, useSelector } from 'react-redux';

const usePageLayout = () => {
	const refWrap = useRef(null);
	// const refBackground = useRef(null);
	const refDrawer = useRef(null);
	const refPopup = useRef(null);
	const refSheet = useRef(null);
	const refHeader = useRef(null);
	const refBody = useRef(null);
	const refTimeout = useRef(null);

	// const dispatch = useDispatch();
	// const { popupState, sheetState, drawerState } = useSelector(
	// 	state => state.modalReducer,
	// );

	useEffect(() => () => {
		refTimeout.current && clearTimeout(refTimeout.current);
	}, []);

	useLayoutEffect(() => {
		const headerHeight =
			refHeader.current && refHeader.current.getBoundingClientRect().height;

		if (refBody && refBody.current) {
			refBody.current.style.paddingTop = `${headerHeight}px`;
			refBody.current.style.paddingBottom = `${80}px`;
		}
	}, []);

	// useEffect(() => {
	// 	if (refBody && refBody.current) {
	// 		if (popupState || sheetState || drawerState) {
	// 			refBody.current.style.overflowY = 'hidden';
	// 		} else {
	// 			refBody.current.style.overflowY = 'scroll';
	// 		}
	// 	}
	// }, [popupState, sheetState, drawerState]);

	// const backgroundRender = (background) => {
	//   return background;
	// };

	// const drawerRender = drawer => <DrawerWrapper>{drawer}</DrawerWrapper>;

	// const popupRender = popup => <PopupWrapper>{popup}</PopupWrapper>;

	// const sheetRender = sheet => <SheetWrapper>{sheet}</SheetWrapper>;

	const headerRender = header => header;

	const bodyRender = body => body;

	// const showHeader = useCallback(() => {
	//   if (refHeader && refHeader.current) {
	//     refHeader.current.style.transform = `translateY(0px)`;
	//   }
	// }, []);

	// const hideHeader = useCallback(() => {
	//   if (refHeader && refHeader.current) {
	//     const height = refHeader.current.getBoundingClientRect().height;
	//     refHeader.current.style.transform = `translateY(-${height}px)`;
	//   }
	// }, []);

	// const openPopup = () => {
	// 	dispatch(setPopupState(true));
	// };

	// const closePopup = () => {
	// 	refTimeout.current = setTimeout(() => {
	// 		dispatch(setPopupState(false));
	// 	}, 200);
	// };

	// const openSheet = () => {
	// 	dispatch(setSheetState(true));
	// };

	// const closeSheet = () => {
	// 	refTimeout.current = setTimeout(() => {
	// 		dispatch(setSheetState(false));
	// 	}, 200);
	// };

	// const openDrawer = () => {
	// 	dispatch(setDrawerState(true));
	// };

	// const closeDrawer = () => {
	// 	refTimeout.current = setTimeout(() => {
	// 		dispatch(setDrawerState(false));
	// 	}, 200);
	// };

	const classNames = {
		wrap: 'wrap m-0 p-0 w-full overscroll-y-contain',
		background: 'background absolute top-0 z-1 overflow-y-hidden w-full',
		drawer: 'sheet z-6 fixed top-0 left-0',
		popup: 'popup z-5 fixed top-0 left-0',
		sheet: 'sheet z-4 fixed top-0 left-0',
		header: 'header fixed z-3 w-full overscroll-y-contain transition-all',
		body:
			'body relative z-2 w-full overflow-y-scroll overflow-x-hidden overscroll-y-contain h-screen',
	};

	const renderPage = ({ header, body, popup, sheet, drawer }) => (
		<div ref={refWrap} className={classNames.wrap}>
			{/* <div ref={refBackground} className={classNames.background}>
          {background && backgroundRender(background)}
        </div> */}
			<div ref={refHeader} className={classNames.header}>
				{header && headerRender(header)}
			</div>
			<div
				ref={refBody}
				className={classNames.body}
				style={{
					minHeight: '-webkit-fill-available',
					// scrollBehavior: isIos ? 'smooth' : 'unset',
					WebkitOverflowScrolling: 'touch',
					willChange: 'scroll-position',
				}}
			>
				{body && bodyRender(body)}
			</div>
			<div id={'drawer-root'} ref={refDrawer} className={classNames.drawer}>
				{/* {drawerRender(drawer)} */}
				{/* {drawer && drawerRender(drawer)} */}
			</div>
			<div id={'popup-root'} ref={refPopup} className={classNames.popup}>
				{/* {popupRender(popup)} */}
				{/* {popup && popupRender(popup)} */}
			</div>
			<div id={'sheet-root'} ref={refSheet} className={classNames.sheet}>
				{/* {sheetRender(sheet)} */}
				{/* {sheet && sheetRender(sheet)} */}
			</div>
		</div>
	);

	return {
		// showHeader,
		// hideHeader,
		renderPage,
		// openPopup,
		// closePopup,
		// openSheet,
		// closeSheet,
		// openDrawer,
		// closeDrawer,
	};
};

export default usePageLayout;
