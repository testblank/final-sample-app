import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const ButtonPublish = ({
  text,
  width,
  height,
  fontSize,
  fontColor,
  className,
  onClick,
  disabled = false,
}) => {
  const refFlexDirection = useRef('row');

  const cbOnClick = () => {
    onClick && onClick();
  };

  return (
    <div
      onClick={cbOnClick}
      className={`shadow px-2 py-2 rounded-lg flex justify-center items-center ${className}`}
      style={{
        width: `${width}`,
        height: `${height}`,
        fontSize: `${fontSize}`,
        color: `${fontColor}`,
        flexDirection: refFlexDirection.current,
        background: disabled ? 'gray' : '',
      }}
    >
      {text.length > 0 && text}
    </div>
  );
};

ButtonPublish.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export default ButtonPublish;
