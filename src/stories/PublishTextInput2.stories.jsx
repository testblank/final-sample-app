import {
  BaseInput,
  MeasureInput,
  SecretInput,
  FunctionInput,
  EmailInput,
  SecretNumberInput,
} from 'components/TextInput2';
import { emailDomain } from 'data/mockup';

import 'style/index.css';

export default {
  title: 'Component/TextInput2',
  component: BaseInput,
  argTypes: {
    name:
      'primary' ||
      'measure' ||
      'secret' ||
      'function' ||
      'email' ||
      'secretNumber',
  },
};

const Template = (args) => {
  switch (args.name) {
    case 'primary':
      return <BaseInput {...args} />;
    case 'measure':
      return <MeasureInput {...args} />;
    case 'secret':
      return <SecretInput {...args} />;
    case 'function':
      return <FunctionInput {...args} />;
    case 'email':
      return <EmailInput {...args} />;
    case 'secretNumber':
      return <SecretNumberInput {...args} />;
    default:
      return <BaseInput {...args} />;
  }
};

export const BaseInputPublish = Template.bind({});
BaseInputPublish.args = {
  labelText: 'Title',
  subLabelText: 'sub Title',
  name: 'primary',
  placeholder: 'palceholder test',
  autoFocus: false,
  resetBtn: true,
  isReadOnly: false,
  isDisabled: false,
  isRequired: false,
  className: '',
};

export const MeasureInputPublish = Template.bind({});
MeasureInputPublish.args = {
  measureUnit: 'Kg',
  name: 'measure',
  placeholder: 'measure input',
  measureText: 'Kg',
  autoFocus: true,
};

export const SecretInputPublish = Template.bind({});
SecretInputPublish.args = {
  name: 'secret',
  placeholder: 'secret input',
};

export const FunctionInputPublish = Template.bind({});
FunctionInputPublish.args = {
  name: 'function',
  placeholder: 'function input',
};

export const EmailInputPublish = Template.bind({});
EmailInputPublish.args = {
  name: 'email',
  placeholder: 'id',
  domainData: emailDomain.datas,
};

export const SecretNumberInputPublish = Template.bind({});
SecretNumberInputPublish.args = {
  name: 'secretNumber',
};
