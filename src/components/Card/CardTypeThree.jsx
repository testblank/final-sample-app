import { bool, func, object, oneOfType, string } from 'prop-types';
import { BaseCardPublish } from 'publish/Card';
import React from 'react';

const CardTypeThree = ({
  textStr,
  btnStr,
  onClickBtn,
  bgClear,
  backgroundColor,
  style,
  className,
  // borderTopRight,
  // borderTopLeft,
  // borderBottomRight,
  // borderBottomLeft,
}) => {
  return (
    <BaseCardPublish
      bgClear={bgClear}
      style={style}
      className={className}
      backgroundColor={backgroundColor}
      // borderTopRight={borderTopRight}
      // borderTopLeft={borderTopLeft}
      // borderBottomRight={borderBottomRight}
      // borderBottomLeft={borderBottomLeft}
    >
      <div className={`CardTypeThree flex justify-between`}>
        <div
          className={`flex-1 text-left flex items-center font-medium text-gray-600 text-16 leading-24`}
          style={{ marginLeft: '16px' }}
        >
          {textStr}
        </div>
        <div
          onClick={onClickBtn}
          className={
            'flex-none flex justify-start text-blue-500 bg-white font-bold leading-21'
          }
          style={{
            margin: '19px 16px 24px 0',
            padding: '8px 12px',
            boxSizing: 'border-box',
            borderRadius: '100px',
            border: '1px solid #B3B3B3',
          }}
        >
          {btnStr}
        </div>
      </div>
    </BaseCardPublish>
  );
};

CardTypeThree.propTypes = {
  bgClear: bool,
  textStr: oneOfType([string, object]),
  btnStr: string,
  onClickBtn: func,
  style: object,
  className: string,
  backgroundColor: string,
};

export default CardTypeThree;
