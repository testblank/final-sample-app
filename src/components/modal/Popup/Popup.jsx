import React, { useEffect, useRef } from 'react';
import { PopupPublish } from 'publish';
import { useDispatch } from 'react-redux';
import { setPopupState } from 'redux/reducers/modalReducer';

const Popup = ({
  dim,
  titleStr,
  messageStr,
  firstBtnStr,
  secondBtnStr,
  btnQuantity = 2,
  onClick,
  onClickCancel,
}) => {
  const dispatch = useDispatch();
  const refTimeout = useRef();

  useEffect(() => {
    return () => {
      refTimeout.current && clearTimeout(refTimeout.current);
    };
  }, []);

  const handleOnClick = () => {
    refTimeout.current = setTimeout(() => {
      dispatch(setPopupState(false));
    }, 200);

    onClick && onClick();
  };

  const handleOnClickCancel = () => {
    refTimeout.current = setTimeout(() => {
      dispatch(setPopupState(false));
    }, 200);

    onClickCancel && onClickCancel();
  };

  return (
    <PopupPublish
      dim={dim}
      titleStr={titleStr}
      messageStr={messageStr}
      firstBtnStr={firstBtnStr}
      secondBtnStr={secondBtnStr}
      btnQuantity={btnQuantity}
      onClick={handleOnClick}
      onClickCancel={handleOnClickCancel}
    />
  );
};

export default Popup;
