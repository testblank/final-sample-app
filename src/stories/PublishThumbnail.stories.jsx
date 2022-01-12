import { Thumbnail } from 'components/List/Thumbnail';
import 'style/index.css';

export default {
  title: 'Component/List/Thumbnail',
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const ThumbnailPublish = Template.bind({});

ThumbnailPublish.args = {
  src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
  title: '텍스트',
  subTitle: '서브타이틀',
  desc: '상세설명이 들어갑니다',
  imgWidth: 124,
  fontColor: 'gray',
  className: '',
};
