export const DATE_FORMAT = {
	dot: 'dot',
	line: 'line',
	ko: 'ko',
};
Object.freeze(DATE_FORMAT);

// num: number
export const numberToString = (num) => {
	const numString = `${num}`;
	return numString.length < 2 ? `0${numString}` : numString;
};

// regDate: number, format: typeof DATE_FORMAT
export const dateToYYYYMM = (regDate, format = DATE_FORMAT.dot) => {
	const date = new Date(regDate);
	const YYYY = date.getFullYear();
	const MM = numberToString(date.getMonth() + 1);
	// const DD = numberToString(date.getDate());

	let dateString;

	switch (format) {
		case DATE_FORMAT.dot:
			dateString = `${YYYY}.${MM}`;
			break;
		case DATE_FORMAT.line:
			dateString = `${YYYY}-${MM}`;
			break;
		case DATE_FORMAT.ko:
			dateString = `${YYYY}년 ${MM}월`;
			break;
		default:
			dateString = `${YYYY}.${MM}`;
			break;
	}

	return dateString;
};
