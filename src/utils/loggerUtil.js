import { isObject, uniqueId, now, isUndefined } from 'lodash-es';

const levels = {
	error: 0,
	warn: 1,
	info: 2,
};

const level = levels.info;
const timeMap = new Map();

const styles = {
	info: ['color: green', 'background: white', 'font-size: 10px', 'border: 1px solid gray', 'padding: 1px'].join(';'),

	warn: ['color: orange', 'background: white', 'font-size: 11px', 'border: 1px solid orange', 'padding: 2px'].join(';'),

	error: ['color: red', 'background: white', 'font-size: 13px', 'border: 1px solid red', 'padding: 2px'].join(';'),
};

function printLog(msg, obj, style) {
	if (isObject(obj)) {
		const unique = uniqueId();

		console.group(unique);
		console.log(`%c${msg}`, style);
		console.log(obj);
		console.groupEnd(unique);
	} else {
		console.log(`%c${msg}`, style);
	}
}

function info(msg, obj) {
	if (level >= levels.info) {
		printLog(msg, obj, styles.info);
	}
}

function warn(msg, obj) {
	if (level >= levels.warn) {
		printLog(msg, obj, styles.warn);
	}
}

function error(msg, obj) {
	if (level >= levels.error) {
		printLog(msg, obj, styles.error);
	}
}

function time(key) {
	timeMap.set(key, now());
}

function timeEnd(key) {
	if (isUndefined(timeMap.get(key))) {
		warn(`${key} 값이 업습니다.`);
		return;
	}
	info((now() - timeMap.get(key)) / 1000);
}

const loggerUtil = {
	info,
	warn,
	error,
	time,
	timeEnd,
};

export default loggerUtil;
