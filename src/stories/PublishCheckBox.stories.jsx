import React from 'react';

import { CheckBox } from '@components/CheckBox2';
import { useCheckTree } from '@hooks';
import 'styles/index.css';

export default {
	title: 'Component/CheckBox',
	component: CheckBox,
};

const Template = args => {
	const [checked, onChange] = useCheckTree(args.list);

	return <CheckBox {...args} checked={checked} onChange={onChange} />;
};

export const BaseCheckBox = Template.bind({});

BaseCheckBox.args = {
	list: [
		{
			id: 0,
			value: 'apple',
			checked: true,
		}, {
			id: 1,
			value: 'grape',
			checked: false,
		}, {
			id: 2,
			value: 'orange',
			checked: false,
		},
	],
};
