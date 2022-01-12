import React from 'react';
import { SelectBox } from '@components/SelectBox';
import { useSelect } from '@hooks';

import { emailDomain } from '@data/mockup';
import 'styles/index.css';

export default {
	title: 'Component/SelectBox',
	component: SelectBox,
};

const Template = args => {
	const [selected, onChangeSelect] = useSelect(args.options);

	return (
		<SelectBox {...args} selected={selected} onChangeSelect={onChangeSelect} />
	);
};

export const BaseSelectBox = Template.bind({});

BaseSelectBox.args = {
	options: emailDomain.datas,
	className: null,
};
