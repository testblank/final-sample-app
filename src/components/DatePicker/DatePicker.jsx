import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Sheet } from '@components/modal/Sheet';
import { DatePickerPublish } from 'publish';
import { setSheetState } from 'redux/reducers/modalReducer';
import DatePickerModalPublish from '@publish/DatePickerModalPublish';

const DatePicker = ({
  initialRegDate = Date.now(),
  onClickDate,
  onClickPrev,
  onClickNext,
  onSelectMonth,
}) => {
  const dispatch = useDispatch();
  const { sheetState } = useSelector((s) => s.modalReducer);

  // today or particular regDate
  const refToday = useRef(new Date(initialRegDate));
  const refTodayYear = useRef(refToday.current.getFullYear());
  const refTodayMonth = useRef(refToday.current.getMonth());

  // 화면에 보여줄 날짜
  const [regDate, setRegDate] = useState(new Date(initialRegDate));
  const [year, setYear] = useState(regDate.getFullYear());
  const [month, setMonth] = useState(regDate.getMonth());
  const [date, setDate] = useState(regDate.getDate());
  const [dateList, setDateList] = useState([]);

  const cbOnClickOpenSheet = () => {
    dispatch(setSheetState(true));
  };

  const cbOnClickDate = (selectedDate) => {
    if (Number(date) >= 1) {
      setDate(selectedDate);
      setRegDate(new Date(year, month, selectedDate));
      onClickDate && onClickDate();
    }
  };

  const cbOnClickPrev = () => {
    const newMonth = month - 1;
    const newRegDate = new Date(year, newMonth, 1);

    setMonth(newMonth);
    setRegDate(newRegDate);
    onClickPrev && onClickPrev();
  };

  const cbOnClickNext = () => {
    const newMonth = month + 1;
    const regDate = new Date(year, newMonth);
    const today = new Date(refTodayYear.current, refTodayMonth.current);

    if (regDate.getTime() <= today.getTime()) {
      const newRegDate = new Date(year, newMonth, 1);
      setMonth(newMonth);
      setRegDate(newRegDate);
      onClickNext && onClickNext();
    }
  };

  const cbOnClickClose = () => {
    dispatch(setSheetState(false));
  };

  const cbOnSelectMonth = (date) => {
    setYear(date.getFullYear());
    setMonth(date.getMonth());
    setRegDate(date);
    cbOnClickClose();
    onSelectMonth && onSelectMonth();
  };

  useEffect(() => {
    const yearGap = refTodayYear.current - year;
    const monthGap = refTodayMonth.current - month;
    const gap = 12 * yearGap + monthGap;

    const newDateList = [];
    // 현재 월과 화면에 보여지는 월의 gap만큼 push;
    for (let i = gap; i > 0; i--) {
      newDateList.push({
        date: new Date(year, month + i),
        selected: regDate.getMonth() === month + i,
      });
    }

    // 화면에 보여지는 달 기준으로 이전 달 10개씩 더 보여줌.
    for (let i = 0; i < 10; i++) {
      newDateList.push({
        date: new Date(year, month - i),
        selected: regDate.getMonth() === month - i,
      });
    }

    setDateList(newDateList);
  }, [regDate, year, month]);

  return (
    <>
      <DatePickerPublish
        regDate={regDate.getTime()}
        onClickOpenSheet={cbOnClickOpenSheet}
        onClickDate={cbOnClickDate}
        onClickPrev={cbOnClickPrev}
        onClickNext={cbOnClickNext}
      />
      {sheetState && (
        <Sheet>
          <DatePickerModalPublish
            dateList={dateList}
            onClickClose={cbOnClickClose}
            onSelect={cbOnSelectMonth}
          />
        </Sheet>
      )}
    </>
  );
};

export default DatePicker;
