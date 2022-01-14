import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { useModal } from '@modules/hooks';
import Sheet from './Sheet';

const SheetPortal = ({ children = <Sheet /> }) => {
	const { sheetState } = useModal().modalState;

	const el = document.getElementById('sheet-root');
	const comp = React.cloneElement(children);

	// if (!el) {
	// 	const newNode = document.createElement('div');

	// 	newNode.setAttribute('id', 'sheet-root');
	// 	const rootNode = document.querySelector('#root');

	// 	rootNode.after(newNode);
	// }

	if (!sheetState) {
		return null;
	}

	return ReactDOM.createPortal(comp, el);
};

SheetPortal.propTypes = {
	children: PropTypes.element,
};

export default SheetPortal;
