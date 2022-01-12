import {
  BaseCard,
  CardTypeOne,
  CardTypeThree,
  CardTypeTwo,
  CardTypeFour,
} from 'components/Card';
import { svgIconHN, svgIconKB, svgIconSH } from 'res/svg';
import 'style/index.css';

export default {
  title: 'Component/Card',
  component: BaseCard,
};

const Template = (args) => {
  switch (args.type) {
    case 1:
      return <CardTypeOne {...args} />;
    case 2:
      return <CardTypeTwo {...args} />;
    case 3:
      return <CardTypeThree {...args} />;
    case 4:
      return <CardTypeFour {...args} />;
    default:
      return <BaseCard {...args} />;
  }
};

export const BaseCardPublish = Template.bind({});

BaseCardPublish.args = {
  type: null,
  className: '',
  style: {},
  children: null,
};

export const CardTypeOnePublish = Template.bind({});

CardTypeOnePublish.args = {
  type: 1,
  thumbObjList: [
    {
      src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
      title: '텍스트',
    },
    {
      src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
      title: '텍스트',
    },
    {
      src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
      title: '텍스트',
    },
    {
      src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
      title: '텍스트',
    },
    {
      src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
      title: '텍스트',
    },
    {
      src: 'https://dummyimage.com/400x400/808080/fff.jpg&text=I',
      title: '텍스트',
    },
  ],
};

export const CardTypeTwoPublish = Template.bind({});

CardTypeTwoPublish.args = {
  type: 2,
  imgWidth: 40,
  objList: [
    {
      imgSrc: svgIconKB(40, 40),
      bankName: '은행명이 들갑니다 은행명이 들갑니다',
      balance: 100000000,
    },
    {
      imgSrc: svgIconSH(40, 40),
      bankName: '국민은행',
      balance: 100000000,
    },
    {
      imgSrc: svgIconHN(40, 40),
      bankName: '국민은행',
      balance: 100000000,
    },
  ],
};

export const CardTypeThreePublish = Template.bind({});

CardTypeThreePublish.args = {
  type: 3,
  textStr: '텍스트가 들어갑니다',
  btnStr: 'btn',
};

export const CardTypeFourPublish = Template.bind({});

CardTypeFourPublish.args = {
  type: 4,
  title: '제목',
  num: 1,
  desc: '설명문장이 들어갑니다.',
  balance: 0,
};
