import React, { useEffect } from 'react';
import PageTitle from 'components/Page/PageTitle';
import { ReactComponent as SvgFingerPrint } from 'res/svg/finger-print.svg';
import { Sheet } from 'modal/Sheet';
import { useDispatch, useSelector } from 'react-redux';
import { setSheetState } from 'redux/reducers/modalReducer';

export const SampleSheetBody = () => {
  return (
    <div className={`text-left`} style={{ padding: '0 20px' }}>
      <div
        className={`font-bold text-16 leading-24 text-gray-900 flex items-center`}
        style={{ height: '47px' }}
      >
        로그인 방식을 선택하세요
      </div>
      <div
        className={`font-regular text-14 leading-21 text-gray-900 flex items-center border-b`}
        style={{
          borderColor: '#E9EFF5',
          height: '52px',
          boxSizing: 'border-box',
        }}
      >
        간편번호 로그인
      </div>
      <div
        className={`font-regular text-14 leading-21 text-gray-900 flex items-center border-b`}
        style={{
          borderColor: '#E9EFF5',
          height: '52px',
          boxSizing: 'border-box',
        }}
      >
        이메일아이디 로그인
      </div>
      <div
        className={`font-regular text-14 leading-21 text-gray-900 flex items-center border-b`}
        style={{
          borderColor: '#E9EFF5',
          height: '52px',
          boxSizing: 'border-box',
        }}
      >
        본인인증 로그인
      </div>
    </div>
  );
};

const SampleBioLogin = () => {
  const dispatch = useDispatch();
  const { sheetState } = useSelector((state) => state.modalReducer);
  const showModal = () => {
    dispatch(setSheetState(true));
  };
  useEffect(() => {
    showModal();
  }, []);
  return (
    <>
      <div className={'w-full mt-11 pl-9'}>
        <PageTitle>로그인을 위해</PageTitle>
        <PageTitle>지문을 인식해주세요</PageTitle>
      </div>
      <div className={'w-full mt-48 flex flex-col justify-center items-center'}>
        <div className={'w-full font-regular text-12'}>
          지문인식 센서에 손가락을 올려주세요
        </div>
        <SvgFingerPrint className={'mt-2'} />
        <div
          className={'w-full mt-6 font-regular text-12'}
          onClick={() => {
            showModal();
          }}
        >
          로그인 방법 변경
        </div>
      </div>
      {sheetState && (
        <Sheet>
          <SampleSheetBody />
        </Sheet>
      )}
    </>
  );
};

export default SampleBioLogin;
