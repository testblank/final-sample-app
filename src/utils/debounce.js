let timer = null;

const debounce = (func, delay) => {
	if (timer) {
		clearTimeout(timer);
	}

	timer = setTimeout(() => func(), delay);
};

export default debounce;
