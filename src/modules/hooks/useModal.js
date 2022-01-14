import { modalActions } from '@modules/redux/modal/modalSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// export const MODAL_TYPE = {
// 	popup: 'popup',
// 	sheet: 'sheet',
// 	drawer: 'drawer',
// };

// Object.freeze(MODAL_TYPE);

const useModal = () => {
	const modalState = useSelector(state => state.modal);
	const dispatch = useDispatch();

	// const setModalState = (type, state) => {
	// 	switch (type) {
	// 		case MODAL_TYPE.popup:
	// 			dispatch(modalActions.popup(state));
	// 			break;
	// 		case MODAL_TYPE.sheet:
	// 			dispatch(modalActions.sheet(state));
	// 			break;
	// 		case MODAL_TYPE.drawer:
	// 			dispatch(modalActions.drawer(state));
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }

	const handlePopup = useCallback(open => {
		dispatch(modalActions.popup(open));
	}, [dispatch]);

	const handleSheet = useCallback(open => {
		dispatch(modalActions.sheet(open));
	}, [dispatch]);

	const handleDrawer = useCallback(open => {
		dispatch(modalActions.drawer(open));
	}, [dispatch]);

	return { modalState, handlePopup, handleSheet, handleDrawer };
	// return [modalState, setModalState];
};

export default useModal;
