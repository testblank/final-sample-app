import { TitleBox } from 'components/TitleBox';
import { svgIconData } from 'res/svg';
import 'style/index.css';

export default {
  title: 'Component/TitleBox',
  component: TitleBox,
};

const Template = (args) => <TitleBox {...args} />;

export const BaseTitleBox = Template.bind({});

BaseTitleBox.args = {
  svgElemnt: svgIconData(30, 30),
  titleString: '최대 15자 Sample Title',
  className: 'font-medium text-20 text-gray-500',
  onClick: null,
};
