// regDate: number
export const makeDateList = (regDate) => {
  const today = new Date(regDate);
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const startIdx = firstDay.getDay();

  const leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const ordinary = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let thisYear;
  if (firstDay.getFullYear() % 4 === 0) {
    thisYear = leap;
  } else {
    thisYear = ordinary;
  }

  const empties = [];

  for (let i = 0; i < startIdx; i++) {
    empties.push(null);
  }

  const dates = [];

  for (let i = 1; i <= thisYear[month]; i++) {
    dates.push(i);
  }

  const dateList = empties.concat(dates);

  return dateList;
};
