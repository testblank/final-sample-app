import { bool, element, func, number, oneOf, string } from 'prop-types';

import { useTextInput } from '@hooks';
import ButtonPublish from '@publish/ButtonPublish2';
import PrimaryInputPublish from '@publish/PrimaryInputPublish2';

const FuntionInput = (props) => {
  const [value, onChange] = useTextInput();
  const handleOnClick = () => console.log(`value: ${value}`);

  return (
    <PrimaryInputPublish {...props} value={value} onChange={onChange}>
      <ButtonPublish text={'function'} onClick={handleOnClick} />
    </PrimaryInputPublish>
  );
};

FuntionInput.propTypes = {
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

export default FuntionInput;
