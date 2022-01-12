import { useEffect, useState } from 'react';
import { bool, element, func, number, oneOf, string } from 'prop-types';

import PrimaryInputPublish from '@publish/PrimaryInputPublish2';
import { useSelect, useTextInput } from '@hooks';
import { emailDomain } from '@data/mockup';
import { SelectBox } from '@components/SelectBox';

const EmailInput = (props) => {
  const { datas } = emailDomain;

  const [id, onChangeId] = useTextInput('id');
  const [domain, onChangeDomain] = useTextInput('email');

  const [selected, onChangeSelect] = useSelect(datas);

  return (
    <>
      <PrimaryInputPublish {...props} value={id} onChange={onChangeId}>
        <SelectBox
          options={datas}
          selected={selected}
          onChangeSelect={onChangeSelect}
        />
      </PrimaryInputPublish>
      {Number(selected) === 3 && (
        <div className={'flex items-center pt-2'}>
          <div className={'pr-2'}>@</div>
          <PrimaryInputPublish
            {...props}
            value={domain}
            placeholder={'domain'}
            onChange={onChangeDomain}
          />
        </div>
      )}
    </>
  );
};

EmailInput.propTypes = {
  name: oneOf([
    'primary',
    'email',
    'function',
    'measure',
    'secret',
    'secretNumber',
  ]).isRequired,
  labelText: string,
  captionText: string,
  captionClassName: string,
  placeholder: string,
  autoFocus: bool,
  resetBtn: bool,
  showHideBtn: bool,
  isReadOnly: bool,
  isDisabled: bool,
  isRequired: bool,
  onBlur: func,
  onClick: func,
  onFocus: func,
  onSubmit: func,
  onkeydown: func,
  maxLength: number,
  children: element,
};

export default EmailInput;
