import { arrayOf, bool, number, shape, string } from 'prop-types';
import { useState } from 'react';

const getSelectedId = list => {
	for (const key in list) {
		if (Object.hasOwnProperty.call(list, key)) {
			if (list[key].selected) {
				return list[key].id;
			}
		}
	}
	return null;
};

const useRadioButton = list => {
	const initialSelectedId = getSelectedId(list);
	const [selectedId, setSelectedId] = useState(initialSelectedId);

	const onClickRadioBtn = id => {
		if (id !== selectedId) {
			setSelectedId(id);
		}
	};

	return [selectedId, onClickRadioBtn];
};

useRadioButton.propTypes = {
	list: arrayOf(
		shape({
			id: number,
			text: string,
			selected: bool,
			disabled: bool,
		}),
	),
};

export default useRadioButton;
