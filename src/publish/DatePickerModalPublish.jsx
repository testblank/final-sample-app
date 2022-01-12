import React, { useCallback, useLayoutEffect, useRef } from 'react';

import { svgIcClose, svgIcConfirm } from 'res/svg';
import { dateToYYYYMM, DATE_FORMAT } from 'util/dateToYYYYMM';

const DatePickerModalPublish = ({ dateList, onClickClose, onSelect }) => {
  const refList = useRef(null);
  const handleClickClose = () => {
    onClickClose && onClickClose();
  };

  const handleSelect = (date) => {
    onSelect && onSelect(date);
  };

  const findIndex = useCallback(() => {
    for (const key in dateList) {
      if (Object.hasOwnProperty.call(dateList, key)) {
        const element = dateList[key]['selected'];
        if (element) {
          return key;
        }
      }
    }
  }, [dateList]);

  useLayoutEffect(() => {
    const idx = findIndex();
    if (refList && refList.current) {
      refList.current.scroll({
        top: (idx - 3) * 50,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [findIndex]);

  return (
    <div className={'WheelDatePicker'}>
      <div className={'flex justify-between items-center px-6 pb-3 shadow'}>
        <div>연월 선택</div>
        <div onClick={handleClickClose}>{svgIcClose(24, 24)}</div>
      </div>
      <div
        ref={refList}
        className={'px-6'}
        style={{ height: '380px', overflowY: 'scroll' }}
      >
        {dateList.map((item, idx) => (
          <div
            key={`${item}_${idx}`}
            onClick={() => handleSelect(item.date)}
            style={{
              width: '100%',
              height: '50px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>{dateToYYYYMM(item.date, DATE_FORMAT.ko)}</div>
            {item.selected && <div>{svgIcConfirm(30, 30)}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePickerModalPublish;
