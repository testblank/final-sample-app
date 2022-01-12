import React from 'react';
import Style from './CheckBoxPublish.module.css';

const CheckBoxPublish = ({
  id,
  value,
  subValue,
  subList,
  onChange,
  checked,
  disabled = false,
  rounded,
  className,
}) => {
  return (
    <div
      className={'flex items-center mb-4'}
      style={{ justifyContent: 'space-between' }}
    >
      <label className={`flex items-center w-full ${className}`}>
        <div className={Style.container}>
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
        </div>
        <div className={'ml-2 w-full text-left'}>{value}</div>
      </label>
    </div>
  );
};

export default CheckBoxPublish;
