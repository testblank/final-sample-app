import React from 'react';
import { Appbar, usePageLayout } from 'layout';
import { Switch } from 'components/Switch';
import { ExpandableList } from 'components/ExpandableList';
import { BaseButton } from 'components/Button';

const sampleList = [
  {
    disableAll: true,
    initialIsOn: true,
    className: 'font-bold',
    text: 'Push',
  },
  {
    initialIsOn: true,
    className: 'font-bold',
    text: '이메일',
  },
  {
    initialIsOn: false,
    className: 'font-bold',
    text: 'SMS',
  },
];

const foldList = [
  {
    titleText: '약관 및 정책',
    initialOpen: false,
    innerText: '약관 상세',
  },
  {
    titleText: '개인정보 처리방침',
    initialOpen: false,
    innerText: `본 개인정보처리방침의 목차는 아래와 같습니다.
    관계법령이 요구하는 개인정보처리방침의 필수 사항과 본사 자체적으로 이용자 개인정보 보호에 있어 중요하게 판단하는 내용을 포함하였습니다.`,
  },
  {
    titleText: '오픈소스 라이선스',
    initialOpen: false,
    innerText: '오픈소스 라이선스 상세',
  },
  {
    titleText: '법적공지/정보제공처',
    initialOpen: false,
    innerText: '법적공지/정보제공처 상세',
  },
];

const SampleSettings = ({ list = sampleList }) => {
  const { renderPage } = usePageLayout();

  const onClickButton = () => {
    console.log('onClickNext');
  };

  const headerRender = () => {
    return <Appbar titleArea='설정' />;
  };

  const bodyRender = () => {
    return (
      <div
        className={'flex-col flex-wrap content-between p-4 '}
        style={{
          justifyContent: 'space-between',
          height: '-webkit-fill-available',
        }}
      >
        <div className='flex text-left font-bold text-base pb-1'>
          마케팅정보 수신동의
        </div>
        <div className='flex text-left font-normal text-gray-600 text-sm pb-5'>
          마케팅 정보 알림 동의 시, 티머니 앱에서 제공하는 다양한 정보를 받아볼
          수 있습니다.
        </div>
        <Switch list={sampleList} />
        <div className='flex flex-col py-5'>
          <ExpandableList list={foldList} className='pb-3 pt-3' />
        </div>
        <div
          className={'w-full p-2'}
          style={{
            bottom: 0,
            left: 0,
          }}
        >
          <BaseButton
            text={'Text'}
            fontColor={'white'}
            className={'bg-primary-500'}
            onClick={onClickButton}
          />
        </div>
      </div>
    );
  };

  const render = renderPage({
    header: headerRender(),
    body: bodyRender(),
    background: null,
    modal: null,
  });

  return render;
};

export default SampleSettings;
