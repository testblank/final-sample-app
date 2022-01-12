import React from 'react';
import { CheckBoxPublish2, CheckBoxWithLinkPublish } from 'publish';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
// import { arrayOf, bool, func, number, shape, string } from 'prop-types';

const CheckBox = ({
  // id,
  list = [],
  // value,
  checked = [],
  onChange,
  withLink,
  rounded,
  className,
}) => {
  let Component = CheckBoxPublish2;

  if (withLink) {
    Component = CheckBoxWithLinkPublish;
  }

  return (
    list &&
    list.length > 0 &&
    list.map((item, idx) => (
      <div
        key={`${item.id}_${idx}`}
        className={item.checkAll ? 'border rounded-xl p-2 mb-4' : 'mb-4'}
      >
        <Component
          id={item.id}
          value={item.value}
          desc={item.desc}
          subList={item.subList}
          checked={checked}
          onChange={onChange}
          disabled={item.disabled}
          className={className}
          rounded={rounded}
        />
      </div>
    ))
  );
  // : (
  //   <Component
  //     id={id}
  //     value={value}
  //     checked={checked}
  //     onChange={onChange}
  //     className={className}
  //     rounded={rounded}
  //   />
  // );
};

CheckBox.propTypes = {
  list: arrayOf(
    shape({
      value: string,
      desc: string,
      checkAll: bool,
      checked: bool,
      required: bool,
      subIds: arrayOf(number),
      subList: arrayOf(
        shape({
          id: number,
          value: string,
          checked: bool,
        }),
      ),
    }),
  ),
  checked: arrayOf(number),
  onChange: func,
  withLink: bool,
  rounded: bool,
  className: string,
};

export default CheckBox;
