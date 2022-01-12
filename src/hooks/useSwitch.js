const { useState } = require('react');

const findInitialObj = list => {
	const obj = {};

	for (const key in list) {
		if (Object.hasOwnProperty.call(list, key)) {
			obj[key] = {
				isOn: list[key].initialIsOn,
				disabled: list[key].disabled,
			};
		}
	}
	return obj;
};

const findDisableAllIndex = list => {
	for (const key in list) {
		if (Object.hasOwnProperty.call(list, key)) {
			if (list[key].disableAll) {
				return Number(key);
			}
		}
	}
	return 0;
};

const useSwitch = list => {
	const initialObj = findInitialObj(list);
	const disableAllIndex = findDisableAllIndex(list);
	const [stateObj, setStateObj] = useState(initialObj);

	// disabledAll이 아닌것 만 disabled로 바꿔줌
	const updateDisableState = (stateObjParam, disableAllIdx) => {
		const copy = { ...stateObjParam };

		for (const key in copy) {
			if (Object.hasOwnProperty.call(copy, key)) {
				if (Number(key) !== disableAllIdx) {
					copy[key].disabled = !copy[key].disabled;
				}
			}
		}
		setStateObj({
			...stateObjParam,
			...copy,
		});
	};

	const updateState = idx => {
		setStateObj({
			...stateObj,
			[idx]: {
				...stateObj[idx],
				isOn: !stateObj[idx].isOn,
			},
		});
	};

	const onClick = idx => {
		if (idx === disableAllIndex) {
			updateDisableState(stateObj, disableAllIndex);
			updateState(idx);
		} else if (!stateObj[idx].disabled) {
			updateState(idx);
		}
	};

	return [stateObj, onClick];
};

export default useSwitch;
