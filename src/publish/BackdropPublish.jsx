import React from 'react';
import Styles from './BackdropPublish.module.css';

const Backdrop = ({ show = false, onClick = () => {}, children }) => {
  return (
    <div className={`z-10`} onClick={onClick}>
      <div
        className={`${
          show ? Styles.dim : Styles.hideDim
        } fixed inset-0 w-screen h-screen`}
      >
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
