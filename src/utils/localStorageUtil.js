function isDefinedLocalStorage() {
	if (localStorage === undefined || localStorage === null) {
		return false;
	}
	return true;
}

function getItem(key, defaultValue) {
	if (isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	const returnValue = localStorage.getItem(key);
	if (returnValue === null) {
		return defaultValue;
	}
	return returnValue;
}

function setItem(key, value) {
	if (isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	localStorage.setItem(key, value);
}

function removeItem(key) {
	if (isDefinedLocalStorage() === false) {
		throw new Error('localStorage 존재하지 않음.');
	}

	localStorage.removeItem(key);
}

const localStorageUtil = {
	getItem,
	setItem,
	removeItem,
};

export default localStorageUtil;
