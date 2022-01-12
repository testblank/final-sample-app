import { useEffect } from 'react';
import loggerUtil from '@utils/loggerUtil';

const useLogger = (componentName, array) => {
	useEffect(() => {
		loggerUtil.info(`${componentName} mounted`, array);
		return () => loggerUtil.info(`${componentName} unmounted`);
	}, []);

	useEffect(() => {
		loggerUtil.info(`${componentName} updated`, array);
	}, array);
};

// function difference(object, base) {
// 	function changes(object, base) {
// 		return _.transform(object, function (result, value, key) {
// 			if (!_.isEqual(value, base[key])) {
// 				result[key] =
// 					isObject(value) && isObject(base[key])
// 						? changes(value, base[key])
// 						: [result, value];
// 			}
// 		});
// 	}
// 	return changes(object, base);
// }

export default useLogger;
