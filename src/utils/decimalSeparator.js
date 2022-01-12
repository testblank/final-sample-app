const decimalSeparator = (value, isOneKShorten = false) => {
	if (!value) {
		return '0';
	}
	let target = '';

	if (typeof value === 'string') {
		target = value;
	} else if (typeof value === 'number') {
		target = String(value);
	}

	if (target.length > 6 && isOneKShorten) {
		target = target.slice(0, target.length - 3);
		target += 'k';
	}

	return target.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default decimalSeparator;
