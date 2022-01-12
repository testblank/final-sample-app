import React from 'react';
import { number, object, string } from 'prop-types';

import { ThumbnailPublish } from 'publish/List/Thumbnail';

const Thumbnail = ({
  src = '',
  title = '',
  subTitle = '',
  desc = '',
  imgWidth = 124,
  fontColor = 'gray',
  className,
  style = {},
}) => {
  return (
    <ThumbnailPublish
      src={src}
      title={title}
      subTitle={subTitle}
      desc={desc}
      imgWidth={imgWidth}
      fontColor={fontColor}
      className={className}
      style={style}
    />
  );
};

Thumbnail.propTypes = {
  src: string,
  title: string,
  subTitle: string,
  desc: string,
  imgWidth: number,
  fontColor: string,
  className: string,
  style: object,
};

export default Thumbnail;
