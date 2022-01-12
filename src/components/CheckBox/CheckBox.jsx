import React from 'react';
import {
  CheckBoxPublish,
  CheckBoxWithLabelPublish,
  CheckBoxWithLinkPublish,
} from 'publish';

const CheckBox = ({
  id,
  list = [],
  value = '',
  checked = [],
  onChange,
  withLabel,
  withLink,
  rounded,
  className,
}) => {
  let Component;

  if (withLabel) {
    Component = CheckBoxWithLabelPublish;
  } else if (withLink) {
    Component = CheckBoxWithLinkPublish;
  } else {
    Component = CheckBoxPublish;
  }

  return list.length > 0 ? (
    list.map((item, idx) => (
      <Component
        key={`${item.id}_${idx}`}
        id={item.id}
        value={item.value}
        subValue={item.subValue}
        subList={item.subList}
        checked={checked}
        checkAll={item.checkAll}
        onChange={onChange}
        disabled={item.disabled}
        className={className}
        rounded={rounded}
      />
    ))
  ) : (
    <Component
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
      className={className}
      rounded={rounded}
    />
  );
};

export default CheckBox;
