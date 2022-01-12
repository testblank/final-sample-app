import React from 'react';
import { bool, element, func, number, oneOf, string } from 'prop-types';

import PrimaryInputPublish from '@publish/PrimaryInputPublish2';
import { useTextInput } from '@hooks';

const BaseInput = (props) => {
  const [value, onChange, onClickReset] = useTextInput();

  return (
    <PrimaryInputPublish
      {...props}
      value={value}
      onChange={onChange}
      onClickReset={onClickReset}
    />
  );
};

BaseInput.propTypes = {
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
  onBlur: func,
  onClick: func,
  onFocus: func,
  onSubmit: func,
  onkeydown: func,
  maxLength: number,
  children: element,
};

export default BaseInput;
