import React from 'react';
import { bool, element, object, string } from 'prop-types';

const BaseCardPublish = ({
  style,
  className,
  backgroundColor = 'gray',
  // borderTopLeft = true,
  // borderTopRight = true,
  // borderBottomRight = true,
  // borderBottomLeft = true,
  bgClear = false,
  children,
}) => {
  const styleObj = {
    // width: '328px',
    width: '100%',
    minHeight: '72px',
    backgroundColor: bgClear ? 'transparent' : '',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    borderBottomRightRadius: '16px',
    borderBottomLeftRadius: '16px',
    // borderTopLeftRadius: borderTopLeft ? '16px' : '0px',
    // borderTopRightRadius: borderTopRight ? '16px' : '0px',
    // borderBottomRightRadius: borderBottomRight ? '16px' : '0px',
    // borderBottomLeftRadius: borderBottomLeft ? '16px' : '0px',
  };

  // bg-${backgroundColor}-50
  return (
    <div
      className={`BaseCardPublish ${
        !bgClear ? `bg-${backgroundColor}-50` : ``
      } ${className ? className : ''}`}
      style={Object.assign(styleObj, style)}
    >
      {children}
    </div>
  );
};

BaseCardPublish.propTypes = {
  style: object,
  className: string,
  backgroundColor: string,
  // borderTopRight: bool,
  // borderTopLeft: bool,
  // borderBottomRight: bool,
  // borderBottomLeft: bool,
  bgClear: bool,
  children: element,
};

export default BaseCardPublish;
