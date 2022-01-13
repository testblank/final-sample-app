import _ from 'lodash-es';

/**
 * import envUtil from '@utils/envUtil';
 * const testEnv = ${envUtil.getEnvByKey('REACT_APP_TEST');
 */
function getEnvByKey(key) {
	if (_.isNil(process)) {
		throw new Error('process 존재하지 않음.');
	}

	if (_.isNil(process.env)) {
		throw new Error('process.env 존재하지 않음.');
	}

	if (_.isNil(key) && !_.isString(key)) {
		return '';
	}

	if (_.isUndefined(process.env[key])) {
		return '';
	}

	return process.env[key];
}

const envUtil = {
	getEnvByKey,
};

export default envUtil;
