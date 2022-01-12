import { isNil, isString, isNull } from 'lodash-es';

function isDefinedLocalStorage() {
	if (isNil(localStorage)) {
		return false;
	}
	return true;
}

function getItem(key, defaultValue) {
	if (isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	if (isNil(key) || !isString(key)) {
		return '';
	}

	const returnValue = localStorage.getItem(key);

	if (isNull(returnValue)) {
		return defaultValue;
	}
	return returnValue;
}

function setItem(key, value) {
	if (isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	if (isNil(key) || !isString(key)) {
		return;
	}

	localStorage.setItem(key, value);
}

function removeItem(key) {
	if (isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	if (isNil(key) || !isString(key)) {
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
