import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Sheet } from '.';

const SheetWrapper = ({ children = <Sheet /> }) => {
  const { sheetState } = useSelector((state) => state.modalReducer);
  const el = document.getElementById('sheet-root');
  const comp = React.cloneElement(children);

  if (!el) {
    const newNode = document.createElement('div');
    newNode.setAttribute('id', 'sheet-root');
    const rootNode = document.querySelector('#root');
    rootNode.after(newNode);
  }

  if (!sheetState) {
    return null;
  }

  return ReactDOM.createPortal(comp, el);
};

export default SheetWrapper;
