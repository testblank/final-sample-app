import React from 'react';

import { Switch } from '@components/Switch';
import 'styles/index.css';

export default {
	title: 'Component/Switch',
	component: Switch,
};

const Template = args => <Switch {...args} />;

export const NormalSwitchOn = Template.bind({});

NormalSwitchOn.args = {
	list: [
		{
			text: '텍스트를 입력하여 주세요.',
			initialIsOn: true,
			disabled: false,
			className: '',
			onClick: () => {},
		},
	],
};
export const NormalSwitchOff = Template.bind({});

NormalSwitchOff.args = {
	list: [
		{
			text: '텍스트를 입력하여 주세요.',
			initialIsOn: false,
			disabled: false,
			className: '',
			onClick: () => {},
		},
	],
};
export const DisableSwitchOn = Template.bind({});

DisableSwitchOn.args = {
	list: [
		{
			text: '텍스트를 입력하여 주세요.',
			initialIsOn: true,
			disabled: true,
			className: '',
			onClick: () => {},
		},
	],
};
export const DisableSwitchOff = Template.bind({});

DisableSwitchOff.args = {
	list: [
		{
			text: '텍스트를 입력하여 주세요.',
			initialIsOn: false,
			disabled: true,
			className: '',
			onClick: () => {},
		},
	],
};

export const BaseSwitchGroupPublish = Template.bind({});

BaseSwitchGroupPublish.args = {
	list: [
		{
			text: '에어플레인 모드 (disable all)',
			initialIsOn: false,
			disableAll: true,
		}, {
			text: 'Wi-Fi',
			initialIsOn: true,
		}, {
			text: '셀룰러 데이터',
			initialIsOn: false,
		}, {
			text: '알림',
			initialIsOn: true,
		},
	],
};
