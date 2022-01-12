import {
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  forwardRef,
} from 'react';

import { svgClose } from 'res/svg';
import Styles from './PrimaryInputPublish.module.css';

const PrimaryInputPublish = (props, ref) => {
  const {
    value = '',
    name = '', // InputType

    type = 'text',
    labelText = '',
    subLabelText = '',
    // caption = false,
    captionClassName = '',
    captionText = '',
    captionWithBorder = false,
    placeholder = '',
    // measureUnit = '',
    autoFocus = false,
    resetBtn = false,
    isReadOnly = false,
    isDisabled = false,
    isRequired = false,
    onBlur = null,
    onChange = null,
    onClick = null,
    onClickReset = null,
    onFocus = null,
    onSubmit = null,
    onKeyDown = null,
    className = '',
    children = null,
    maxLength,
  } = props;

  const refCloseBtn = useRef(null);

  const [inputMode, setInputMode] = useState(type);
  const [closeBtnWidth, setCloseBtnWidth] = useState(type);

  useLayoutEffect(() => {
    if (refCloseBtn && refCloseBtn.current) {
      const width = refCloseBtn.current.getBoundingClientRect().width;
      setCloseBtnWidth(width);
    }
  }, [setCloseBtnWidth]);

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

  const inputClassNames = [
    'Input',
    'border',
    'rounded-lg',
    'border-gray-300',
    'focus:border-blue-300',
    'p-2',
    'w-full',
    `${className ? className : ''}`,
  ].join(' ');

  return (
    <div
      className={`${Styles.PrimaryInputPublish} flex items-start flex-col w-full`}
    >
      <div className={`${Styles.labelWrap} flex items-end w-full ml-2`}>
        {labelText.length > 0 && (
          <div className={`${Styles.labelText} text-primary mr-2`}>
            {labelText}
          </div>
        )}
        {subLabelText.length > 0 && (
          <div
            className={`${Styles.subLabelText} flex-1 text-left text-xs text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis break-words`}
          >
            {subLabelText}
          </div>
        )}
      </div>
      <div
        className={`${Styles.inputWrap} relative w-full flex-1 flex justify-start`}
      >
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
          className={inputClassNames}
          style={{
            borderColor:
              captionText.length > 0 && captionWithBorder ? 'red' : '',
            paddingRight: `${closeBtnWidth + 10}px`,
          }}
        />
        {resetBtn && (
          <div
            ref={refCloseBtn}
            onClick={cbOnClickReset}
            className={`${Styles.btnReset} absolute right-0 top-2/4 transform-gpu -translate-y-2/4 pr-4`}
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
        {children}
      </div>
      {(captionText.length > 0 || captionText) && (
        <div
          className={`${Styles.captionWrap} w-full ml-2 flex items-end ${captionClassName}`}
        >
          <div
            className={`${Styles.captionText} flex-1 text-left text-xs text-red overflow-hidden whitespace-nowrap overflow-ellipsis break-words`}
          >
            {captionText}
          </div>
        </div>
      )}
    </div>
  );
};

export default forwardRef(PrimaryInputPublish);
