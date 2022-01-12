import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PrimaryInputPublish } from 'publish';
import { useSelect, useTextInput } from 'customHooks';
import { emailDomain } from 'data/mockup';
import { SelectBox } from 'components/SelectBox';

const EmailInput = (props) => {
  const { datas } = emailDomain;
  const initialSelectedValue = datas[0].value;
  const [id, onChangeId] = useTextInput();
  const [damain, onChangeDomain] = useTextInput();
  const [selected, onChangeSelect] = useSelect(initialSelectedValue);

  useEffect(() => {
    const findDomain = (id) => {
      for (const iterator of datas) {
        if (Number(iterator.id) === Number(id)) {
        }
      }
    };

    findDomain(selected);
  }, [selected, datas]);

  return (
    <>
      <PrimaryInputPublish {...props} value={id} onChange={onChangeId}>
        <SelectBox
          selected={selected}
          domainData={datas}
          onChangeSelect={onChangeSelect}
        />
      </PrimaryInputPublish>
      {Number(selected) + 1 === datas.length && (
        <div className={'flex items-center pt-2'}>
          <div className={'pr-2'}>@</div>
          <PrimaryInputPublish
            {...props}
            value={damain}
            labelText={''}
            onChange={onChangeDomain}
          />
        </div>
      )}
    </>
  );
};

EmailInput.propTypes = {
  name: PropTypes.oneOf([
    'primary',
    'email',
    'function',
    'measure',
    'secret',
    'secretNumber',
  ]).isRequired,
  labelText: PropTypes.string,
  subLabelText: PropTypes.string,
  caption: PropTypes.bool,
  captionText: PropTypes.string,
  placeholder: PropTypes.string,
  measureUnit: PropTypes.string,
  autoFocus: PropTypes.bool,
  resetBtn: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default EmailInput;
