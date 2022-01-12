import React from 'react';

import Backdrop from '@publish/BackdropPublish';

export default {
	title: 'Component/Backdrop',
	component: Backdrop,
};

const Template = args => <Backdrop {...args} />;

export const backDrop = Template.bind({});
backDrop.args = {
	show: false,
	onClick: () => {
		console.log('click!!');
	},
};
