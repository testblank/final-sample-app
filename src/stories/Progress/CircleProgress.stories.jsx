import React from 'react';

import CircleProgress from '@components/progress/CircleProgress';

export default {
	title: 'Component/Progress/CircleProgress',
	component: CircleProgress,
};

const Template = args => <CircleProgress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	type: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
	type: 'success',
};
