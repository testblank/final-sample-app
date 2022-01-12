import { useState } from 'react';
import PropTypes from 'prop-types';

import { PrimaryInputPublish } from 'publish';
import { svgEye, svgEyeClosed } from 'res/svg';
import Styles from './SecretInput.module.css';

const SecretInput = (props) => {
  const [type, setType] = useState('password');

  const cbOnClickShowText = () => {
    type === 'password' ? setType('text') : setType('password');
  };

  return (
    <PrimaryInputPublish {...props} type={type}>
      <div
        onClick={cbOnClickShowText}
        className={`flex justify-center items-center ml-4`}
      >
        {type === 'text'
          ? svgEye(24, 24, Styles.svgEye)
          : svgEyeClosed(24, 24, Styles.svgEye)}
      </div>
    </PrimaryInputPublish>
  );
};

SecretInput.propTypes = {
  name: PropTypes.oneOf([
    'primary',
    'email',
    'function',
    'measure',
    'secret',
    'secretNumber',
  ]).isRequired,
  type: PropTypes.string,
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
};

export default SecretInput;
