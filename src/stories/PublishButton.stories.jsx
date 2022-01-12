import React from 'react';

import { BaseButton, ImageButton } from '@components/Button';
import 'styles/index.css';

export default {
	title: 'Component/Button',
	component: BaseButton,
};

const Template = args => {
	switch (args.type) {
		case 'button':
			return <BaseButton {...args} />;
		case 'image':
			return <ImageButton {...args} />;
		default:
			return <BaseButton {...args} />;
	}
};

export const BaseButtonPublish = Template.bind({});

BaseButtonPublish.args = {
	width: '',
	height: '',
	fontSize: '',
	type: 'button',
	text: 'BaseButton',
	fontColor: 'black',
	className: '',
	onClick: () => {},
	disabled: false,
};

export const ImageButtonPublish = Template.bind({});

ImageButtonPublish.args = {
	type: 'image',
	text: 'ImageButtonDescribe',
	imageUrl: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
	textPosition: 'bottom',
	className: '',
	onClick: () => {},
};
