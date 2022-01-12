import {
	SampleJoin,
	// SampleJoin2,
	// SampleTerms,
	// SampleSettings,
	// SampleMain,
} from 'pages';
import 'style/index.css';

export default {
	title: 'Page/SamplePages',
	component: SampleJoin,
};

const Template = args => {
	switch (args.pageName) {
		case 'join':
			return <SampleJoin {...args} />;
		case 'join2':
			return <SampleJoin2 {...args} />;
		case 'terms':
			return <SampleTerms {...args} />;
		case 'settings':
			return <SampleSettings {...args} />;
		case 'main':
			return <SampleMain {...args} />;
		default:
			return <SampleJoin {...args} />;
	}
};

export const SampleJoinPage = Template.bind({});

SampleJoinPage.args = {
	pageName: 'join',
};

export const SampleJoinPage2 = Template.bind({});

SampleJoinPage2.args = {
	pageName: 'join2',
};

export const SampleTermsPage = Template.bind({});

SampleTermsPage.args = {
	pageName: 'terms',
	list: [
		{
			id: 0,
			value: '약관 전체 동의',
			desc: '',
			checkAll: true,
			checked: false,
			required: false,
		}, {
			id: 1,
			value: 'LG 마이데이터 서비스 이용약관 (필수)',
			desc: '',
			checked: true,
			required: true,
		}, {
			id: 2,
			value: '개인 정보 수집/이용 동의 (필수)',
			desc: '',
			checked: false,
			required: true,
		}, {
			id: 3,
			value: '제3자 제공 (필수)',
			desc: '',
			checked: false,
			required: true,
		}, {
			id: 4,
			value: '개인 정보 수집/이용 동의 (선택)',
			desc:
        '서비스 향상과 개인 맞춤 서비스 제공을 위한 정보 수집/이용에 대한 약관입니다.',
			checked: false,
		}, {
			id: 5,
			value: '제3자 제공 (선택)',
			desc:
        '서비스 향상과 개인 맞춤 서비스 제공을 위한 정보 수집/이용에 대한 약관입니다.',
			checked: false,
			subIds: [99, 22],
			subList: [
				{
					id: 99,
					value: '아이디',
					checked: false,
				}, {
					id: 22,
					value: '이메일',
					checked: false,
				},
			],
		}, {
			id: 6,
			value: '마케팅 정보 수신동의 (선택)',
			desc: '마케팅 목적을 위한 정보 수집에 대한 약관입니다.',
			checked: false,
			subIds: [77, 88],
			subList: [
				{
					id: 77,
					value: '이메일',
					checked: false,
				}, {
					id: 88,
					value: 'SMS',
					checked: false,
				},
			],
		},
	],
};

export const SampleSettingsPage = Template.bind({});

SampleSettingsPage.args = {
	pageName: 'settings',
};

export const SampleMainPage = Template.bind({});

SampleMainPage.args = {
	pageName: 'main',
};
