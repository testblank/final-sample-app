import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Popup } from '.';

const PopupWrapper = ({ children = <Popup /> }) => {
  const { popupState } = useSelector((state) => state.modalReducer);
  const el = document.getElementById('popup-root');
  const comp = React.cloneElement(children);

  if (!el) {
    const newNode = document.createElement('div');
    newNode.setAttribute('id', 'popup-root');
    const rootNode = document.querySelector('#root');
    rootNode.after(newNode);
  }

  if (!popupState) {
    return null;
  }

  return ReactDOM.createPortal(comp, el);
};

export default PopupWrapper;
