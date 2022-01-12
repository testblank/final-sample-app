import { useRef, useEffect } from 'react';
import { useTextInput } from '@hooks';
import { PrimaryInputPublish } from 'publish';

const SecretNumberInput = (props) => {
  const refBirth = useRef(null);
  const refPersonalNum = useRef(null);

  const [birthValue, onChangeBirthValue, captionBirthText] = useTextInput(
    'birth',
  );
  const [
    personalNumValue,
    onChangePersonalNumValue,
    onKeyDownPersonalNum,
  ] = useTextInput('personalNum');

  useEffect(() => {
    birthValue.length >= 8 &&
      captionBirthText.length <= 0 &&
      refPersonalNum &&
      refPersonalNum.current &&
      refPersonalNum.current.focus();
  }, [birthValue, captionBirthText, refPersonalNum]);

  // todo: rrn check;
  // checkValidation.rrn();

  return (
    <div className={'flex flex-col max-w-xs items-start'}>
      <div
        className={'flex items-center border border-black rounded'}
        style={captionBirthText.length > 0 ? { borderColor: 'red' } : {}}
      >
        <PrimaryInputPublish
          {...props}
          placeholder={'YYYYMMDD'}
          onChange={onChangeBirthValue}
          value={birthValue}
          ref={refBirth}
          autoFocus
          className={'text-center border-none tracking-widest'}
        />
        <div>-</div>
        <PrimaryInputPublish
          {...props}
          placeholder={'0●●●●●●'}
          onChange={onChangePersonalNumValue}
          value={personalNumValue}
          ref={refPersonalNum}
          onKeyDown={onKeyDownPersonalNum}
          className={'text-center border-none tracking-widest'}
        />
      </div>
      <div className={'text-red-500 text-xs pl-2'}>{captionBirthText}</div>
    </div>
  );
};
export default SecretNumberInput;
