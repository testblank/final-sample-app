import { useState, useEffect } from 'react';
import { usePageLayout, HeaderLayout } from 'layout';
import { useTextInput } from 'customHooks';

import 'style/index.css';

import {
  BaseInput,
  EmailInput,
  MeasureInput,
  SecretInput,
} from 'components/TextInput';
import { BaseButton } from 'components/Button';
import { svgInfoBox } from 'res/svg';
import { checkValidation } from 'util/validation';
// import { useDispatch } from 'react-redux';
import { Popup } from 'modal/Popup';
import { Sheet } from 'modal/Sheet';

const SampleJoin = ({ history, location, match, staticContext }) => {
  // const dispatch = useDispatch();
  const {
    renderPage,
    openPopup,
    closePopup,
    openSheet,
    // closeSheet,
  } = usePageLayout({
    headerArea: true,
  });

  // console.log('isSheetOpen', isSheetOpen);

  const [pwConfirmCaption, setPwConfirmCaption] = useState('');
  const [idConfirm, setIdConfirm] = useState(false);
  const [valueId, onChangeId] = useTextInput('id');
  const [valuePw, onChangePw, captionTextPw] = useTextInput('password');
  const [valuePwConfirm, onChangePwConfirm] = useTextInput();
  const [valueMeasure, onChangeMeasure] = useTextInput('number');

  useEffect(() => {
    if (valuePw.length && valuePwConfirm.length) {
      if (valuePw === valuePwConfirm) {
        setPwConfirmCaption('비밀번호가 일치합니다.');
      } else {
        setPwConfirmCaption('비밀번호가 일치하지 않습니다.');
      }
    } else {
      setPwConfirmCaption('');
    }
  }, [valuePw, valuePwConfirm]);

  const handleOnClickCheckId = () => {
    const isOk = checkValidation.id(valueId);
    setIdConfirm(isOk);

    openPopup();
  };

  const handleOnClickJoin = () => {
    openSheet();
  };

  const headerRender = () => {
    return <HeaderLayout type={'page'} title={'회원가입'} />;
  };

  const popupRender = () => {
    return (
      <Popup
        titleStr={'중복확인'}
        messageStr={
          idConfirm
            ? '사용가능한 아이디 입니다.'
            : '아이디를 다시 입력해 주세요'
        }
        btnQuantity={1}
        firstBtnStr={'확인'}
        onClickDim={() => closePopup()}
        onClick={() => closePopup()}
      />
    );
  };

  const sheetRender = () => {
    return (
      <Sheet>
        <div>sample sheet body</div>
      </Sheet>
    );
  };

  const bodyRender = () => {
    return (
      <div className={'SampleJoinBody flex flex-col text-left px-4 pt-4'}>
        <div className={'text-xl'}>회원 정보 입력</div>

        <div className={'text-sm text-gray-400 mb-8'}>
          따릉이 회원 가입 정보를 입력해주세요.
        </div>

        <div className={'mb-5'}>
          <BaseInput
            name={'function'}
            labelText={'아이디'}
            placeholder={'아이디를 입력해 주세요'}
            captionText={idConfirm ? '사용 가능한 아이디 입니다.' : ''}
            captionClassName={'text-red-300'}
            value={valueId}
            onChange={onChangeId}
          >
            <BaseButton
              text={'중복 확인'}
              onClick={handleOnClickCheckId}
              className={'text-red-300 text-sm px-2 border-red-300 ml-2 w-32'}
            />
          </BaseInput>
        </div>

        <div className={'mb-5'}>
          <SecretInput
            name={'secret'}
            labelText={'비밀번호'}
            placeholder={'비밀번호를 입력해 주세요'}
            captionText={captionTextPw}
            captionClassName={'text-red-300'}
            value={valuePw}
            onChange={onChangePw}
          />
        </div>

        <div className={'mb-5'}>
          <SecretInput
            name={'secret'}
            labelText={'비밀번호 확인'}
            placeholder={'비밀번호를 입력해 주세요'}
            captionText={pwConfirmCaption}
            captionClassName={'text-red-300'}
            value={valuePwConfirm}
            onChange={onChangePwConfirm}
          />
        </div>

        <div className={'mb-5'}>
          <EmailInput name={'email'} labelText={'이메일'} />
        </div>

        <div className={'mb-8'}>
          <MeasureInput
            name={'measure'}
            labelText={'몸무게'}
            subLabelText={'(선택)'}
            value={valueMeasure}
            onChange={onChangeMeasure}
            measureUnit={'Kg'}
            captionText={
              <div className={'flex'}>
                {svgInfoBox(14, 14)} 운동 소비량 계산을 위한 정보입니다.
              </div>
            }
            captionClassName={'text-gray-400'}
          />
        </div>

        <div className={'text-xs text-gray-400'}>
          입력하신 정보는 서울시설공단에서 보관하며, 티머니GO에서는 별도로
          보유하지 않습니다.
        </div>

        <div
          className={'w-full p-4 fixed'}
          style={{
            bottom: 0,
            left: 0,
          }}
        >
          <BaseButton
            text={'따릉이 가입하기'}
            className={'border-none bg-red-300 text-white font-bold'}
            onClick={handleOnClickJoin}
          />
        </div>
      </div>
    );
  };

  const render = renderPage({
    header: headerRender(),
    popup: popupRender(),
    sheet: sheetRender(),
    body: bodyRender(),
  });

  return render;
};

export default SampleJoin;
