import React from 'react';
import { element, number, object, oneOf, oneOfType, string } from 'prop-types';

import { CardModuleThumbPublish } from '@publish/Card/Module';

const CardModuleThumb = ({
  src = '',
  title = '',
  imgWidth = 56,
  imgBgColor = 'gray',
  fontSize = 14,
  fontColor = 'gray',
  fontFamily = 'medium',
  lineHeight = 21,
  className,
  style,
}) => {
  return (
    <CardModuleThumbPublish
      src={src}
      title={title}
      imgWidth={imgWidth}
      fontSize={fontSize}
      fontColor={fontColor}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      imgBgColor={imgBgColor}
      className={className}
      style={style}
    />
  );
};

CardModuleThumb.propTypes = {
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

export default CardModuleThumb;
