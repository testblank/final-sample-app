import PropTypes from 'prop-types';

import { ButtonPublish, PrimaryInputPublish } from 'publish';

const FuntionInput = (props) => {
  const handleOnClick = () => {};

  return (
    <PrimaryInputPublish {...props}>
      <ButtonPublish text={'function'} onClick={handleOnClick} />
    </PrimaryInputPublish>
  );
};

FuntionInput.propTypes = {
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
};

export default FuntionInput;
