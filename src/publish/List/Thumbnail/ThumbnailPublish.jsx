import React from 'react';
import { number, object, string } from 'prop-types';
import { BaseImage } from 'components/Image';

const ThumbnailPublish = ({
  src,
  title,
  subTitle,
  desc,
  imgWidth,
  fontColor,
  className,
  style,
}) => {
  const styleObj = {
    width: `${imgWidth}px`,
    flex: `none`,
  };
  return (
    <div className={`ThumbnailPublish`} style={Object.assign(styleObj, style)}>
      <BaseImage
        width={`${imgWidth}px`}
        height={`${imgWidth}px`}
        src={src}
        style={{ borderRadius: '16px' }}
      />
      <div style={{ marginTop: '13px', textAlign: 'left' }}>
        <div
          className={`title truncate text-16 text-${fontColor}-900 font-bold leading-24 ${className}`}
        >
          {title}
        </div>
        <div
          className={`subTitle truncate text-14 text-${fontColor}-600 font-medium leading-21 ${className}`}
          style={{ marginTop: '4px' }}
        >
          {subTitle}
        </div>
        <div
          className={`desc truncate text-12 text-${fontColor}-800 font-regular leading-18 ${className}`}
          style={{ marginTop: '4px' }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};

ThumbnailPublish.propTypes = {
  src: string,
  title: string,
  subTitle: string,
  desc: string,
  imgWidth: number,
  fontColor: string,
  className: string,
  style: object,
};

export default ThumbnailPublish;
