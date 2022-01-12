import React from 'react';

import { ExpandableList } from '@components/ExpandableList';
import 'styles/index.css';

export default {
	title: 'Component/ExpandableList',
	component: ExpandableList,
};

const Template = args => <ExpandableList {...args} />;

export const BaseExpandableDivPublish = Template.bind({});

BaseExpandableDivPublish.args = {
	list: [
		{
			titleText: '눌러서 상세보기',
			initialOpen: false,
			innerText: '상세',
		},
	],
	className: 'px-3 pb-3 pt-3',
};

export const BaseExpandableListPublish = Template.bind({});

BaseExpandableListPublish.args = {
	list: [
		{
			titleText: '약관 및 정책',
			initialOpen: false,
			innerText: '약관 상세',
		}, {
			titleText: '개인정보 처리방침',
			initialOpen: true,
			innerText: '개인정보 처리방침 상세',
		}, {
			titleText: '오픈소스 라이선스',
			initialOpen: false,
			innerText: '오픈소스 라이선스 상세',
		}, {
			titleText: '법적공지/정보제공처',
			initialOpen: false,
			innerText: '법적공지/정보제공처 상세',
		}, {
			titleText: '더보기 1',
			initialOpen: false,
			innerText: '상세',
		}, {
			titleText: '더보기2',
			initialOpen: false,
			innerText: '상세',
		},
	],
	className: 'px-3 pb-3 pt-3',

};
