import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import '../style/button.css';

const ButtonPublish2 = ({
  text = '',
  className = '',
  onClick,
  disabled = false,
}) => {
  const refFlexDirection = useRef('row');

  const cbOnClick = () => {
    onClick && onClick();
  };

  return (
    <button
      onClick={cbOnClick}
      className={className}
      style={{
        flexDirection: refFlexDirection.current,
      }}
      disabled={disabled}
    >
      {text.length > 0 && text}
    </button>
  );
};

ButtonPublish2.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export default ButtonPublish2;
