import _ from '@utils/lodashUtil';

function isDefinedLocalStorage(key) {
	if (_.isNil(localStorage) || !_.isString(key)) {
		return false;
	}
	return true;
}

function getItem(key) {
	if (!isDefinedLocalStorage(key)) {
		return '';
	}

	const returnValue = localStorage.getItem(key);

	return returnValue ?? '';
}

function setItem(key, value) {
	if (!isDefinedLocalStorage(key)) {
		return;
	}

	localStorage.setItem(key, value);
}

function removeItem(key) {
	if (!isDefinedLocalStorage(key)) {
		return;
	}

	localStorage.removeItem(key);
}

const localStorageUtil = {
	getItem,
	setItem,
	removeItem,
};

export default localStorageUtil;
