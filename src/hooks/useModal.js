import { modalActions } from '@redux/modal/modalSlice';
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

	const openModal = (modalType, data) => {
		switch (modalType) {
			case MODAL_TYPE.popup:
				dispatch(modalActions.popup, data);
				break;
			case MODAL_TYPE.sheet:
				dispatch(modalActions.sheet, data);
				break;
			case MODAL_TYPE.drawer:
				dispatch(modalActions.drawer, data);
				break;
			default:
				break;
		}
	};


	return [modalState, openModal];
};

export default useModal;
