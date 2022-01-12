import { DatePicker } from 'components/DatePicker';

export default {
	title: 'Component/DatePicker',
	component: DatePicker,
};

const Template = args => <DatePicker {...args} />;

export const BaseDatePicker = Template.bind({});

BaseDatePicker.args = {
	// today: Date.now(),
};
