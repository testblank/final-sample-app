import { useTextInput } from 'customHooks';
import { bool, element, func, number, oneOf, string } from 'prop-types';
import PrimaryInputPublish from 'publish/PrimaryInputPublish2';

const MeasureInput = (props) => {
  const { measureUnit } = props;
  const [value, onChange] = useTextInput();

  return (
    <PrimaryInputPublish {...props} value={value} onChange={onChange}>
      <div className={`text-base ml-2 flex items-center`}>{measureUnit}</div>
    </PrimaryInputPublish>
  );
};

MeasureInput.propTypes = {
  measureUnit: string,
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

export default MeasureInput;
