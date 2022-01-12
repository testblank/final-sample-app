import { bool, element, func, number, oneOf, string } from 'prop-types';

import { useTextInput } from '@hooks';
import PrimaryInputPublish from '@publish/PrimaryInputPublish2';

const SecretInput = (props) => {
  const [value, onChange] = useTextInput('password');

  return (
    <PrimaryInputPublish
      {...props}
      showHideBtn
      value={value}
      onChange={onChange}
    />
  );
};

SecretInput.propTypes = {
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

export default SecretInput;
