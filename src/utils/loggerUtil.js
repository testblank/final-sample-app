import _ from '@utils/lodashUtil';

const levels = {
	error: 0,
	warn: 1,
	info: 2,
};

const styles = {
	info: ['color: green', 'background: white', 'font-size: 13px', 'border: 1px solid gray', 'padding: 2px'].join(';'),

	warn: ['color: yellow', 'background: yellow', 'font-size: 13px', 'border: 1px solid gray', 'padding: 2px'].join(';'),

	error: ['color: red', 'background: red', 'font-size: 13px', 'border: 1px solid red', 'padding: 2px'].join(';'),
};

const level = 2;
const timeMap = new Map();

function printLog(msg, obj, style) {
	if (_.isObject(obj)) {
		const unique = _.uniqueId();

		console.group(unique);
		console.log(`%c ${msg}`, style);
		console.log(obj);
		console.groupEnd(unique);
	} else if (_.isObjectLike(msg)) {
		console.log(msg);
	} else {
		console.log(`%c ${msg}`, style);
	}
}

function info(msg, obj) {
	if (level <= levels.info) {
		printLog(msg, obj, styles.info);
	}
}

function warn(msg, obj) {
	if (level <= levels.warn) {
		printLog(msg, obj, styles.info);
	}
}

function error(msg, obj) {
	if (level <= levels.error) {
		printLog(msg, obj, styles.info);
	}
}

function time(key) {
	timeMap.set(key, _.now());
}

function timeEnd(key) {
	if (_.isUndefined(timeMap.get(key))) {
		warn(`${key} 값이 업습니다.`);
		return;
	}
	info((_.now() - timeMap.get(key)) / 1000);
}

const loggerUtil = {
	info,
	warn,
	error,
	time,
	timeEnd,
};

export default loggerUtil;
