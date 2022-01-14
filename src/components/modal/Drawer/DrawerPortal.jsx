import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { useModal } from '@modules/hooks';
import Drawer from './Drawer';

const DrawerPortal = ({ children = <Drawer /> }) => {
	const { drawerState } = useModal().modalState;

	const el = document.getElementById('drawer-root');
	const comp = React.cloneElement(children);

	// if (!el) {
	// 	const newNode = document.createElement('div');

	// 	newNode.setAttribute('id', 'drawer-root');
	// 	const rootNode = document.querySelector('#root');

	// 	rootNode.after(newNode);
	// }

	if (!drawerState) {
		return null;
	}

	return ReactDOM.createPortal(comp, el);
};

DrawerPortal.propTypes = {
	children: PropTypes.element,
};

export default DrawerPortal;
