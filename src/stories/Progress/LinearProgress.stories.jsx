import React from 'react';

import LinearProgress from '@components/progress/LinearProgress';

export default {
	title: 'Component/Progress/LinearProgress',
	component: LinearProgress,
	argTypes: {
		value: {
			description: '0~100 사이의 값으로 표현할 수 있습니다.',
			control: {
				type: 'range',
				min: 0,
				max: 100,
			},
			table: {
				type: {
					summary: 'number',
				},
			},
		},
	},
};

const Template = args => <LinearProgress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	type: 'primary',
	value: 10,
};

export const Secondary = Template.bind({});
Secondary.args = {
	type: 'secondary',
	value: 30,
};

export const Success = Template.bind({});
Success.args = {
	type: 'success',
	value: 75,
};
