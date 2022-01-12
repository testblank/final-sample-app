import React from 'react';
import { useEffect, useState } from 'react';

import { BaseImage } from 'components/Image';
import PropTypes from 'prop-types';

const ImageButtonPublish = (props) => {
  const {
    text,
    width,
    height,
    fontSize,
    fontColor,
    style,
    imageUrl,
    textPosition,
    className,
    onClick,
  } = props;

  const [flexDirection, setFlexDirection] = useState('column');

  useEffect(() => {
    switch (textPosition) {
      case 'left':
        setFlexDirection('row-reverse');
        break;
      case 'top':
        setFlexDirection('column-reverse');
        break;
      case 'right':
        setFlexDirection('row');
        break;
      case 'bottom':
        setFlexDirection('column');
        break;
      default:
        setFlexDirection('column');
        break;
    }
  }, [textPosition]);

  const cbOnClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={'flex max-w-xs border border-black rounded'}
      style={{ flexDirection }}
    >
      <div
        onClick={cbOnClick}
        className={`px-5 py-2 flex justify-center items-center ${className}`}
        style={{
          width,
          height,
          ...style,
        }}
      >
        <BaseImage src={imageUrl} width={'3rem'} height={'3rem'} />
      </div>
      {text.length > 0 && (
        <div
          className={'flex justify-center items-center'}
          style={{
            fontSize,
            fontColor,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

ImageButtonPublish.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  style: PropTypes.object,
  imageUlr: PropTypes.string,
  disabled: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ImageButtonPublish.defaultProps = {
  text: 'button',
  textPosition: 'right',
  className: '',
  onClick: null,
};

export default ImageButtonPublish;
