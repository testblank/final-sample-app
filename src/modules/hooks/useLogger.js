import { useEffect, useRef } from 'react';
import _ from 'lodash-es';
import loggerUtil from '@utils/loggerUtil';

const replaceAllBackSlash = targetStr => {
	let resultString = targetStr;
	let index = resultString.indexOf('\\');

	while (index >= 0) {
		resultString = resultString.replace('\\', '');
		index = resultString.indexOf('\\');
	}
	return resultString;
};

const replaceAllDoubleQuotes = targetStr => {
	let resultString = targetStr;
	let index = resultString.indexOf('"');

	while (index >= 0) {
		resultString = resultString.replace('"', '');
		index = resultString.indexOf('"');
	}
	return resultString;
};

const getValueString = (key, value) => {
	const valueString = replaceAllDoubleQuotes(replaceAllBackSlash(JSON.stringify(value)));

	return `${key}.${valueString}`;
};


const compare = (a, b) => {
	const returnResult = {
		different: [],
		missing_from_before: [],
		missing_from_after: [],
	};

	_.reduce(
		a,
		(result, value, key) => {
			if (_.has(b, key)) {
				if (_.isEqual(value, b[key])) {
					return result;
				} else if (typeof a[key] !== typeof {} || typeof b[key] !== typeof {}) {
					// dead end.

					result.different.push({ [key]: a[key] }, { [`${key}_after`]: b[key] });
					return result;
				} else {
					const deeper = compare(a[key], b[key]);

					result.different = result.different.concat(
						_.map(deeper.different, subPath => getValueString(key, subPath)),
					);

					result.missing_from_after = result.missing_from_after.concat(
						_.map(deeper.missing_from_after, subPath => getValueString(key, subPath)),
					);

					result.missing_from_before = result.missing_from_before.concat(
						_.map(deeper.missing_from_before, subPath => getValueString(key, subPath)),
					);
					return result;
				}
			} else {
				result.missing_from_after.push({ [key]: value });
				return result;
			}
		},
		returnResult,
	);

	_.reduce(
		b,
		(result, value, key) => {
			if (_.has(a, key)) {
				return result;
			} else {
				result.missing_from_before.push({ [key]: value });
				return result;
			}
		},
		returnResult,
	);
	return returnResult;
};


const useLogger = (componentName, array) => {
	useEffect(() => {
		loggerUtil.info(`${componentName} mounted`, array);
		return () => loggerUtil.info(`${componentName} unmounted`);
	}, []);

	const beforeValue = useRef(null);

	useEffect(() => {
		loggerUtil.info(`${componentName} updated`, array);
		if (_.isNull(beforeValue.current)) {
			beforeValue.current = array;
		} else {
			const compareResult = compare(beforeValue.current, array);

			loggerUtil.info(`변경 객체`, compareResult);
			beforeValue.current = array;
		}
	}, array);
};

export default useLogger;
