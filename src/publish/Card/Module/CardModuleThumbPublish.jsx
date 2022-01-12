import React from 'react';
import { element, number, object, oneOf, oneOfType, string } from 'prop-types';
import { BaseImage } from 'components/Image';

const CardModuleThumbPublish = ({
  src,
  title,
  imgWidth,
  imgBgColor,
  fontSize,
  fontColor,
  fontFamily,
  lineHeight,
  className,
  style,
}) => {
  // const styleObj = {
  //   width: `${imgWidth}px`,
  //   flex: `none`,
  // };

  return (
    <div
      className={`CardModuleThumbPublish ${className}`}
      style={{ flex: 'none', ...style }}
    >
      {typeof src !== 'string' ? (
        <div
          className={imgBgColor ? `bg-${imgBgColor}-500` : ``}
          style={{
            borderRadius: '50%',
            width: `${imgWidth}px`,
            height: `${imgWidth}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {src}
        </div>
      ) : (
        <BaseImage
          width={`${imgWidth}px`}
          height={`${imgWidth}px`}
          src={src}
          style={{ borderRadius: '50%' }}
          className={imgBgColor ? `bg-${imgBgColor}-500` : ``}
        />
      )}
      <div
        className={`thumbtitle truncate text-${fontSize} text-${fontColor}-800 font-${fontFamily} leading-${lineHeight}`}
        style={{ marginTop: '8px', textAlign: 'center' }}
      >
        {title}
      </div>
    </div>
  );
};

CardModuleThumbPublish.propTypes = {
  src: oneOfType([element, string]),
  title: oneOfType([element, string]),
  imgWidth: number,
  imgBgColor: string,
  fontSize: number,
  fontColor: string,
  fontFamily: oneOf(['bold', 'medium', 'regular']),
  lineHeight: number,
  className: string,
  style: object,
};

export default CardModuleThumbPublish;
