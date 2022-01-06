export const localStorageUtil = {
    getItem,
    setItem,
    removeItem
};

function getItem(key, defaultValue) {
    // return localStorage.getItem(key) ?? defaultValue;
    
    const returnValue = localStorage.getItem(key)
    if (returnValue === null) {
        return defaultValue;
    } else {
        return returnValue;
    }
}

function setItem(key, value) {
    localStorage.setItem(key, value);
}

function removeItem(key) {
    localStorage.removeItem(key);
}