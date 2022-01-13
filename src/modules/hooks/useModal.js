import { modalActions } from '@modules/redux/modal/modalSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MODAL_TYPE = {
	popup: 'popup',
	sheet: 'sheet',
	drawer: 'drawer',
};

Object.freeze(MODAL_TYPE);

const useModal = () => {
	const modalState = useSelector(state => state.modal);
	const dispatch = useDispatch();

	const openPopup = useCallback(() => {
		dispatch(modalActions.popup());
	}, [dispatch]);

	const openSheet = useCallback(() => {
		dispatch(modalActions.sheet());
	}, [dispatch]);

	const openDrawer = useCallback(() => {
		dispatch(modalActions.drawer(true));
	}, [dispatch]);

	return { modalState, openPopup, openDrawer, openSheet };
};

export default useModal;
