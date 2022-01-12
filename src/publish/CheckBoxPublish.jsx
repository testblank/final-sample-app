import React from 'react';
import Style from './CheckBoxPublish.module.css';

const CheckBoxPublish = ({
  id,
  value,
  onChange,
  checked = [],
  disabled,
  rounded,
}) => {
  return (
    <div
      className={'flex items-center mb-4 mr-4'}
      style={{ justifyContent: 'space-between' }}
    >
      <div className={'flex items-center w-full'} style={{}}>
        <label className={Style.container}>
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
        </label>
        <div className={'ml-2 w-full text-left'}>{value}</div>
      </div>
    </div>
  );
};

export default CheckBoxPublish;
