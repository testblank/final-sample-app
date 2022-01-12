import { RadioButton } from 'components/RadioButton';
// import { radioList } from 'data/mockup';

import 'style/index.css';

export default {
	title: 'Component/RadioButton',
	component: RadioButton,
};

const Template = args => <RadioButton {...args} />;

export const SelectedRadioButton = Template.bind({});

SelectedRadioButton.args = {
	// list: radioList.data,
	list: [
		{
			id: 0,
			text: '텍스트를 입력하여 주세요.',
			selected: true,
			disabled: false,
		},
	],
};
export const UnselectedRadioButton = Template.bind({});

UnselectedRadioButton.args = {
	list: [
		{
			id: 1,
			text: '텍스트를 입력하여 주세요.',
			selected: false,
			disabled: false,
		},
	],
};
export const DisabledRadioButton = Template.bind({});

DisabledRadioButton.args = {
	list: [
		{
			id: 1,
			text: '텍스트를 입력하여 주세요.',
			selected: false,
			disabled: true,
		},
	],
};
