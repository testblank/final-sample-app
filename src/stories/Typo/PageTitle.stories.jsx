import React from 'react';

import PageTitle from '@components/Page/PageTitle';

export default {
	title: 'Component/Typo/PageTitle',
	component: PageTitle,
};

const Template = args => <PageTitle>{args.text}</PageTitle>;

export const Single = Template.bind({});
Single.args = {
	text: '한 줄 테스트',
};

const Template2 = args => (
	<>
		<PageTitle>{args.text1}</PageTitle>
		<PageTitle>{args.text2}</PageTitle>
	</>
);

export const More = Template2.bind({});
More.args = {
	text1: '한 줄 테스트',
	text2: '두 줄 테스트',
};
