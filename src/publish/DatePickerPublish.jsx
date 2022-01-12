import React from 'react';
import { number, func } from 'prop-types';

import Masonry from 'components/Masonry/Masonry';
import { dateToYYYYMM, DATE_FORMAT } from 'util/dateToYYYYMM';
import { makeDateList } from 'util/makeDateList';
import { svgIcCalander, svgIcDown, svgIcLeft, svgIcRight } from 'res/svg';

const DatePickerPublish = ({
  regDate = Date.now(),
  onClickOpenSheet,
  onClickDate,
  onClickPrev,
  onClickNext,
}) => {
  const dateList = makeDateList(regDate);
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  const handleOpenSheet = () => {
    onClickOpenSheet && onClickOpenSheet();
  };

  const handleClickDate = (date) => {
    onClickDate && onClickDate(date);
  };

  const handleClickPrev = () => {
    onClickPrev && onClickPrev();
  };

  const handleClickNext = () => {
    onClickNext && onClickNext();
  };

  return (
    <div className={'DatePickerPublish'}>
      <div
        className={
          'DateSelectSection bg-gray-100 w-full flex items-center justify-between'
        }
        style={{ height: '50px', padding: '0 16px' }}
      >
        <div className={'flex items-center'} onClick={handleOpenSheet}>
          <div>{dateToYYYYMM(regDate, DATE_FORMAT.ko)}</div>
          <div style={{ marginLeft: '6px' }}>{svgIcDown(14, 14)}</div>
        </div>
        <div>{svgIcCalander(25, 24)}</div>
      </div>
      <div className={'CalendarSection w-full'}>
        <div
          className={'PresentDate flex justify-center items-center w-full'}
          style={{ height: '50px' }}
        >
          <div className={'px-2'} onClick={handleClickPrev}>
            {svgIcLeft(18, 18)}
          </div>
          <div className={'text-20 px-3'}>{dateToYYYYMM(regDate)}</div>
          <div className={'px-2'} onClick={handleClickNext}>
            {svgIcRight(18, 18)}
          </div>
        </div>
        <div className={'PresentCal w-full px-3'}>
          <div className={'Day'}>
            {/* columns={7} for 7days */}
            <Masonry columns={7}>
              {days.map((day, idx) => (
                <div key={`${day}_${idx}`} style={{ height: '30px' }}>
                  {day.toUpperCase()}
                </div>
              ))}
            </Masonry>
          </div>
          <div className={'Date'}>
            {/* columns={7} for 7days */}
            <Masonry columns={7}>
              {dateList.map((item, idx) => (
                <div
                  key={`${item}_${idx}`}
                  onClick={() => handleClickDate(Number(item))}
                  style={{
                    boxSizing: 'border-box',
                    height: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className={'rounded-full flex justify-center items-center'}
                    style={{
                      width: '30px',
                      height: '30px',
                      background:
                        Number(new Date(regDate).getDate()) === Number(item)
                          ? 'pink'
                          : 'transparent',
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
};

DatePickerPublish.propTypes = {
  regDate: number,
  onClickOpenWheel: func,
  onClickDate: func,
  onClickPrev: func,
  onClickNext: func,
};

export default DatePickerPublish;
