import { useState, useCallback } from 'react';

const makeCheckedObj = list => {
	const obj = {};
	let checkAllId = 0;
	const requiredIds = [];

	for (const key in list) {
		if (Object.hasOwnProperty.call(list, key)) {
			const el = list[key];

			obj[el.id] = !!el.checked;
			el.required && requiredIds.push(Number(el.id));
			if (el.checkAll) {
				checkAllId = el.id;
			}
		}
	}

	return { obj, checkAllId, requiredIds };
};

const useCheckBox = list => {
	const { obj, checkAllId, requiredIds } = makeCheckedObj(list);
	const [checkedObj, setCheckedObj] = useState(obj);
	const [checkAll, setCheckAll] = useState(false);

	const makeCheckAll = (objParam, checkAllParam) => {
		for (const key in objParam) {
			if (Object.hasOwnProperty.call(objParam, key)) {
				objParam[key] = !checkAllParam;
			}
		}
		return objParam;
	};

	const detectCheckAll = newObj => {
		let allTrue = true;

		for (const key in newObj) {
			if (Object.hasOwnProperty.call(newObj, key)) {
				if (Number(key) !== Number(checkAllId)) {
					const element = newObj[key];

					if (!element) {
						allTrue = false;
						break;
					}
				}
			}
		}
		return allTrue;
	};

	const onChange = e => {
		const { id, checked } = e.target;

		if (Number(id) === Number(checkAllId)) {
			const newObj = makeCheckAll(checkedObj, checkAll);

			setCheckedObj(newObj);
			setCheckAll(!checkAll);
		} else {
			const newObj = {
				...checkedObj,
				[id]: checked,
			};
			const result = detectCheckAll(newObj);

			setCheckedObj({
				...newObj,
				[checkAllId]: result,
			});
			setCheckAll(result);
		}
	};

	const detectRequiredAll = useCallback(() => {
		let isRequiredCheckedAll = true;

		for (const key in checkedObj) {
			if (Object.hasOwnProperty.call(checkedObj, key)) {
				if (requiredIds.includes(Number(key))) {
					const element = checkedObj[key];

					if (!element) {
						isRequiredCheckedAll = false;
						break;
					}
				}
			}
		}
		return isRequiredCheckedAll;
	}, [checkedObj, requiredIds]);

	return [checkedObj, onChange, detectRequiredAll];
};

export default useCheckBox;
