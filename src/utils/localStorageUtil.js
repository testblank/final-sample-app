import _ from 'lodash-es';

function _.isDefinedLocalStorage() {
	if (_.isNil(localStorage)) {
		return false;
	}
	return true;
}

function getItem(key, defaultValue) {
	if (_.isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	if (_.isNil(key) || !_.isString(key)) {
		return '';
	}

	const returnValue = localStorage.getItem(key);

	if (_.isNull(returnValue)) {
		return defaultValue;
	}
	return returnValue;
}

function setItem(key, value) {
	if (_.isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	if (_.isNil(key) || !_.isString(key)) {
		return;
	}

	localStorage.setItem(key, value);
}

function removeItem(key) {
	if (_.isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	if (_.isNil(key) || !_.isString(key)) {
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
