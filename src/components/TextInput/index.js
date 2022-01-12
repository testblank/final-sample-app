import BaseInput from './BaseInput';
import MeasureInput from './MeasureInput';
import SecretInput from './SecretInput';
import FunctionInput from './FunctionInput';
import EmailInput from './EmailInput';
import SecretNumberInput from './SecretNumberInput';

const InputType = {
  primary: 'primary',
  measure: 'measure',
  secret: 'secret',
  function: 'function',
  email: 'email',
  secretNumber: 'secretNumber',
}
Object.freeze(InputType);

export {
  // InputType,
  BaseInput,
  MeasureInput,
  SecretInput,
  FunctionInput,
  EmailInput,
  SecretNumberInput
};