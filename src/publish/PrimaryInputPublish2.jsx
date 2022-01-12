import {
  useRef,
  useEffect,
  useState,
  // useLayoutEffect,
  forwardRef,
} from 'react';
import { bool, element, func, number, oneOf, string } from 'prop-types';

import { svgClose } from 'res/svg';
import { ReactComponent as SvgEye2 } from 'res/svg/eye2.svg';
import Styles from './PrimaryInputPublish.module.css';

const PrimaryInputPublish = (props) => {
  const {
    value = '',
    name = '', //  primary, email, function, measure, secret, secretNumber,
    labelText = '',
    captionText = '',
    captionClassName = '',
    placeholder = '',
    autoFocus = false,
    resetBtn = false,
    showHideBtn = false,
    isReadOnly = false,
    isDisabled = false,
    isRequired = false,
    onChange = null,
    onBlur = null,
    onClick = null,
    onFocus = null,
    onSubmit = null,
    onClickReset = null,
    onKeyDown = null,
    maxLength,
    children = null,
  } = props;

  const [type, setType] = useState('text');
  // const refCloseBtn = useRef(null);
  const ref = useRef(null);
  const [inputMode, setInputMode] = useState('text');
  // const [closeBtnWidth, setCloseBtnWidth] = useState(type);

  // useLayoutEffect(() => {
  //   if (refCloseBtn && refCloseBtn.current) {
  //     const width = refCloseBtn.current.getBoundingClientRect().width;
  //     setCloseBtnWidth(width);
  //   }
  // }, [setCloseBtnWidth]);

  useEffect(() => {
    autoFocus && ref && ref.current && ref.current.focus();
  }, [autoFocus, ref]);

  useEffect(() => {
    switch (name) {
      case 'primary':
        setInputMode('text');
        break;
      case 'measure':
        setInputMode('numeric');
        break;
      case 'secret':
        setInputMode('text');
        setType('password');
        break;
      case 'function':
        setInputMode('text');
        break;
      case 'email':
        setInputMode('email');
        break;
      case 'secretNumber':
        setInputMode('numeric');
        break;
      default:
        setInputMode('text');
        setType('text');
        break;
    }
  }, [name]);

  const cbOnChange = (e) => {
    onChange && onChange(e);
  };

  const cbOnKeyDown = (e) => {
    onKeyDown && onKeyDown(e);
  };

  const cbOnClick = () => {
    onClick && onClick();
  };

  const cbOnFocus = () => {
    onFocus && onFocus();
  };

  const cbOnBlur = () => {
    onBlur && onBlur();
  };

  const cbOnSubmit = () => {
    onSubmit && onSubmit();
  };

  const cbOnClickReset = () => {
    onClickReset && onClickReset();
    ref && ref.current && ref.current.focus();
  };

  const cbOnClickShowText = () => {
    type === 'password' ? setType('text') : setType('password');
  };

  return (
    <div className={`flex items-start flex-col w-full`}>
      <div className={`flex items-end w-full`}>
        {labelText.length > 0 && (
          <div className={`text-gray-900 text-xs mb-1`}>{labelText}</div>
        )}
      </div>
      <div className={`relative w-full flex-1 flex justify-start`}>
        <input
          ref={ref}
          value={value}
          type={type}
          name={name}
          inputMode={inputMode}
          placeholder={placeholder}
          onChange={(e) => cbOnChange(e)}
          onClick={cbOnClick}
          onFocus={cbOnFocus}
          onBlur={cbOnBlur}
          readOnly={isReadOnly}
          disabled={isDisabled}
          required={isRequired}
          onSubmit={cbOnSubmit}
          maxLength={maxLength}
          onKeyDown={(e) => cbOnKeyDown(e)}
          autoComplete={'off'}
          className={`border-gray-400 border border-solid rounded-sm w-full box-border p-2 text-sm text-gray-900 h-11 focus:border-gray-900`}
        />
        {resetBtn && (
          <div
            // ref={refCloseBtn}
            onClick={cbOnClickReset}
            className={`absolute right-0 top-2/4 transform-gpu -translate-y-2/4 pr-4`}
          >
            {svgClose(
              20,
              20,
              captionText.length > 0
                ? `${Styles.svgCloseCaption}`
                : `${Styles.svgClose}`,
            )}
          </div>
        )}
        {showHideBtn && (
          <div
            onClick={cbOnClickShowText}
            className={`flex justify-center items-center ml-4 absolute right-0 top-2/4 transform-gpu -translate-y-2/4 pr-4`}
          >
            <SvgEye2 />
          </div>
        )}
        {children}
      </div>
      {(captionText.length > 0 || captionText) && (
        <div className={` w-full mt-1 flex items-end ${captionClassName}`}>
          <div
            className={`flex-1 text-left text-xs text-secondary-500 overflow-hidden whitespace-nowrap overflow-ellipsis break-words`}
          >
            {captionText}
          </div>
        </div>
      )}
    </div>
  );
};

PrimaryInputPublish.propTypes = {
  value: string,
  name: oneOf([
    'primary',
    'email',
    'function',
    'measure',
    'secret',
    'secretNumber',
  ]).isRequired,
  labelText: string,
  captionText: string,
  captionClassName: string,
  placeholder: string,
  autoFocus: bool,
  resetBtn: bool,
  showHideBtn: bool,
  isReadOnly: bool,
  isDisabled: bool,
  isRequired: bool,
  onChange: func,
  onBlur: func,
  onClick: func,
  onFocus: func,
  onSubmit: func,
  onKeyDown: func,
  maxLength: number,
  children: element,
};

export default PrimaryInputPublish;
