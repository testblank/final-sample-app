import { isNil, isString, isUndefined } from 'lodash-es';

function getEnvByKey(key) {
	if (isNil(process)) {
		throw new Error('process 존재하지 않음.');
	}

	if (isNil(process.env)) {
		throw new Error('process.env 존재하지 않음.');
	}

	if (isNil(key) && !isString(key)) {
		return '';
	}

	if (isUndefined(process.env[key])) {
		return '';
	}

	return process.env[key];
}

const envUtil = {
	getEnvByKey,
};

export default envUtil;
