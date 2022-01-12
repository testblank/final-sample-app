import { useState, forwardRef, useImperativeHandle } from 'react';
import Style from './Loading.module.css';

const Loading = forwardRef((props, ref) => {
  let enable = true;
  const [loadingView, setLoadingView] = useState(null);

  const show = () => {
    if (enable) {
      setLoadingView(<LoadingView hide={hide} />);
    }
  };

  const hide = () => {
    setLoadingView(null);
  };

  const setEnable = () => {
    enable = true;
  };

  const setDisable = () => {
    enable = false;
  };

  useImperativeHandle(ref, () => ({
    show: () => show(),
    hide: () => hide(),
    setEnable: () => setEnable(),
    setDisable: () => setDisable(),
  }));

  return <div>{loadingView}</div>;
});

const LoadingView = (props) => {
  const { hide } = props;
  return (
    <div style={{ zIndex: 100, position: 'absolute', top: 0 }}>
      <div className={Style.loading}>
        <img
          alt={''}
          className={Style.img}
          src={
            'https://img.pixers.pics/pho_wat(s3:700/FO/32/08/94/81/700_FO32089481_67f6554d831d6f980f91662057c907c2.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-hissing-cat-face.jpg.jpg'
          }
        />
        <div onClick={hide}>hide</div>
      </div>
    </div>
  );
};

export default Loading;
