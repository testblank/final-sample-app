import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryInputPublish } from 'publish';

const BaseInput = (props) => {
  return <PrimaryInputPublish {...props} />;
};

BaseInput.propTypes = {
  name: PropTypes.oneOf([
    'primary',
    'email',
    'function',
    'measure',
    'secret',
    'secretNumber',
  ]).isRequired,
  labelText: PropTypes.string,
  subLabelText: PropTypes.string,
  caption: PropTypes.bool,
  captionText: PropTypes.string,
  placeholder: PropTypes.string,
  measureUnit: PropTypes.string,
  autoFocus: PropTypes.bool,
  resetBtn: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.element,
};

export default BaseInput;
