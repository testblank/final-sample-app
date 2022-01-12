import { CardModuleThumb } from 'components/Card/Module';
import 'style/index.css';

export default {
	title: 'Component/Card/Module',
	component: CardModuleThumb,
};

const Template = args => <CardModuleThumb {...args} />;

export const CardModuleThumbPublish = Template.bind({});

CardModuleThumbPublish.args = {
	src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
	title: '텍스트',
	imgWidth: 56,
	fontSize: 14,
	fontColor: 'gray',
	fontFamily: 'medium',
	lineHeight: 21,
	className: '',
};
