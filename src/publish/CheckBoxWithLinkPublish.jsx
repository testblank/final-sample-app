import React from 'react';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';

import { CheckBoxPublish2 } from 'publish';
import { svgIcRight } from 'res/svg';

import Style from './CheckBoxPublish.module.css';

const CheckBoxWithLinkPublish = ({
  id = 0,
  value = '',
  desc = '',
  subList = [],
  onChange,
  onClickLink,
  checked = [],
  disabled = false,
  rounded = false,
  className = '',
}) => {
  const cbOnClickLink = () => {
    onClickLink && onClickLink();
  };

  return (
    <div>
      <div className={'flex items-center mb-1 justify-between'}>
        <div
          className={`${Style.container} flex items-center w-full ${className}`}
        >
          <label className={`flex items-center`}>
            <input
              id={id}
              type={'checkbox'}
              value={value}
              onChange={onChange}
              checked={checked.includes(Number(id))}
              disabled={disabled}
            />
            <span
              className={Style.checkmark}
              style={rounded ? { borderRadius: '50%' } : {}}
            />
            <div className={'flex w-full justify-between'}>
              <div className={'ml-2 w-full text-left'}>{value}</div>
            </div>
          </label>
          <div onClick={cbOnClickLink}>
            {svgIcRight(24, 24, Style.svgFillGray400)}
          </div>
        </div>
      </div>
      <div
        className={'text-left text-gray-400 text-xs'}
        style={{ margin: '0 24px' }}
      >
        <div className={'mb-1'}>{desc}</div>
        <div className={'flex items-center text-base text-black'}>
          {subList &&
            subList.length > 0 &&
            subList.map((item, idx) => {
              return (
                <CheckBoxPublish2
                  key={`${item.id}_${idx}`}
                  id={item.id}
                  value={item.value}
                  checked={checked}
                  onChange={onChange}
                  disabled={item.disabled}
                  rounded={false}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

CheckBoxWithLinkPublish.propsTypes = {
  id: number,
  value: string,
  desc: string,
  subList: arrayOf(
    shape({
      id: number,
      value: string,
      checked: bool,
    }),
  ),
  onChange: func,
  onClickLink: func,
  checked: arrayOf(number),
  disabled: bool,
  rounded: bool,
  className: string,
};

export default CheckBoxWithLinkPublish;
