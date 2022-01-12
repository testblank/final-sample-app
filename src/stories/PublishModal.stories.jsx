import { SampleModal } from 'pages';
import 'style/index.css';

export default {
	title: 'Modal/SampleModals',
	component: SampleModal,
};

const Template = args => <SampleModal {...args} />;

export const BasePopup = Template.bind({});

BasePopup.args = {
	dim: true,
	titleStr: '타이틀 영역입니다.',
	messageStr: `컨텐츠 영역입니다.\n 해당공간에 원하시는 정보를 입력하여 컨텐츠 작성을 완료해주세요.`,
	firstBtnStr: 'cancel',
	secondBtnStr: 'confirm',
	btnQuantity: 2,
	onClick: () => console.log('confirm'),
	onClickCancel: () => console.log('cancel'),
	type: 'popup',
};

export const BaseSheet = Template.bind({});

BaseSheet.args = {
	onOpen: () => console.log('open sheet'),
	onClose: () => console.log('close sheet'),
	type: 'sheet',
};

export const BaseDrawer = Template.bind({});

BaseDrawer.args = {
	onOpen: () => console.log('open drawer'),
	onClose: () => console.log('close drawer'),
	type: 'drawer',
};
