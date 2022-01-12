import React from 'react';
import {
  string,
  arrayOf,
  shape,
  number,
  oneOf,
  oneOfType,
  element,
  bool,
  object,
} from 'prop-types';
import { BaseCardPublish } from 'publish/Card';
import { CardModuleThumb } from './Module';

const CardTypeOne = ({
  bgClear,
  thumbObjList,
  imgWidth,
  imgBgColor,
  fontSize,
  fontColor,
  fontFamily,
  lineHeight,
  style,
  className,
  backgroundColor,
}) => {
  return (
    <BaseCardPublish
      bgClear={bgClear}
      style={{
        padding: '17px 28px 18px',
        ...style,
      }}
      className={className}
      backgroundColor={backgroundColor}
    >
      <div className={`thumbWrap w-full h-full overflow-x-scroll`}>
        <div className={'flex justify-between'}>
          {thumbObjList &&
            thumbObjList.length > 0 &&
            thumbObjList.map((item, idx) => {
              return (
                <CardModuleThumb
                  key={`${item.src}_${idx}`}
                  src={item.src}
                  title={item.title}
                  imgWidth={imgWidth}
                  imgBgColor={imgBgColor}
                  fontSize={fontSize}
                  fontColor={fontColor}
                  fontFamily={fontFamily}
                  lineHeight={lineHeight}
                  style={
                    thumbObjList.length - 1 !== idx
                      ? { marginRight: '16px' }
                      : {}
                  }
                />
              );
            })}
        </div>
      </div>
    </BaseCardPublish>
  );
};

CardTypeOne.propTypes = {
  bgClear: bool,
  thumbObjList: arrayOf(
    shape({
      src: oneOfType([element, string]),
      title: oneOfType([element, string]),
    }),
  ),
  imgWidth: number,
  imgBgColor: string,
  fontSize: number,
  fontColor: string,
  fontFamily: oneOf(['bold', 'medium', 'regular']),
  lineHeight: number,
  style: object,
  className: string,
  backgroundColor: string,
};

export default CardTypeOne;
