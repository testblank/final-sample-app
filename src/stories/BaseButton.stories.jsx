import BaseButton2 from 'components/Button/BaseButton2';

export default {
  title: 'Component/Button2',
  component: BaseButton2,
};

const Template = (args) => {
  return <BaseButton2 {...args} />;
};

export const Button = Template.bind({});
Button.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'large',
};

export const PrimaryContainedLarge = Template.bind({});
PrimaryContainedLarge.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'large',
};

export const PrimaryOutlineLarge = Template.bind({});
PrimaryOutlineLarge.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'primary',
  variant: 'outline',
  size: 'large',
};

export const PrimaryContainedSmall = Template.bind({});
PrimaryContainedSmall.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'small',
};

export const PrimaryOutlineSmall = Template.bind({});
PrimaryOutlineSmall.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'primary',
  variant: 'outline',
  size: 'small',
};

export const GrayContainedLarge = Template.bind({});
GrayContainedLarge.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'gray',
  variant: 'contained',
  size: 'large',
};

export const GrayOutlineLarge = Template.bind({});
GrayOutlineLarge.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'gray',
  variant: 'outline',
  size: 'large',
};

export const grayContainedSmall = Template.bind({});
grayContainedSmall.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'gray',
  variant: 'contained',
  size: 'small',
};

export const GrayOutlineSmall = Template.bind({});
GrayOutlineSmall.args = {
  text: 'Text',
  onClick: () => {},
  disabled: false,
  color: 'gray',
  variant: 'outline',
  size: 'small',
};
