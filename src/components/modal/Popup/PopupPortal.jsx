import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { useModal } from '@modules/hooks';
import Popup from './Popup';

const PopupPortal = ({ children = <Popup /> }) => {
	const { popupState } = useModal().modalState;
	const el = document.getElementById('popup-root');
	const comp = React.cloneElement(children);

	// if (!el) {
	// 	const newNode = document.createElement('div');

	// 	newNode.setAttribute('id', 'popup-root');
	// 	const rootNode = document.querySelector('#root');

	// 	rootNode.after(newNode);
	// }

	if (!popupState) {
		return null;
	}

	return ReactDOM.createPortal(comp, el);
};

PopupPortal.propTypes = {
	children: PropTypes.element,
};

export default PopupPortal;
