import { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const BaseImage = (props) => {
  const [isLoad, setLoad] = useState(false);
  const [loadingWidth, setLoadingWidth] = useState(0);
  const refLoadingWrapper = useRef(null);
  const refLoadingDiv = useRef(null);

  const {
    src,
    alt = '',
    width,
    height,
    delayMs,
    onLoadFinish,
    onError,
    onClick,
    style = {},
    className = '',
    src1x = '',
    src2x = '',
    src3x = '',
    src4x = '',
  } = props;

  useLayoutEffect(() => {
    loadingWidth === 0 && makeLoading();
  });

  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };

  const makeLoading = () => {
    if (refLoadingWrapper.current) {
      const wrapperWidth = refLoadingWrapper.current.clientWidth;
      const wrapperHeight = refLoadingWrapper.current.clientHeight;
      let standardSize =
        wrapperWidth > wrapperHeight ? wrapperWidth : wrapperHeight;
      standardSize = standardSize * (30 / 100);

      let loadingSize = Math.round(standardSize < 64 ? standardSize : 64);

      if (loadingSize < 1) {
        loadingSize = 15;
      }

      setLoadingWidth(loadingSize);
    }
  };

  const onLoadImage = async () => {
    delayMs && (await delay(delayMs));
    onLoadFinish && onLoadFinish();
    setLoad(true);
  };

  const onErrorImage = async () => {
    delayMs && (await delay(delayMs));
    onError && onError();
    onLoadFinish && onLoadFinish();
  };

  return (
    <>
      <img
        srcSet={
          src1x || src2x || src3x || src4x
            ? `${src4x} 4x, ${src3x} 3x, ${src2x} 2x, ${src1x} 1x`
            : null
        }
        src={src}
        alt={alt}
        style={{
          display: isLoad ? 'inline-block' : 'none',
          width,
          height,
          objectFit: 'cover',
          ...style,
        }}
        className={`relative w-full h-full ${className}`}
        onLoad={onLoadImage}
        onError={onErrorImage}
        onClick={onClick}
      />
      {!isLoad && (
        <div
          ref={refLoadingWrapper}
          style={{ width, height, ...style, boxShadow: 'none', opacity: 1 }}
          className={`flex justify-center items-center w-full h-full overflow-hidden ${className}`}
          onClick={onClick}
        >
          <div
            ref={refLoadingDiv}
            className={'animate-spin rounded-full border-2 border-black'}
            style={{
              borderBottomColor: 'white',
              width: `${loadingWidth}px`,
              height: `${loadingWidth}px`,
              borderWidth: `1px`,
            }}
          />
        </div>
      )}
    </>
  );
};

BaseImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  delayMs: PropTypes.number,
  onLoadFinish: PropTypes.func,
  onError: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  src1x: PropTypes.string,
  src2x: PropTypes.string,
  src3x: PropTypes.string,
  src4x: PropTypes.string,
};

export default BaseImage;
