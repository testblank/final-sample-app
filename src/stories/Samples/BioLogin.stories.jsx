import React from 'react';

import SampleBioLogin from 'sample-pages/SampleBioLogin';

export default {
	title: 'Page/SamplePagesCheck',
	component: SampleBioLogin,
	parameters: {
		viewport: {
			// 👇 Your own default viewport
			defaultViewport: 'iphone12',
		},
	},
};

const Template = args => <SampleBioLogin {...args} />;

export const SampleBioLoginPage = Template.bind({});
