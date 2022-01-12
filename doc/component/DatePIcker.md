# DatePicker

Toss의 월 별 수입/지출 내역을 보고 참고하였습니다.  
좌측 상단 yyyy/mm 부분을 클릭하면 월을 선택할 수 있는 sheet가 열립니다.
calendar상단의 mm표시 부분 좌우 버튼을 누르면 각각 prev, next 월로 넘어갑니다.

## _usage_

```jsx
import { DatePicker } from 'compnents/DatePicker';

return (
  <DatePicker
    initialRegDate={Date.now()}
    onClickDate={null}
    onClickPrev={null}
    onClickNext={null}
    onSelectMonth={null}
  />
);
```

## props

| prop           | type       | default value | desc                                     |
| -------------- | ---------- | ------------- | ---------------------------------------- |
| initialRegDate | number(ms) | Date.now()    | 초기화면에서 보여줄 날짜 입니다.         |
| onClickDate    | func       | null          | calendar에서 날짜를 눌렀으때 발생합니다. |
| onClickPrev    | func       | null          | `<` 버튼을 누를 때 발생합니다.           |
| onClickNext    | func       | null          | `>` 버튼을 누를 때 발생합니다.           |
| onSelectMonth  | func       | null          | sheet에서 월을 선택 했을 때 발생합니다.  |

## events

```javascript
const cbOnClickDate = (selectedDate) => {
  if (Number(date) >= 1) {
    setDate(selectedDate);
    setRegDate(new Date(year, month, selectedDate));
    onClickDate && onClickDate();
  }
};
```

달력에서 일을 누르면 해당 일을 state에 담아 해당 일이 눌려 졌다는 것을 화면에 표시 해 줍니다.

```javascript
const cbOnClickPrev = () => {
  const newMonth = month - 1;
  const newRegDate = new Date(year, newMonth, 1);

  setMonth(newMonth);
  setRegDate(newRegDate);
  onClickPrev && onClickPrev();
};
```

mm월 좌측의 `<` 버튼을 누르면 화면에 보여지는 mm월에 한 달을 뺀 새로운 달을 state에 담아줍니다.

```javascript
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
```

mm월 우측의 `>` 버튼을 누르면 화면에 보여지는 mm월에 한 달을 더한 새로운 달을 state에 담아줍니다.  
이떄 최대로 넘어갈 수 있는 달은 오늘을 기준으로는 더 넘어가지 않도록 되어 있습니다.

```javascript
useEffect(() => {
  const yearGap = refTodayYear.current - year;
  const monthGap = refTodayMonth.current - month;
  // 총 몇 달이 차이가 나는지
  const gap = 12 * yearGap + monthGap;

  const newDateList = [];

  for (let i = gap; i > 0; i--) {
    newDateList.push({
      date: new Date(year, month + i),
      selected: regDate.getMonth() === month + i,
    });
  }

  for (let i = 0; i < 10; i++) {
    newDateList.push({
      date: new Date(year, month - i),
      selected: regDate.getMonth() === month - i,
    });
  }

  setDateList(newDateList);
}, [regDate, year, month]);
```

useEffect에서는 modal sheet에 뿌려줄 dateList를 만듭니다.  
현재의 월과 선택 된 월 만큼 newDateList에 push해 줍니다.  
추가로 선택 된 월보다 이전 10개의 달을 push합니다.

---

# DatePickerPublish

initialRegDate를 받으면 그 값으로 `makeDateList`함수를 통해 dateList를 만든 후  
`Masonry(src/components/Masonry)`컴포넌트의 children으로 넣어줍니다.  
regDate의 문자 표현은 `dateToYYYYMM(util/dateToYYYYMM)`함수의 리턴값 입니다.

> ⚠️ day는 0(sunday) 부터 시작합니다.

## makeDateList

```javascript
import { makeDateList } from 'util/makeDateList';

// regDate: number
export const makeDateList = (regDate) => {
  const today = new Date(regDate);
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const startIdx = firstDay.getDay();

  const leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const ordinary = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 윤년인지 먼저 계산 합니다.
  let thisYear;
  if (firstDay.getFullYear() % 4 === 0) {
    thisYear = leap;
  } else {
    thisYear = ordinary;
  }

  // 매 월 1일 앞에 비워야할 칸 만큼 null값을 넣어줍니다.
  const empties = [];

  for (let i = 0; i < startIdx; i++) {
    empties.push(null);
  }

  // 월(month)에 맞는 일(date)의 갯수만큼 array를 채웁니다.
  const dates = [];

  for (let i = 1; i <= thisYear[month]; i++) {
    dates.push(i);
  }

  // 빈array 뒤에 date가 들어있는 array를 합칩니다.
  const dateList = empties.concat(dates);

  return dateList;
};
```
