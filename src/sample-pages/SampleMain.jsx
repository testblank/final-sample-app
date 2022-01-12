import React from 'react';
import { Appbar, usePageLayout } from 'layout';

import {
  svgIcMenu,
  svgIcNoti,
  svgIconData,
  svgIconFinance,
  svgIconHN,
  svgIconKB,
  svgIconLocation,
  svgIconPerson,
  svgIconSH,
  svgIconShare,
} from 'res/svg';
import { TitleBox } from 'components/TitleBox';
import { Thumbnail } from 'components/List/Thumbnail';
import { CardTypeOne, CardTypeThree } from 'components/Card';
import { CardAccordion } from 'components/Accordion';

import Styles from 'style/SvgStyle.module.css';
import { Popup } from 'modal/Popup';
import { Sheet } from 'modal/Sheet';
import { Drawer } from 'modal/Drawer';

const SampleMain = () => {
  const { renderPage, openPopup, openSheet, openDrawer } = usePageLayout();

  const headerRender = () => {
    const rightArea = (
      <div style={{ position: 'absolute', margin: '0 auto', bottom: '-7px' }}>
        <div
          className={`redDot bg-primary-500 absolute`}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            top: '5px',
            right: '4px',
          }}
        />
        {svgIcNoti(36, 36)}
      </div>
    );
    return (
      <Appbar
        rightArea={rightArea}
        leftArea={svgIcMenu(40, 40)}
        cbOnClickLeft={openDrawer}
        cbOnClickRight={openPopup}
      />
    );
  };

  const bodyRender = () => {
    return (
      <div className={`bodyWrap bg-white`} style={{ padding: '8px 0 0' }}>
        <div
          className={`titleArea font-bold text-24 leading-36 w-full flex justify-left text-left`}
          style={{ marginBottom: '36px', padding: '0 16px' }}
        >
          안녕하세요
          <br />
          김엘지님
        </div>
        <div
          className={'title'}
          style={{ marginBottom: '16px', padding: '0 16px' }}
        >
          <TitleBox
            fontSize={20}
            titleString={'내 데이터'}
            svgElemnt={svgIconData(30, 30)}
            fontWeight={500}
            lineHeight={30}
            style
          />
        </div>
        <div style={{ marginBottom: '16px', padding: '0 16px' }}>
          <CardTypeOne
            thumbObjList={thumbObjList}
            imgBgColor={'blue'}
            style={{ padding: '17px 26px 18px' }}
          />
        </div>
        <div style={{ marginBottom: '24px', padding: '0 16px' }}>
          <CardTypeThree
            textStr={
              <div>
                내 데이터로 받을 수 있는
                <br />
                <span className={`font-bold`}>세로운 혜택</span>을 발견하였어요
              </div>
            }
            btnStr={'자세히보기'}
            onClickBtn={() => openSheet()}
          />
        </div>
        <div
          className={'title'}
          style={{ paddingBottom: '16px', padding: '0 16px' }}
        >
          <TitleBox
            fontSize={20}
            titleString={'내 금융'}
            svgElemnt={svgIconData(30, 30)}
            fontWeight={500}
            lineHeight={30}
          />
        </div>
        <div style={{ marginBottom: '24px', padding: '0 16px' }}>
          <CardAccordion
            mainTitle={'은행'}
            mainNum={bankList.length}
            mainDesc={'예적금 계좌 총액'}
            mainBalance={100000000}
            subList={bankList}
          />
        </div>
        <div style={{ marginBottom: '24px', padding: '0 16px' }}>
          <CardAccordion
            mainTitle={'금융투자'}
            mainNum={investmentList.length}
            mainDesc={'예적금 계좌 총액'}
            mainBalance={200000000}
            subList={investmentList}
          />
        </div>
        <div style={{ marginBottom: '16px', padding: '0 16px' }}>
          <CardAccordion
            mainTitle={'카드'}
            mainNum={cardList.length}
            mainDesc={'이번 달 사용한 금액'}
            mainBalance={800000}
            subList={cardList}
          />
        </div>
        <div style={{ marginBottom: '24px', padding: '0 16px' }}>
          <CardTypeThree
            textStr={
              <div>
                다른 <span className={`font-bold`}>금융자산 데이터</span>도
                <br />
                연동해볼까요?
              </div>
            }
            btnStr={'자세히보기'}
          />
        </div>
        <div
          className={'title'}
          style={{ marginBottom: '16px', padding: '0 16px' }}
        >
          <TitleBox
            fontSize={20}
            titleString={'김엘지님을 위한 추천혜택'}
            fontWeight={500}
            lineHeight={30}
          />
        </div>
        <div className={`flex overflow-x-scroll`} style={{ padding: '0 16px' }}>
          {thumbnailList.map((item, idx) => (
            <Thumbnail
              key={`${item.src}_${idx}`}
              src={item.src}
              title={item.title}
              subTitle={item.subTitle}
              desc={item.desc}
              style={
                thumbnailList.length - 1 !== idx ? { marginRight: '16px' } : {}
              }
            />
          ))}
        </div>
      </div>
    );
  };

  return renderPage({
    header: headerRender(),
    body: bodyRender(),
    popup: <Popup />,
    sheet: <Sheet />,
    drawer: <Drawer />,
  });
};

const thumbObjList = [
  {
    src: svgIconPerson(36, 36, Styles.svgFillWhite),
    // src: 'https://dummyimage.com/400x400/41d241/fff.jpg&text=G',
    title: (
      <div>
        <span>프로필 </span>
        <span className={`text-blue-500`}>26</span>
      </div>
    ),
  },
  {
    src: svgIconFinance(36, 36, Styles.svgFillWhite),
    title: (
      <div>
        <span>금융 </span>
        <span className={`text-blue-500`}>4</span>
      </div>
    ),
  },
  {
    src: svgIconShare(36, 36, Styles.svgFillWhite),
    title: (
      <div>
        <span>SNS </span>
        <span className={`text-blue-500`}>1</span>
      </div>
    ),
  },
  {
    src: svgIconLocation(36, 36, Styles.svgFillWhite),
    title: (
      <div>
        <span>위치 </span>
        <span className={`text-blue-500`}>4</span>
      </div>
    ),
  },
];

const bankList = [
  {
    imgSrc: svgIconHN(40, 40),
    bankName: '국민은행',
    balance: 100000000,
  },
  {
    imgSrc: svgIconKB(40, 40),
    bankName: '은행명이 들갑니다',
    balance: 100000000,
  },
];

const investmentList = [
  {
    imgSrc: svgIconKB(40, 40),
    bankName: '은행명이 들갑니다',
    balance: 100000000,
  },
];

const cardList = [
  {
    imgSrc: svgIconHN(40, 40),
    bankName: '국민은행',
    balance: 100000000,
  },
  {
    imgSrc: svgIconSH(40, 40),
    bankName: '은행명이 들갑니다',
    balance: 100000000,
  },
];

const thumbnailList = [
  {
    src: 'https://dummyimage.com/400x400/41d241/fff.jpg&text=G',
    title: 'G마켓',
    subTitle: '30% 할인혜택제공',
    desc: '상세설명이 들어갑니다',
  },
  {
    src: 'https://dummyimage.com/400x400/4997c8/fff.jpg&text=W',
    title: '우리카드',
    subTitle: '10만원 제공',
    desc: '가족정보 제공 시',
  },
  {
    src: 'https://dummyimage.com/400x400/fd8000/fff.jpg&text=H',
    title: '한화생명',
    subTitle: '스타벅스 상품권',
    desc: '관심사 및 일',
  },
  {
    src: 'https://dummyimage.com/400x400/41d241/fff.jpg&text=G',
    title: 'G마켓',
    subTitle: '30% 할인혜택제공',
    desc: '상세설명이 들어갑니다',
  },
  {
    src: 'https://dummyimage.com/400x400/4997c8/fff.jpg&text=W',
    title: '우리카드',
    subTitle: '10만원 제공',
    desc: '가족정보 제공 시',
  },
  {
    src: 'https://dummyimage.com/400x400/fd8000/fff.jpg&text=H',
    title: '한화생명',
    subTitle: '스타벅스 상품권',
    desc: '관심사 및 일',
  },
];

export default SampleMain;
