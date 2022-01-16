import _ from '@utils/lodashUtil';
import loggerUtil from '@utils/loggerUtil';
import logger from 'redux-logger';


/**
 * import envUtil from '@utils/envUtil';
 * const testEnv = ${envUtil.getEnvByKey('REACT_APP_TEST');
 */
function getEnvByKey(key) {
	if (_.isNil(process)) {
		loggerUtil.warn('process 존재하지 않음');
		return '';
	}

	if (_.isNil(process.env)) {
		loggerUtil.warn('process.env 존재하지 않음');
		return '';
	}

	if (!_.isString(key)) {
		return '';
	}

	return process.env[key] ?? '';
}

const envUtil = {
	getEnvByKey,
};

export default envUtil;
