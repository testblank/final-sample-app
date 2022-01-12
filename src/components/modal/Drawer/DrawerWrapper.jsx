import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Drawer } from '.';

const DrawerWrapper = ({ children = <Drawer /> }) => {
  const { drawerState } = useSelector((state) => state.modalReducer);
  const el = document.getElementById('drawer-root');
  const comp = React.cloneElement(children);

  if (!el) {
    const newNode = document.createElement('div');
    newNode.setAttribute('id', 'drawer-root');
    const rootNode = document.querySelector('#root');
    rootNode.after(newNode);
  }

  if (!drawerState) {
    return null;
  }

  return ReactDOM.createPortal(comp, el);
};

export default DrawerWrapper;
